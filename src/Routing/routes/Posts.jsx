import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import { usePosts } from "../../hooks/usePosts";
import PostFilter from "../../components/PostFilter";
import MyModal from "../../components/UI/MyModal/MyModal";
import MyButton from "../../components/UI/button/MyButton";
import { getPagesCount } from "../../utils/pages";
import PostForm from "../../components/PostForm";
import Loader from "../../components/UI/Loader/Loader";
import PostList from "../../components/PostList";
import Pagination from "../../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: '',})

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)

        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))

    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    
    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }
    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }

    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)


    return (
        <>
            <MyButton
                style={{marginTop: '20px'}}
                onClick={() => {setModal(true)}}
            >
                Create Post
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} posts={posts} />
            </MyModal>

            <hr style={{margin: '15px 0'}}></hr>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Something went wrong: {postError}</h1>}
            { isPostsLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts:'/>
            }
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
    );
}

export default Posts;