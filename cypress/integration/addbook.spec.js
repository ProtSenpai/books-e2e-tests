
let bookName = 'bookNameTest';
let bookAuthor = 'bookAuthorTest';

describe('Given I want to register a new book', () => {

    before(() => {

        //Call the back and prepared the table to add
        cy.visit('http://localhost:4200/dashboard');
        cy.contains('10 / page').click();
        cy.get('[title="50 / page"]').click();
    })

    it ('The book should be visible in the table of books', () => {

        //Adding a book in the table
        cy.contains('Add').click();
        cy.get('#name').click()
        cy.get('#name').type(bookName);
        cy.get('#author').type(bookAuthor);
        cy.contains('Save').click();

        //Assert if the book exist in the UI
        cy.contains(bookAuthor).should('exist')

    })

})

