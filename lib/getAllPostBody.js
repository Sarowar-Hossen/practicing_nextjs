export default async function getAllPostBody(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return result.json()
} 