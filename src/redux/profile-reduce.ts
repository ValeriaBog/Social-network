import {ActionsType,  postsPageType, postsType} from "./State";


const profileReducer = (state: postsPageType, action: ActionsType)=>{

    switch (action.type) {
        case "ADD-POST":
            const obj: postsType = {message: state.upDateText, likeCounter: '29'}
            state.posts.push(obj)
            state.upDateText = '';
            return state
        case "UPDATE-NEW-POST":
            state.upDateText = action.newText //action - объект, по этому берем из него нашу передачу аргументов
            return state
        default :
            return state
    }

}

export const addPostActionCreator: any = () => ({type: 'ADD-POST'})//вынесли из MyPost функции - action creator,// которые передают action в виде объекта в dispatch
export const updateNewPostTextActionCreator: any = (text: string) => {//вынесли из MyPost функции - action creator,
    // которые передают action в виде объекта в dispatch
    return {
        type: 'UPDATE-NEW-POST', newText: text
    }
}
export default profileReducer