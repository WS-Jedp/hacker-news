import React, { createContext, useState } from 'react' 
import { NEWS } from '../../utils/types'
import { News } from '../../dto/news'

type InitialState = {
    currentNews: NEWS | undefined,
    favs: News[],
    addNewsToFavorites: (news:News) => void,
    removeNewsFromFavorites: (id: string) => void,
    setCurrentNews: (news:NEWS) => void
}

const initialState:InitialState = {
    currentNews: undefined,
    favs: [],
    addNewsToFavorites: () => {},
    removeNewsFromFavorites: () => {},
    setCurrentNews: () => {}
}

export const Context = createContext(initialState)

export const ContextProvider:React.FC = ({ children }) => {

    const [currentNews, setCurrentNew] = useState<NEWS | undefined>()
    const [favorites, setFavorites] = useState<News[]>([])
    
    // Interactions with the global state
    const addNewsToFavorites = (news:News) => setFavorites((old) => ([...old, news]))
    const removeNewsFromFavorites = (id:string) => setFavorites(old => old.filter(news => news.objectId !== id)) 
    const setCurrentNews = (news:NEWS) => setCurrentNew(news)

    const initialState:InitialState = {
        currentNews,
        favs: favorites,
        addNewsToFavorites,
        removeNewsFromFavorites,
        setCurrentNews
    }

    return (
        <Context.Provider value={initialState}>
            {
                children
            }
        </Context.Provider>
    )
}