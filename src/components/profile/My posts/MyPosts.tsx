import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";


const MyPosts = () => {

    return (
        <div>
            <div className={classes.postsBlock}>
              <h3>My Posts</h3>
                <div >
                    <div><textarea></textarea></div>
                    <div><button>Add post</button></div>
                </div>
                <div className={classes.posts}>
                    <Posts message='Hi! What are you doing now?' likeCounter='17'/>
                    <Posts message="It's my first post" likeCounter='43'/>
                    <Posts message='What do uou think about me?' likeCounter='10'/>
                    <Posts message="I can tell you about yourself If you don't mind!" likeCounter='22'/>
                    <Posts message='Would you like to go to film with me?' likeCounter='5'/>

                </div>
            </div>
        </div>
    );
}

export default MyPosts;