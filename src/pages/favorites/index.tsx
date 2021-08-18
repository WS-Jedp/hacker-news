import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context/general'
import useCachedFavNews from '../../hooks/useFavCachedNews'

import { Layout } from '../../layouts/default'

import { NewsCard } from '../../components/newsCard'
import { ModalContainer } from '../../components/modals/container'
import { ModalContent } from '../../components/modals/content'

export const Favorites:React.FC = () => {

    const [show, setshow] = useState<boolean>(false)

    const { favs, setFavs, removeNewsFromFavorites } = useContext(Context)

    useEffect(() => {

        const favsNewsCached = useCachedFavNews()
        setFavs(favsNewsCached)
        
    }, [])

    const handleRemoveFav = (id:string) => {
        const news = removeNewsFromFavorites(id)
        useCachedFavNews({ toCached: news })
    }

    return (
        <Layout>

            {
                favs.map(news => (
                    <NewsCard 
                        key={news.objectID}
                        title={news.story_title}
                        author={news.author}
                        created_at={news.created_at}
                        onClick={() => {}}
                        isFav
                        onFav={() => handleRemoveFav(news.objectID)}
                    />
                ))
            }


            {
                show && <ModalContainer>
                    <ModalContent title="Hello world" onClose={() => setshow(false)}>

                        <strong>Story Url:</strong>
                        <p>Hello world</p>

                    </ModalContent>
                </ModalContainer>
            }
            
        </Layout>
    )
}