import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemsType={
    name: string
    id: number
}

type DialogsMessagesType={
    message: string
}

const DialogsItems = (props: DialogsItemsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/'+props.id}>{props.name} </NavLink>
        </div>
    )
}

const DialogsMessages = (props: DialogsMessagesType) => {
    return (
        <div className={classes.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItems name={'Ivan'} id={1}/>
                <DialogsItems name={'Kate'} id={2}/>
                <DialogsItems name={'Misha'} id={3}/>
                <DialogsItems name={'Tasha'} id={4}/>
                <DialogsItems name={'Olga'} id={5}/>
                <DialogsItems name={'Anna'} id={6}/>
                <DialogsItems name={'Helen'} id={7}/>
                <DialogsItems name={'Alex'} id={8}/>
            </div>
            <div className={classes.messages}>
                <DialogsMessages message={'Hi!'}/>
                <DialogsMessages message={'How are you doing?'}/>
                <DialogsMessages message={'Cool!'}/>
            </div>
        </div>

    );
}

export default Dialogs;