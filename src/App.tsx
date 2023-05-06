import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionsType, appStateType, StoreType} from "./redux/State";


export type appPropsType = {
    state: appStateType
    dispatch: (action: ActionsType) => void
    store: StoreType
}


function App(props: appPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile state={props.state}
                                                             dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs"
                           element={
                               <Dialogs dispatch={props.dispatch}
                                        store={props.store}
                               />
                           }/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
