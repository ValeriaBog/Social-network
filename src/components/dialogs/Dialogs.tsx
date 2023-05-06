import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {DialogsItems} from "./DialogItems/DialogsItems";
import {DialogsMessages} from "./Message/Message";
import {ActionsType, StoreType,} from "../../redux/State";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduce";

type dialogsPropsType = {
    dispatch: (action: ActionsType) => void
    store: StoreType
}
const Dialogs = (props: dialogsPropsType) => {

    const state = props.store.getState().messagesPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))


    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {state.dialogs.map(e => {
                    return <DialogsItems name={e.name} id={e.id}/>
                })}
            </div>
            <div className={classes.messages}>
                {state.messages.map(e => {
                    return <DialogsMessages message={e.message}/>
                })}
                <div>
                    <div> <textarea value={state.newMessageBody}
                                    placeholder={'Enter your message...'}
                                    onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>ADD</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;