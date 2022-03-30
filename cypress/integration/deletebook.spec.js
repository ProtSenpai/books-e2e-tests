

let bookAuthor;

describe('Given I want to delete a book', () => {

    before(() => {

        //Call the back
        cy.visit('http://localhost:4200/dashboard');

    })

    it ('The book should be eliminated and not be visible in the list of books', () => {
        
        //Act
        cy.get('.ant-checkbox-input').eq(1).click()
        bookAuthor = cy.get('.ant-table-row').eq(1).get('.ant-table-cell').eq(2).toString()
        cy.contains('Delete').click();
        
        //Assert
        cy.contains(bookAuthor).should('not.exist')

    })

    it ('The books shoul be eliminated and not be visible', () => {
        
        //Act
        cy.get('.ant-checkbox-input').eq(0).click()
        bookAuthor = cy.get('.ant-table-row').eq(5).get('.ant-table-cell').eq(2).toString()
        cy.contains('Delete').click();
        
        //Assert
        cy.contains(bookAuthor).should('not.exist')

    })

})