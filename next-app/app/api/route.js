import { NextResponse } from "next/server";

// export async function POST(request) {
//     let data = await request.json()
//     console.log(data)
//     return NextResponse.json({success: true, data})
// } 
  

import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ]
})

export {handler as GET, handler as POST}