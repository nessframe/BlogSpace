import React, {useState} from "react";
import Post from "./Post";

const PostList = ({posts, remove, title},) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {
                posts.map((post, i) => 
                <Post 
                    index={i + 1} 
                    remove={remove} 
                    post={post} 
                    key={post.id}
                />
            )
            }
        </div>
    );
}

export default PostList;