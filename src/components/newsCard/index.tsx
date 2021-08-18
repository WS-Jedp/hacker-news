import React, { useState } from 'react'
import { TimeIcon } from '../commons/icons' 

import { shorterTitle } from '../../utils/shorterTitle'

import './index.css'

interface NewsCard {
    isFav?: boolean,
    created_at: string,
    author: string,
    title: string,
    onClick: () => void,
    onFav: () => void,
    onUnfav: () => void,
}

export const NewsCard:React.FC<NewsCard> = ({ isFav = false, author, created_at, title, onClick, onFav, onUnfav }) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(isFav)

    const handleFav = () => {
        setIsFavorite(true)
        onFav()
    }

    const handleUnfav = () => {
        setIsFavorite(false)
        onUnfav()
    }

    return (
        <article className="news-card">
            <section className="news-card__text" onClick={onClick}>
                <small className="news-card__text-about">
                    <TimeIcon />
                    <span>
                       { created_at } by { author }
                    </span>
                </small>
                <strong className="news-card__text-title">
                    {
                        title ? shorterTitle(title) : "" 
                    }
                </strong>
            </section>
            <figure aria-label="Is favorite icon" className="news-card__fav">
                {
                    isFavorite ? (
                        <img alt="Is the favorite" src="/public/images/icons/heart-full.svg" onClick={handleUnfav} />
                    ) : (
                        <img alt="Is not the favorite" src="/public/images/icons/heart-line.svg" onClick={handleFav} />
                    )
                }
                
            </figure>
        </article>
    )
}