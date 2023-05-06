import React, {useRef} from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {
    ActionsType,
    postsType,
} from "../../../redux/State";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduce";

type myPostsPropsType = {
    profilePage: postsType[]
    dispatch: (action: ActionsType)=>void
    upDateText: string


}

const MyPosts = (props: myPostsPropsType) => {

    const addTaskTextAreaRef = useRef<HTMLTextAreaElement>(null)

    const onClickHandler = () => {
            props.dispatch(addPostActionCreator())
    }

    const onPostChange=()=>{
        if(addTaskTextAreaRef.current){
            const text = addTaskTextAreaRef.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div>
            <div className={classes.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div><textarea onChange={onPostChange}
                                   ref={addTaskTextAreaRef}
                                   value={props.upDateText} />
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {props.profilePage.map(e => {
                        return <Posts message={e.message} likeCounter={e.likeCounter}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;