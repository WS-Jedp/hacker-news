import React, { useState } from 'react'
import { Layout } from '../../layouts/default'
import { SelectNewsContainer } from '../../containers/selectNews'

export const Home:React.FC = () => {

    const [currentNews, setCurrentNews] = useState<string | null>(null)

    return (
        <Layout>
            <SelectNewsContainer 
                action={(news) => setCurrentNews(news)}
                value={currentNews}
            />
        </Layout>
    )
}