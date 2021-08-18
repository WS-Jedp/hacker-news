import useLocalStorage from '../useLocalStorage'
import { NEWS } from '../../utils/types'

type useCurrentCachedNews = {
    toCached: NEWS
}

const CURRENT_NEWS_ITEM = "currentNews"

export default (options?:useCurrentCachedNews):NEWS => {

    if(options && options.toCached) {
        useLocalStorage({ item: CURRENT_NEWS_ITEM, value: options.toCached })
        return options.toCached
    }

    const news = useLocalStorage({ item: CURRENT_NEWS_ITEM }) as NEWS || undefined
    return news
}