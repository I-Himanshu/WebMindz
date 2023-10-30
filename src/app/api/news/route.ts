import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&apiKey=5c77787ab4734bf19cfe3cac90ff5a54",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    if(data.status == "ok") return NextResponse.json(data.articles);
    else if(data.status == "error") return NextResponse.json({error: data.message});
    else return NextResponse.json({error: "Unknown error"});

}