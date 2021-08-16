import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <Header />", () => {

    const text = "Hacker News"

    beforeEach(() => {
        render(<MemoryRouter> <Header /> </MemoryRouter>)
    })

    test("Visual tests for the component", () => {
        expect(screen.getByText(text).tagName.toLowerCase()).toBe('h1')
        expect(screen.getByText(text).parentElement?.tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(text).parentElement?.parentElement?.tagName.toLowerCase()).toBe('div')
        expect(screen.getByText(text).parentElement?.parentElement?.parentElement?.tagName.toLowerCase()).toBe('header')
    })

    test("Functional tests for the component", () => {
        expect(screen.getByText(text).parentElement?.getAttribute('href')?.toLowerCase()).toBe('/home')
    })
})