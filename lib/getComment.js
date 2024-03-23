export default async function GetComment(id){
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return comments.json()
}