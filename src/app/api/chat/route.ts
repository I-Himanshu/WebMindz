import { NextResponse } from 'next/server';

const CODES = {
    "doctor": "clo5xbzdg0001mb087q25c9zo",
    "default":"clnpzydgw0001mo08n9kwq6ia"
}
export async function POST(request: Request) {
    
    var req = await request.json();
    const input = req.input;
    const role = req.role;

    
    const response = await fetch(`https://llamastudio.dev/api/${CODES[role]}`, {
        method: 'POST',
        body: JSON.stringify({ input: input }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
    return NextResponse.json({ chat: String(data) });
}