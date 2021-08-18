import React, { createContext, useState } from 'react' 
import { NEWS } from '../../utils/types'
import { News } from '../../dto/news'

type InitialState = {
    currentNews: NEWS | undefined,
    setCurrentNews: (news:NEWS) => void,
    favs: News[],
    addNewsToFavorites: (news:News) => void,
    removeNewsFromFavorites: (id: string) => News[],
    setFavs: (news:News[]) => void,
    dashboardNews: News[],
    addNewsToDashboard: (news:News[]) => void,
    setNewsToDashboard: (news:News[]) => void
}

const initialState:InitialState = {
    currentNews: undefined,
    favs: [],
    setFavs: () => {},
    addNewsToFavorites: () => {},
    removeNewsFromFavorites: () => [],
    setCurrentNews: () => {},
    dashboardNews: [],
    addNewsToDashboard: () => {},
    setNewsToDashboard: () => {}
}

export const Context = createContext(initialState)

export const ContextProvider:React.FC = ({ children }) => {

    const [currentNews, setCurrentNew] = useState<NEWS | undefined>()
    const [dashboardNews, setDashboardNews] = useState<News[]>([])
    const [favorites, setFavorites] = useState<News[]>([])
    
    // Interactions with the global state
    const addNewsToFavorites = (news:News) => setFavorites((old) => ([...old, news]))

    const removeNewsFromFavorites = (id:string) => {
        setFavorites(old => old.filter(news => news.objectID !== id))
        return favorites.filter(news => news.objectID !== id)
    } 
    
    const setCurrentNews = (news:NEWS) => setCurrentNew(news)
    const addNewsToDashboard = (news:News[]) => setDashboardNews(old => [...old, ...news])
    const setFavs = (news:News[]) => setFavorites(news)


    const initialState:InitialState = {
        currentNews,
        favs: favorites,
        setFavs,
        addNewsToFavorites,
        removeNewsFromFavorites,
        setCurrentNews,
        dashboardNews,
        addNewsToDashboard,
        setNewsToDashboard: (news:News[]) => setDashboardNews(news)
    }

    return (
        <Context.Provider value={initialState}>
            {
                children
            }
        </Context.Provider>
    )
}