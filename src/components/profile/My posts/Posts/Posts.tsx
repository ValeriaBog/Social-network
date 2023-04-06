import React from 'react';
import classes from './Posts.module.css';

const Posts = (props: any) => {
    return (
        <div className={classes.postAll}>
            <div className={classes.item}>
                <img src='https://mobimg.b-cdn.net/v3/fetch/21/215e3ddf9d2d722a16e435992d354932.jpeg?w=1200&r=0.5625'/>
                {props.message}
            </div>
            <div><span>{props.likeCounter} likes</span></div>
        </div>

    );
}

export default Posts;