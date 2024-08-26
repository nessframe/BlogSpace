import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../../API/PostService";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPost, loading, error] = useFetching( async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchCom, comLoading, comError] = useFetching( async () => {
        const response = await PostService.getComments(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPost()
        fetchCom()
    }, [])

    return (
        <div>
            <h1>Post {params.id}:</h1>
            {loading && <Loader />}
            {error && <p>Error: {error}</p>}
            {!loading && !error && post && (
                <div>
                    <br/>
                    <h2>{post.title}</h2> <br/>
                    <p>{post.body}</p>
                </div>
            )}
            {comLoading && <Loader />}
            {comError && <p>Error: {error}</p>}
            {!comLoading && !comError && comments && (
                <div style={{marginTop: '150px'}}>
                    <h1>Comments:</h1>
                    {comments.map((comment, index) => (
                        <div key={comment.id}>
                            <p>{index + 1}.</p>
                            <h3>name: {comment.name}</h3>
                            <h3>email: {comment.email}</h3><br/>

                            <p>{comment.body}</p>
                            <hr/>
                            <br/> <br/> <br/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;