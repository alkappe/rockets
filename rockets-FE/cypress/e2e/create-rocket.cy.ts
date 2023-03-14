/// <reference types="cypress" />
import rockets  from './rockets'

describe('test requests', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/rocket')
      })
    it('should show the list of rockets', () => {
        cy.intercept('GET', '/rockets').as('getRockets')
        cy.visit('http://127.0.0.1:5173/rockets')
        cy.wait('@getRockets')
    })

    it('test admin page', () => {
        cy.visit('http://127.0.0.1:5173/rockets')
        cy.get('a').should('have.length', 3)
        cy.get('a').eq(2).click()
        cy.contains('a', 'In this place you can create rockets').should('have.length', 1)
        cy.contains('a', 'In this place you can view public rockets').should('have.length', 1)
    })
    
    it('go to rocket form', () => {
        cy.visit('http://127.0.0.1:5173/rockets')
        cy.location('pathname').should('equal', '/rockets')
        cy.get('a').eq(1).click()
        cy.get('button').eq(0).click()
        cy.get('input[name="name"]').click().type('razzo spazialeee')
        cy.get('textarea[name="description"]').click().type('ha molte cose, veramente tante')
        cy.get('input[name="height"]').click().type('razzo spazialeee')
        cy.get('input[name="diameter"]').click().type(89)
        cy.get('input[name="mass"]').click().type('prova in stringa')
        cy.get('input[type="submit"]').click()
    })

    it('check after submit a rocket', () => {
        cy.visit('http://127.0.0.1:5173/rockets')
        cy.get('a').eq(1).click()
        cy.get('button').eq(0).click()
        cy.get('input[name="name"]').click().type('newRocket')
        cy.get('textarea[name="description"]').click().type('ha molte cose, veramente tante')
        cy.get('input[name="height"]').click().type('razzo spazialeee')
        cy.get('input[name="diameter"]').click().type(89)
        cy.intercept('POST', '/rocket').as('create-rocket')
        cy.get('input[type="submit"]').click()
        //   cy.contains('h3', '🚀')
        cy.get('h3').should('have.length.greaterThan', 1)
        cy.wait('@create-rocket').its('response.statusCode').should('eq', 200)

    });

    it('mock api', () => {
       const rocketsRes = rockets
        cy.visit('http://127.0.0.1:5173/create-rocket')
        cy.intercept('GET', '/rockets', rocketsRes).as('getRockets')
        cy.wait('@getRockets')
        cy.intercept('DELETE', `rocket/${rocketsRes[0]._id}`).as('deleteRocket')
        cy.contains('button', '❌').click()
        cy.wait('@deleteRocket')

    })
})