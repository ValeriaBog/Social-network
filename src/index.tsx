import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {appStateType,} from "./redux/State";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/State";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = (state: appStateType )=>{

    root.render(
        <BrowserRouter>
            <React.StrictMode> {/*потери this. Как только метод передаётся отдельно от объекта – this теряется.
            В данном случае, мы передаем метод через пропсы и он вызывается далеко отсюда, при этом теряется this-объект,
            метод которого вызывается.Там он будет вызывваться от пропса.С помощью метода функции .bind мы
            захардкожили наш store для этого метода addPost*/}
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}
    renderTree(store.getState())

    store.subscribe(renderTree)

    reportWebVitals();


    //для того чтобы дом-дерево полночтью перересовалось,мы все это помещаем в функцию,
    // которая будет вызываться в самом начале запуска приложения - это этот вызов снизу
    // (renderTree(state)). И будем ее вызывать тога когда нам еще требуется перерисовка,
    // например в функции addPost

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //из state.tsx мы уже импортнули Стейт в index.tsx (в App компоненту), но так же если мы возьмем
    // функцию - renderTree, кот находится в index.tsx и вызовем ее в state.tsx, то так же нам придется
    //импортнуть эту функцию (ФУНКЦИЯ СОДЕРЖИТ В СЕБЕ ТОТ ЖЕ СТЕЙТ!!!!) туда же - в state.tsx.
    // Таким образом, получается циклическая зависимость, которую необходимо избегать!
    // state.tsx ==> (импорт Стейта) ==> index.tsx // index.tsx ==> (импорт функции СО СТЕЙТОМ) ==> state.tsx
    // получается цикл.зависимость

    // решение - мы создали функцию subscribe в state.tsx(там, куда нам нужен был бы импорт),
    // которая будет принмать в себя коллбек-нашу функцию renderTree и вызывать эту функцию мы будем в index.tsx,
    // в аргументе которой будет передаваться наша функ-renderTree.
    // Таким образом, мы избежали цикл.зависимсоть.
    // Вместо импорта - index.tsx ==> (импорт функции СО СТЕЙТОМ) ==> state.tsx,
    // мы просто передали нашу функцию как аргумент другой функции




