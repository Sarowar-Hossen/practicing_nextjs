import Comment from '@/app/Components/Comment';
import getAllPost from '@/lib/getAllPost';
import getAllPostBody from '@/lib/getAllPostBody';
import GetComment from '@/lib/getComment';
import React, { Suspense } from 'react'

export async function generateMetadata({params}){
  const {id} = params;
  const post = await getAllPostBody(id)
  return {
    title: post.title,
    description:post.body
  }

}

export default async function page({params}) {
    const {id} = params;

    const Comments = GetComment(id)
    const post = await getAllPostBody(id)
    // const [posts,comment]= await Promise.all([post,Comments])
    // console.log(Comments)
  return (
    <div>
      {post.body}
      <hr/>
      <Suspense fallback='<h1>Loading comments...</h1>'>
      <Comment promise={Comments} />
      </Suspense>
    </div>
  )
}
