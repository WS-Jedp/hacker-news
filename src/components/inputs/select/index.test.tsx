import React, { useState } from 'react'
import { Select } from './index'
import { screen, render, fireEvent } from '@testing-library/react'

describe("Tests for the <Select /> component", () => {
    const text = "Select something"
    const secondText = "Something to select"
    const value = "React"
    const secondValue = null
    let openState = false
    const setOpenState = () => (openState = !openState)


    beforeEach(() => {
        render((
            <>
                <Select 
                    text={text}
                    value={secondValue}
                    openState={openState}
                    setOpenState={setOpenState}
                />
                <Select 
                    text={secondText}
                    value={value}
                    openState={openState}
                    setOpenState={setOpenState}
                />
            </>
        ))
        
    })

    test("The component renders correctly" , () => {
        expect(screen.getByText(text).tagName.toLowerCase()).toBe('span')
        expect(screen.getByText(text).parentElement?.tagName.toLowerCase()).toBe('article')
        expect(screen.getByText(text).parentElement?.classList.contains('custom-select')).toBeTruthy()
        expect(screen.getByText(text).parentElement?.parentElement?.classList.contains('select-container')).toBeTruthy()
        expect(screen.getByText(text).parentElement?.parentElement?.childElementCount).toBe(2)
        expect(screen.getByText(text).parentElement?.parentElement?.children[1].classList.contains('select-options')).toBeTruthy()
        expect(screen.getByText(text).parentElement?.parentElement?.children[1].classList.contains('select-options--close')).toBeTruthy()
    })
})