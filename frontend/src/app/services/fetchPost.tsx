export const fetchPost = async (page: number = 0, limit: number = 5): Promise<any[]> => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page * limit}&_limit=${limit}`)
    return await posts.json()
}