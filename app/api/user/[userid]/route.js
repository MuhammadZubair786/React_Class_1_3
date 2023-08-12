import { NextRequest, NextResponse } from "next/server";
import { user } from '../../../ulits/db'

export async function GET(request, content) {
    console.log(content.params.userid)
    const data = [];
    user.map((v, i) => {
        if (v.id == content.params.userid) {
            data.push(v)
        }
    })
    console.log(data.length)
    if (data.length == 0) {
        return NextResponse.json({ message: "Not Get Id" }, { status: 200 })

    }
    else {
        return NextResponse.json({ message: "Get successfully User", data: data }, { status: 200 })

    }

    // const data = user;

}