import React, {useMemo, useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'about the Java!'},
        {id: 2, title: 'Python', body: 'about the Python!'},
        {id: 3, title: 'C#', body: 'about the C#!'},
        {id: 4, title: 'C++', body: 'about the C++!'},
    ]);
    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }
    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }

//  ------
    const [filter, setFilter] = useState({sort: '', query: '',})

//  sort
    const finalPosts = useMemo(() => {
        if (filter.sort) {
            return  [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

// search
    const sortedAndSearchPosts = useMemo(() => {
        return finalPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, finalPosts])
//  ------

    const [modal, setModal] = useState(false)


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
            <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts:'/>
        </>
    );
}

export default App;