import { NEWS } from '../../../utils/types'
import { News } from '../../../dto/news'


// Types for make the request
type Options = {
    page?: number,
    hitsPerPage?: number
}
type NewsOptions = Options & {
    news: NEWS
}

// Type to handle the response
type Response = {
    hits: News[],
    hitsPerPage: number,
    nbHits: number,
    page: number,
    nbPages: number,
    query: string
}

const URL = 'https://hn.algolia.com/api/v1/search_by_date?'


export const getAllNews = async (options:Options):Promise<Response> => {
    const data = await fetch(`${URL}page=${options.page || 0}&hitsPerPage=${options.hitsPerPage || 8}`)
    const resp = data.json()
    return resp as Promise<Response>
}

export const getSpecificNews = async (options:NewsOptions):Promise<Response> => {
    const data = await fetch(`${URL}query=${options.news}&page=${options.page || 0}&hitsPerPage=${options.hitsPerPage || 8}`)
    const resp = data.json()
    return resp as Promise<Response>
}