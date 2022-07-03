import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";

export function Posts() {

    let isLoading = false;
    const [posts, setPosts] = useState([]);
    useLayoutEffect(()=>{
        console.log("Before Rendering!!");
        isLoading = true;
    }); 

    useEffect(()=>{
        isLoading = false;
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data);
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log("error while fethching: "+err);
        });
    },[]);

    if(isLoading) {
        return (
            <div>
                UI is Loading....................
            </div>
        );
    } else {
        return (
            <div>
                <div>Posts</div>
                <ul>
                    {
                        posts.map((p)=>{
                            return (
                            <span>
                                <li key={p.id}>{p.title}</li>
                                <button onClick={()=>{
                                    posts.splice(p.id-1,1);
                                    setPosts(posts);
                                }}>Delete</button>
                            </span>
                            )
                        })
                    }               
                </ul>
            </div>
        );
    }   
}