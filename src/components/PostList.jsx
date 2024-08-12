import React, {useState} from "react";
import Post from "./Post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
            <TransitionGroup>
                {posts.map((post, i) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post index={i + 1} remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;