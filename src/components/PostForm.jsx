import React, {useRef, useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create, posts}) => {

    const [post, setPost] = useState({title: '', body: '',});


    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            id: posts.length + 1,
            ...post
        }

    //  перезаписываем posts
        create(newPost)
        setPost({title: '', body: '',})
    }

    return(
        <form style={{padding: '20px 0'}}>
                <MyInput
                    value = {post.title}

                    onChange = {e => setPost({...post, title: e.target.value})}
                    placeholder = 'name of post'
                />

                <MyInput 
                    value = {post.body}
                    onChange = {e => setPost({...post, body: e.target.value})}
                    placeholder = 'description of post'
                />

                <MyButton onClick = {addNewPost}>Create Post</MyButton>
        </form>
    )
}

export default PostForm;