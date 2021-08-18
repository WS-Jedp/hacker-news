import { useEffect, useState } from 'react'

type useIntersection = {
    options: IntersectionObserverInit,
    cb: () => void
}

export const useIntersection = (options:useIntersection, target: HTMLElement | null) => {

    const [observer, setObserver] = useState<IntersectionObserver>()
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    
    const callbackIntersection:IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                setIsIntersecting(true)
                if(entry.intersectionRatio >= options.options ? options.options.threshold : .3) {
                    options.cb()
                }
                return null
            } else {
                setIsIntersecting(false)
            }

        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackIntersection, options.options)
        setObserver(observer)
        target && observer.observe(target)

    }, [target])

    return { 
        observer,
        isIntersecting
    }

}