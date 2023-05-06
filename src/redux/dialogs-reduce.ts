import {ActionsType, messagePageType} from "./State";


const dialogsReducer = (state: messagePageType, action: ActionsType)=>{

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({message: body})
            return state
        default:
            return state
    }
}


export const sendMessageCreator: any = () => ({type: 'SEND-MESSAGE'})//вынесли из MyPost функции - action creator,// которые передают action в виде объекта в dispatch
export const updateNewMessageBodyCreator: any = (text: string) => {//вынесли из MyPost функции - action creator,
    // которые передают action в виде объекта в dispatch
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY', body: text
    }
}

export default dialogsReducer