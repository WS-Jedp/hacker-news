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
    setNewsToDashboard: (news:News[]) => void,
    newsDetail: News | undefined,
    setNewsDetail: (news:News) => News
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
    setNewsToDashboard: () => {},
    newsDetail: undefined,
    setNewsDetail: () => ({ author: "", created_at: "", created_at_i: 0, objectID: "", points: 0, story_title: "", story_url: { value: "" } })
}

export const Context = createContext(initialState)

export const ContextProvider:React.FC = ({ children }) => {

    const [currentNews, setCurrentNew] = useState<NEWS | undefined>()
    const [dashboardNews, setDashboardNews] = useState<News[]>([])
    const [favorites, setFavorites] = useState<News[]>([])
    const [newsDetail, setNewsDetail] = useState<News|undefined>(undefined)
    
    // Interactions with the global state
    const addNewsToFavorites = (news:News) => setFavorites((old) => ([...old, news]))

    const removeNewsFromFavorites = (id:string) => {
        setFavorites(old => old.filter(news => news.objectID !== id))
        return favorites.filter(news => news.objectID !== id)
    } 
    
    const setCurrentNews = (news:NEWS) => setCurrentNew(news)
    const addNewsToDashboard = (news:News[]) => setDashboardNews(old => [...old, ...news])
    const setFavs = (news:News[]) => setFavorites(news)

    const handleSetNewsDetail = (news:News) => {
        setNewsDetail(news)
        return news
    }


    const initialState:InitialState = {
        currentNews,
        favs: favorites,
        setFavs,
        addNewsToFavorites,
        removeNewsFromFavorites,
        setCurrentNews,
        dashboardNews,
        addNewsToDashboard,
        setNewsToDashboard: (news:News[]) => setDashboardNews(news),
        newsDetail,
        setNewsDetail: handleSetNewsDetail
    }

    return (
        <Context.Provider value={initialState}>
            {
                children
            }
        </Context.Provider>
    )
}