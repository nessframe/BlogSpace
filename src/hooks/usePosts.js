import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const finalPosts = useMemo(() => {
        if (sort) {
            return  [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return finalPosts;
}

export const usePosts = (posts, sort, query) => {
    const finalPosts = useSortedPosts(posts, sort)
    const sortedAndSearchPosts = useMemo(() => {
        return finalPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, finalPosts])

    return sortedAndSearchPosts;
}