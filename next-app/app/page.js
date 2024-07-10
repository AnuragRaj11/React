"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { submitAction } from '@/actions/form'
import { useSession, signIn, signOut } from "next-auth/react"


const page = () => {


  const handleClick = async () => {
    let data = {
      name: "ANURAG",
      role: "Coder"
    }
    let a = await fetch("/api", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }
  return (
    <div>
      hello next.js
      <Navbar />
      <img className="" src="http://www.menucool.com/slider/prod/image-slider-1.jpg" alt="" />

      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick} className='border border-white'>click me</button>

      <>
        Not signed in <br />
        <button className='border border-red-500' onClick={() => signIn("github")}>Sign in using Github</button>
        <button className='border border-red-500' onClick={() => signIn("google")}>Sign in using Google</button>
      </>
    </div>

  )
}

export default page
