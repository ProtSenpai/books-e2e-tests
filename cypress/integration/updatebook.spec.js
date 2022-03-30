

let bookAuthor = 'authorTest4';

describe('Given I want to register a new book', () => {
    before(() => {
    
        cy.visit('http://localhost:4200/dashboard'); 

    })

    it ('The book should be edited and be visible in the list of books', () => {

        // Make the edit into the UI
        cy.get('[data-icon="edit"]').eq(0).click()
        cy.get('#author').click()
        cy.get('#author').clear()
        cy.get('#author').type(bookAuthor)
        cy.contains('Save').click();

        //Assert
        cy.contains(bookAuthor).should('exist')

    })


})