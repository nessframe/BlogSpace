import React, {useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'about the Java!'},
        {id: 2, title: 'Python', body: 'about the Python!'},
        {id: 3, title: 'C#', body: 'about the C#!'},
        {id: 4, title: 'C++', body: 'about the C++!'},
    ]);

//  данная функция передается в PostForm
    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }



    const [selectedSort, setSelectedSort] = useState('')

    function sortPosts(sort) {
        setSelectedSort(sort)
    //  функция сорт мутирует объект поэтому мы создаем копию объекта
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }



    return (
        <>
            <PostForm create={createPost} posts={posts} />

            <hr style={{margin: '15px 0'}}></hr>



            <MySelect
                value={selectedSort}
                onChange={sortPosts}

                defaultValue = 'Sort by'
                options={[
                    {value: 'title', name: 'title'},
                    {value: 'body', name: 'description'}
                ]}
            />



            {
            posts.length === 0
            ?  <h1 style={{textAlign: 'center', padding: '20px 0'}}>
                    no Posts yet
                </h1>
            :   <PostList remove={removePost} posts={posts} title='Posts:'/>
            }
        </>
    );
}

export default App;