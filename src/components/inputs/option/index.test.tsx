import React, { MouseEventHandler } from 'react'
import { Option } from './index'
import { screen, render, fireEvent } from '@testing-library/react'

describe("Tests for the component <Option />", () => {

    const image = "/public/images/angular-logo/angular-logo.png"
    const srcSet = "/public/images/angular-logo/angular-logo@2x.png 2x"
    const text = "Select Option"
    const action:MouseEventHandler = jest.fn<MouseEventHandler, []>()

    beforeEach(() => {
        render(
            <Option 
                image={image}        
                srcSet={srcSet}
                text={text}
                onClick={action}
            />
        )
    })

    test("Visual tests for the component", () => {
        expect(screen.getByText(text).tagName.toLowerCase()).toBe('span')
        expect(screen.getByText(text).parentElement?.tagName.toLowerCase()).toBe('button')
        expect(screen.getByText(text).parentElement?.children[0].tagName.toLowerCase()).toBe('figure')
        expect(screen.getByText(text).parentElement?.children[0].children[0].tagName.toLowerCase()).toBe('img')
        expect(screen.getByText(text).parentElement?.children[0].children[0].getAttribute('src')).toBe(image)
        expect(screen.getByText(text).parentElement?.children[0].children[0].getAttribute('srcSet')).toBe(srcSet)
        expect(screen.getByText(text).parentElement?.children[0].children[0].getAttribute('alt')).toBe(text)
    })

    test("The functionality of the component works", () => {
        const btn = screen.getByText(text).parentElement
        btn && fireEvent.click(btn)
        expect(action).toHaveBeenCalledTimes(1)

    })
})