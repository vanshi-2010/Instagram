import React, { useState } from "react";
import "./timeline.css";
import Sugesstions from "./sugesstions";
import Post from "./posts/post";

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "arjun_kumar",
            postImage: "https://images.pexels.com/photos/5231575/pexels-photo-5231575.jpeg?auto=compress&cs=tinysrgb&w=600",
            likes: 158,
            timestamp: "3h",
        },
        {
            user: "radhika_sharma",
            postImage: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            likes: 588,
            timestamp: "2d",
        },
        {
            user: "vijay_verma",
            postImage: "https://images.pexels.com/photos/15988878/pexels-photo-15988878/free-photo-of-view-of-osaka-castle-through-maple-leaves.jpeg",
            likes: 289,
            timestamp: "1d",
        },
        {
            user: "ananya_singh",
            postImage: "https://images.pexels.com/photos/7034390/pexels-photo-7034390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            likes: 489,
            timestamp: "5h",
        },
        {
            user: "rahul_patel",
            postImage: "https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            likes: 589,
            timestamp: "20h",
        },
    ]);

    // Example function to add a new post
    const addNewPost = () => {
        const newPost = {
            user: "new_user",
            postImage: "",
            likes: 0,
            timestamp: "1m",
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="timeline">
            <div className="timeline_left">
                <div className="timeline_posts">
                    {posts.map((posts) => (
                        <Post 
                          user = {posts.user}
                          postImage = {posts.postImage}
                          likes = {posts.likes}
                          timestamp = {posts.timestamp}
                        />
                    ))}
                </div>
                <button onClick={addNewPost}>Add New Post</button> {/* Button to add a new post */}
            </div>
            <div className="timeline_right">
                <Sugesstions />
            </div>
        </div>
    );
}

export default Timeline;
