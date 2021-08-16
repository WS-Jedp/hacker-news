import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Label } from './index'
import { screen, render } from '@testing-library/react'


describe("Test for the component <Label />" , () => {

    const text = "All"
    const secondText = "My Favs"
    const to = "/"
    const secondTo = "/favs"

    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={[to, secondTo]}>
                <Label text={text} to={to} />
                <Label text={secondText} to={secondTo} />
            </MemoryRouter>
        )
    })

    test("Visual tests, the components render itself correctly", () => {
        expect(screen.getByText(text).tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(secondText).tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(text).classList.contains('label')).toBeTruthy()
        expect(screen.getByText(secondText).classList.contains('label')).toBeTruthy()

        // The component render correctly according to his class of selected
        expect(screen.getByText(text).classList.contains('label--selected')).toBeTruthy()
    })

    test("The functionality of the component works correctly", () => {
        expect(screen.getByText(text).getAttribute('href')?.toLowerCase()).toBe(to)
        expect(screen.getByText(secondText).getAttribute('href')?.toLowerCase()).toBe(secondTo)
    })
    

})