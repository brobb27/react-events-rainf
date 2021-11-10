import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../eventForm/Form";
import {EventContextProvider} from '../eventContext'

const MockForm = ({isEditing, theClass}) => {
    return (
        <EventContextProvider>
            <Form isEditing={isEditing} theClass={theClass}/>
        </EventContextProvider>
    )
}

describe("Form Tests", () => {
    // Add event form block
    describe("Add Event Form Tests", () => {
        // Test to make sure Main Form is loading when isEditing is false and the class is "mainForm"
        test('Should render "Add Event" when isEditing is false and class is mainForm', () => {
            // Render the component to test
            render(<MockForm isEditing={false} theClass="mainForm"/>)
            // Find the component you want to interact with
            const addButton = screen.getByRole("button")
            // Expect to find that element
            expect(addButton).toHaveTextContent('Add Event')
        })
    })
    
    // Update event form block
    describe("Update Event Form Tests", () => {
        // Test to make sure update from is rendering when isEditing is true and the class is "updateForm"
        test('Should render "Update Event" when isEditing is true and class is updateForm', () => {
            render(<MockForm isEditing={true} theClass="updateForm"/>)
            const updateButton = screen.getByRole("button")
            // expect(updateButton).toHaveTextContent('Update Event')
            // Or
            expect(updateButton.textContent).toBe('Update Event')
        })
    })
})
