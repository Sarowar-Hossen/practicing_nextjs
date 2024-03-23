import React from 'react'

export default async function Comment({promise}) {
    const Commentss = await promise
  return (
    <div>
      <ul>
        {
          Commentss.map(comment=>(<li key={comment.id}>{comment.name}<br/>{comment.email}</li>))
        }
      </ul>
    </div>
  )
}
