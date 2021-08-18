import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../../context/general'
import useCurrentCachedNews from '../../hooks/useCurrentCachedNews'
import { useIntersection } from '../../hooks/useIntersection'
import useFavCachedNews from '../../hooks/useFavCachedNews'
import { filterNews } from '../../utils/filterNews'

import { News } from '../../dto/news'

import { getAllNews, getSpecificNews } from '../../services/news/get'

import { Layout } from '../../layouts/default'
import { SelectNewsContainer } from '../../containers/selectNews'

import { NewsCard } from '../../components/newsCard'
import { Loader } from '../../components/commons/loader'
import { ModalContainer } from '../../components/modals/container'
import { ModalContent } from '../../components/modals/content'

import './index.css'

export const Home:React.FC = () => {

    const { dashboardNews, addNewsToDashboard, setNewsToDashboard, currentNews, setCurrentNews, favs, addNewsToFavorites, newsDetail, setNewsDetail, removeNewsFromFavorites } = useContext(Context)
    

    const [show, setshow] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)


    // Show URL from the news 
    const handleOnNews = (news:News) => {
        setNewsDetail(news)
        setshow(true)
    }


    // Caching favorites
    const cachedFavoriteNews = (news:News) => {
        useFavCachedNews({ toCached: [...favs, news] })
        addNewsToFavorites(news)
    }
    // Handle when the user clicks in the icon
    const handleRemoveFav = (id:string) => {
        const news = removeNewsFromFavorites(id)
        useFavCachedNews({ toCached: news })
    }



    // Handling loading and infinite scroll
    const refLoading = useRef<HTMLDivElement | null>(null)
    const { isIntersecting, observer } = useIntersection({ cb: () => {
        setPage(page + 1)
    }, options: { threshold: .3, rootMargin: '12px', root: null }}, refLoading.current)




    // Setting the cached data and the first fetch
    useEffect(() => {
        const cachedCurrentNews = useCurrentCachedNews()
        cachedCurrentNews && setCurrentNews(cachedCurrentNews)

        const firstFetch = async () => {
            if(cachedCurrentNews) {
                const data = await getSpecificNews({ page: 0, news: cachedCurrentNews, hitsPerPage: 8 })
                setNewsToDashboard(filterNews(data.hits))
                setPage(1)
            } else {
                const data = await getAllNews({ page, hitsPerPage: 8 })
                addNewsToDashboard(filterNews(data.hits))
                setPage(1)
            }
        }
        firstFetch()
    }, [])




    // Fetching the news with infinite Scroll
    useEffect(() => {
        const getData = async () => {
            // getting normal news
            if(!currentNews) {
                const allNews = await getAllNews({ page, hitsPerPage: 8 })
                addNewsToDashboard(filterNews(allNews.hits))
                setPage(page + 1)
                return null
            }


            // getting query news (Angualar, React, Vue)
            if(currentNews !== useCurrentCachedNews()) {
                useCurrentCachedNews({ toCached: currentNews })
                const data = await getSpecificNews({ page: 0, news: currentNews, hitsPerPage: 8 })
                setNewsToDashboard(filterNews(data.hits))
                setPage(1)
            } else {
                const data = await getSpecificNews({ page, news: currentNews, hitsPerPage: 8 })
                addNewsToDashboard(filterNews(data.hits))
                setPage(page + 1)
            }
        }
        isIntersecting && getData()
        currentNews != useCurrentCachedNews() && getData()

    }, [page, currentNews, isIntersecting])

    return (
        <Layout>
            <SelectNewsContainer />
            
            <section className="home-news">
                {
                    dashboardNews.map((news, i) => (
                        <NewsCard 
                            key={`${news.created_at}_${news.author}_${i}`}
                            author={news.author}
                            created_at={news.created_at}
                            title={news.story_title}
                            onFav={() => cachedFavoriteNews(news)}
                            onUnfav={() => handleRemoveFav(news.objectID)}
                            onClick={() => handleOnNews(news)}
                            isFav={favs.some(curr => curr.objectID == news.objectID)}
                        />
                    ))
                }
            </section>

            <div ref={refLoading} className="home-loader">
                <Loader />
            </div>

            {
                show && newsDetail && <ModalContainer>
                    <ModalContent title={newsDetail.story_title} onClose={() => setshow(false)}>

                    <strong>Story Url:</strong>
                        <a className="link-to-story" href={newsDetail?.story_url} target="_blank">{ newsDetail?.story_url }</a>

                    </ModalContent>
                </ModalContainer>
            }
            
        </Layout>
    )
}