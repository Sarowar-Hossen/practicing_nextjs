"use client"
import React from 'react'

export default function Button() {
  return (
    <div className='mt-5'>
    <button className='bg-green-500 rounded-sm p-4' onClick={()=>console.log("I have clicked here")}>Click here</button>
  </div>
  )
}