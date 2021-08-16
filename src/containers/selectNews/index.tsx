import React, { MouseEvent, MouseEventHandler } from 'react'

import { Select } from '../../components/inputs/select'
import { Option } from '../../components/inputs/option'

interface SelectNewsContainer {
    action: (news:string) => void,
    value?: string | null,
}

export const SelectNewsContainer:React.FC<SelectNewsContainer> = ({ action, value = null }) => {


    const handleAction = (ev:MouseEvent, value: string) => {
        ev.preventDefault()
        return action(value)
    }

    return (
        <div className="select-news-container">
            <Select text="Select your news" value={value}>
                <Option 
                    image="/public/images/angular-logo/angular-logo.png" 
                    srcSet={"/public/images/angular-logo/angular-logo@2x.png 2x, /public/images/angular-logo/angular-logo@3x.png 3x"}
                    text="Angular"
                    onClick={(ev) => handleAction(ev, "angular")}
                />
                <Option 
                    image="/public/images/react-logo/react-logo.jpg" 
                    srcSet={"/public/images/react-logo/react-logo@2x.jpg 2x, /public/images/react-logo/react-logo@3x.jpg 3x"}
                    text="React"
                    onClick={(ev) => handleAction(ev, "react")}
                />
                <Option 
                    image="/public/images/vue-logo/vue-logo.png" 
                    srcSet={"/public/images/vue-logo/vue-logo@2x.png 2x, /public/images/vue-logo/vue-logo@3x.png 3x"}
                    text="Vue"
                    onClick={(ev) => handleAction(ev, "vue")}
                />
            </Select>
        </div>
    )
}