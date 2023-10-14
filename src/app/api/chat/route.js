import { NextResponse } from 'next/server';

export async function POST() {
    // make fetch request to https://llamastudio.dev/api/clnpzydgw0001mo08n9kwq6ia and return output and send data input: hello
    const response = await fetch('https://llamastudio.dev/api/clnpzydgw0001mo08n9kwq6ia', {
        method: 'POST',
        body: JSON.stringify({ input: 'hello' }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return NextResponse.json({ chat: data });
}