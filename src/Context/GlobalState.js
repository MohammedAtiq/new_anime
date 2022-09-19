import React, { createContext, useEffect, useReducer } from 'react';

const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADDTOWATCHED":
            return {
                ...state, watchList: [action.payload, ...state.watchList],
            }
        case "REMOVEWATCHLIST":
            return {
                ...state, watchList: state.watchList.filter(anime => anime.mal_id !== action.payload),
            }
        default:
            return state;
    }
}



export const GlobalContext = createContext(initialState);

export const GlobalState = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])

    const addToWatchList = movie => {
        dispatch({ type: 'ADDTOWATCHED', payload: movie });
    }

    const removeWatchList = (id) => {
        dispatch({ type: 'REMOVEWATCHLIST', payload: id });
    }
    return (
        <GlobalContext.Provider value={{ watchList: state.watchList, watched: state.watched, addToWatchList, removeWatchList }}>
            {props.children}
        </GlobalContext.Provider>
    )
}