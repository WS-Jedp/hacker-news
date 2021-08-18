import useLocalStorage from '../useLocalStorage'
import { News } from '../../dto/news'

type useFavCachedNews = {
    toCached: News[]
}

const FAVS_ITEM = "favs"

export default (options?:useFavCachedNews):News[] => {

    if(options && options.toCached) {
        useLocalStorage({ item: FAVS_ITEM, value: options.toCached })
        return options.toCached
    }

    const news = useLocalStorage({ item: FAVS_ITEM }) as News[] || null
    return news || []
}