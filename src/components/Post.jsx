import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = (props) => {

    const router = useNavigate()
    return(
        <div className="post">
            <div className="post-content">
                <strong className="post-heading">
                    {props.post.id}. <span
                    onClick={() => {router(`/BlogSpace/posts/${props.post.id}`)}}
                    style={{textDecoration: 'underline', cursor: 'pointer'}}>
                        {props.post.title}
                    </span>
                </strong>
                <br/><br/>
                <p className="post-text">
                    {props.post.body}
                </p>
            </div>
            <div>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default Post;