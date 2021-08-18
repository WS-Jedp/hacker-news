import React, { useState, useEffect, useContext } from 'react'
import { News } from '../../dto/news'
import { Context } from '../../context/general'
import useCachedFavNews from '../../hooks/useFavCachedNews'

import { Layout } from '../../layouts/default'

import { NewsCard } from '../../components/newsCard'
import { ModalContainer } from '../../components/modals/container'
import { ModalContent } from '../../components/modals/content'

import './index.css'

export const Favorites:React.FC = () => {

    const { favs, setFavs, removeNewsFromFavorites, newsDetail, setNewsDetail } = useContext(Context)

    const [show, setshow] = useState<boolean>(false)

    useEffect(() => {
        const favsNewsCached = useCachedFavNews()
        setFavs(favsNewsCached)
    }, [newsDetail])



    // Handle when the user clicks in the icon
    const handleRemoveFav = (id:string) => {
        const news = removeNewsFromFavorites(id)
        useCachedFavNews({ toCached: news })
    }


    // Handle when the user clicks in the card
    const handleNews = (news:News) => {
        setNewsDetail(news)
        setshow(true)
    }

    return (
        <Layout>


            {
                favs.length > 0 ? (
                    <section className="favorites-news">
                        {
                            favs && favs.length > 0 && favs.map(news => (
                                <NewsCard 
                                    key={news.objectID}
                                    title={news.story_title}
                                    author={news.author}
                                    created_at={news.created_at}
                                    onClick={() => handleNews(news)}
                                    isFav
                                    onFav={() => {}}
                                    onUnfav={() => handleRemoveFav(news.objectID)}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <section className="not-favorites">
                        <h2>You don't have any favorites news 💔</h2>
                    </section>
                )
            }

            {
                show && <ModalContainer>
                    <ModalContent title="Hello world" onClose={() => setshow(false)}>

                        <strong>Story Url:</strong>
                        <a className="link-to-story" href={newsDetail?.story_url} target="_blank">{ newsDetail?.story_url }</a>

                    </ModalContent>
                </ModalContainer>
            }
            
        </Layout>
    )
}