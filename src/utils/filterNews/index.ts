import { News } from '../../dto/news'

export const filterNews = (news:News[]) => {

    return news.filter(currentNews => currentNews.story_title && currentNews.story_url && currentNews.created_at && news.some(currN => currN.objectID !== currentNews.objectID))

}