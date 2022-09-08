const repeatFn = nb => fn => Array.from({ length: nb }).map(() => fn())

describe('Compteur', () => {
  it('Le compteur doit s\'incrémenter au click sur le bouton +.', () => {
    cy.visit('/')
    
    cy.get('#compteur-affichage').should('have.text', 0)
    cy.get('#compteur-plus').click()
    cy.get('#compteur-affichage').should('have.text', 1)
    cy.get('#compteur-plus').click()
    cy.get('#compteur-affichage').should('have.text', 2)
  })

  it('Le compteur doit décrémenter au click sur le bouton -.', () => {
    cy.visit('/')

    cy.get('#compteur-affichage').should('have.text', 0)
    cy.get('#compteur-moins').click()
    cy.get('#compteur-affichage').should('have.text', -1)
    cy.get('#compteur-moins').click()
    cy.get('#compteur-affichage').should('have.text', -2)
  })

  it('Le compteur doit devenir fou.', () => {
    cy.visit('/')

    const nombre = 100
    cy.get('#compteur-affichage').should('have.text', 0)
    repeatFn(nombre)(() => cy.get('#compteur-plus').click())
    cy.get('#compteur-affichage').should('have.text', nombre)
  })
})
