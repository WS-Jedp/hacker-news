import React from 'react'


type useLocalStorage = {
    item: string,
    value?: any
}

export default (options:useLocalStorage) => {

    if(!options.value) {
        const item = localStorage.getItem(options.item)

        if(item) return JSON.parse(item)
        return null
    }

    localStorage.setItem(options.item, JSON.stringify(options.value))
    
    return options.value

}