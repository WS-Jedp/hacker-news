import React, { useState, useEffect } from 'react'

import { getAllNews, getSpecificNews } from '../../services/news/get'

import { Layout } from '../../layouts/default'
import { SelectNewsContainer } from '../../containers/selectNews'

import { NewsCard } from '../../components/newsCard'
import { Loader } from '../../components/commons/loader'
import { ModalContainer } from '../../components/modals/container'
import { ModalContent } from '../../components/modals/content'

export const Home:React.FC = () => {

    const [show, setshow] = useState<boolean>(false)

    useEffect(() => {
        const getData = async () => {
            const data = await getSpecificNews({ page: 0, news: "react", hitsPerPage: 3 })
            console.log(data.nbPages)
        }
        getData()
    }, [])

    return (
        <Layout>
            <SelectNewsContainer />
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