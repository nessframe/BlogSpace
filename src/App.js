import React, {useMemo, useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'about the Java!'},
        {id: 2, title: 'Python', body: 'about the Python!'},
        {id: 3, title: 'C#', body: 'about the C#!'},
        {id: 4, title: 'C++', body: 'about the C++!'},
    ]);
    function createPost(newPost) {
        setPosts([...posts, newPost])
    }
    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }



    const [selectedSort, setSelectedSort] = useState('')
    function sortPosts(sort) {
        setSelectedSort(sort)
    }

    const finalPosts = useMemo(() => {
        if (selectedSort) {
            return  [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])


    
    const [searchQuery, setSearchQuery] = useState('')
    const sortedAndSearchPosts = useMemo(() => {
        return finalPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, finalPosts])



    return (
        <>
            <PostForm create={createPost} posts={posts} />


            <hr style={{margin: '15px 0'}}></hr>
            <div>
                <MyInput
                    placeholder={'search...'}
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                />

                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}

                    defaultValue = 'Sort by'
                    options={[
                        {value: 'title', name: 'title'},
                        {value: 'body', name: 'description'}
                    ]}
                />
            </div>


            {
            sortedAndSearchPosts.length === 0
            ?  <h1 style={{textAlign: 'center', padding: '20px 0'}}>
                    <p style={{color: 'red'}}>404</p>
                    posts not found
                </h1>
            :   <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts:'/>
            }
        </>
    );
}

export default App;