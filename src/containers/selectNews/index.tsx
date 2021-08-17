import React, { MouseEvent, useState, useContext } from 'react'
import { Context } from '../../context/general'

import { Select } from '../../components/inputs/select'
import { Option } from '../../components/inputs/option'
import { NEWS } from '../../utils/types'

export const SelectNewsContainer:React.FC = () => {

    const { currentNews, setCurrentNews } = useContext(Context)

    const [openState, setOpenState] = useState<boolean>(false)

    const handleNews = (ev:MouseEvent, news: NEWS) => {
        ev.preventDefault()
        setCurrentNews(news)
        setOpenState(false)
    }

    return (
        <div className="select-news-container">
            <Select text="Select your news" value={currentNews} openState={openState} setOpenState={setOpenState} >
                <Option 
                    image="/public/images/angular-logo/angular-logo.png" 
                    srcSet={"/public/images/angular-logo/angular-logo@2x.png 2x, /public/images/angular-logo/angular-logo@3x.png 3x"}
                    text="Angular"
                    onClick={(ev) => handleNews(ev, "angular")}
                />
                <Option 
                    image="/public/images/react-logo/react-logo.png" 
                    srcSet={"/public/images/react-logo/react-logo@2x.png 2x, /public/images/react-logo/react-logo@3x.png 3x"}
                    text="React"
                    onClick={(ev) => handleNews(ev, "react")}
                />
                <Option 
                    image="/public/images/vue-logo/vue-logo.png" 
                    srcSet={"/public/images/vue-logo/vue-logo@2x.png 2x, /public/images/vue-logo/vue-logo@3x.png 3x"}
                    text="Vue"
                    onClick={(ev) => handleNews(ev, "vue")}
                />
            </Select>
        </div>
    )
}