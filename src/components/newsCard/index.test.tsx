import React, { MouseEventHandler } from 'react'
import { NewsCard } from './index'
import { screen, render, fireEvent } from '@testing-library/react'

describe("Tests for the component <Option />", () => {

    const isFav = false
    const created_at = "1 month"
    const author = "author"
    const title = "title of the card"
    const action = jest.fn<MouseEventHandler, []>()
    const actionTwo = jest.fn<MouseEventHandler, []>()

    beforeEach(() => {
        render(
            <NewsCard 
                isFav={isFav}        
                author={author}
                created_at={created_at}
                title={title}
                onClick={action}
                onFav={actionTwo}
            />
        )
    })

    test("Visual tests for the component <NewsCard />", () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('strong')
        expect(screen.getByText(title).parentElement?.tagName.toLowerCase()).toBe('section')
        expect(screen.getByText(title).parentElement?.children[0].tagName.toLowerCase()).toBe('small')
        expect(screen.getByText(title).parentElement?.children[0].childElementCount).toBe(2)
        expect(screen.getByText(title).parentElement?.parentElement?.tagName.toLowerCase()).toBe('article')
        expect(screen.getByText(title).parentElement?.parentElement?.children[1].tagName.toLowerCase()).toBe('figure')
        expect(screen.getByText(title).parentElement?.parentElement?.children[1].children[0].tagName.toLowerCase()).toBe('img')
        expect(screen.getByText(title).parentElement?.parentElement?.children[1].children[0].getAttribute('src')).toBe('/public/images/icons/heart-line.svg')
    })

    test("The functionality of the component works", () => {
        const section = screen.getByText(title).parentElement
        const icon = screen.getByText(title).parentElement?.parentElement?.children[1].children[0]

        section && fireEvent.click(section)
        icon && fireEvent.click(icon)

        expect(action).toHaveBeenCalledTimes(1)
        expect(actionTwo).toHaveBeenCalledTimes(1)
        expect(icon?.getAttribute('src')).toBe('/public/images/icons/heart-full.svg')
    })
})