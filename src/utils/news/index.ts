import { Option } from '../../components/inputs/option'

type OPTIONS = {
    [key:string]: {
        image: string,
        srcSet: string,
        text: string
    }
}

const NEWS_COMPONENTS:OPTIONS = {
    "angular": {
        image:"/public/images/angular-logo/angular-logo.png",
        srcSet:"/public/images/angular-logo/angular-logo@2x.png 2x, /public/images/angular-logo/angular-logo@3x.png 3x",
        text:"Angular"
    },
    "react": {
        image:"/public/images/react-logo/react-logo.png",
        srcSet:"/public/images/react-logo/react-logo@2x.png 2x, /public/images/react-logo/react-logo@3x.png 3x",
        text:"React"
    },
    "vue": {
        image:"/public/images/vue-logo/vue-logo.png",
        srcSet:"/public/images/vue-logo/vue-logo@2x.png 2x, /public/images/vue-logo/vue-logo@3x.png 3x",
        text:"Vue"
    },
}

export const GET_NEWS_OPTIONS = (news:string): {
    image: string,
    srcSet: string,
    text: string
} => NEWS_COMPONENTS[news] || NEWS_COMPONENTS["angular"]