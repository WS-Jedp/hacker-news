import React, { useState } from 'react'
import { Layout } from '../../layouts/default'
import { SelectNewsContainer } from '../../containers/selectNews'

import { ModalContent } from '../../components/modals/content'

import { NewsCard } from '../../components/newsCard'

import { ModalContainer } from '../../components/modals/container'

import { Loader } from '../../components/commons/loader'

export const Home:React.FC = () => {

    const [currentNews, setCurrentNews] = useState<string | null>(null)
    const [show, setshow] = useState<boolean>(false)

    return (
        <Layout>
            <SelectNewsContainer 
                action={(news) => setCurrentNews(news)}
                value={currentNews}
            />
            <NewsCard 
                author="Juanes"
                created_at="3 hours ago"
                title="How social sports can change the world and some advantage of the original concept of sports"
                onClick={() => setshow(true)}
                onFav={() => console.log("In the Icon")}
            />
            <Loader />

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