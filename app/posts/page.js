import getAllPost from '@/lib/getAllPost'
import Link from 'next/link'
import React from 'react'

export default async function Postpage() {
    const posts = await getAllPost()
    console.log(posts)
  return (
    <div className='mt-6'>
      <h1>All Post</h1>
      <ul className='mt-5'>
        {posts.map(post=><li className='bg-green-500 mt-4' key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
      </ul>
      
    </div>
  )
}
