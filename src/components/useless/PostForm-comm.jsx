import React, {useRef, useState} from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({create, posts}) => {


    //  теперь post является объектом и хранить ключи с данными
    const [post, setPost] = useState({title: '', body: '',});
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');

    // Хук useRef
    /*  Можно получить доступ к дом элементу */
    const valueInputRef = useRef()


    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            id: posts.length + 1,
            ...post

            // title,
            // body,
        }

    //  изменять саму переменную нельзя, ее мы перезаписываем
    //  setPosts(posts.push({id: 5, title: title, body: description}))
        setPost({title: '', body: '',})

    //  
        create(newPost)
    }

    return(
        <form style={{padding: '20px'}}>

                {/* Управляемые input'ы */}
                <MyInput 
                    style = {{width: '40%'}}
                    value = {post.title}
                                        /*  переносим все ключи (например и body) 
                                            и перезаписать нужное */  
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