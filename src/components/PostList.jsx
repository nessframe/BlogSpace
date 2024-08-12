import React, {useState} from "react";
import Post from "./Post";

const PostList = ({posts, remove, title},) => {

    if (!posts.length) {
        return(
            <h1 style={{textAlign: 'center', padding: '20px 0'}}>
                <p style={{color: 'red'}}>404</p>
                posts not found
            </h1>
        )
    }


    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
                {posts.map((post, i) => 
                    <Post index={i + 1} remove={remove} post={post} key={post.id}/>
                )}
        </div>
    );
}

export default PostList;