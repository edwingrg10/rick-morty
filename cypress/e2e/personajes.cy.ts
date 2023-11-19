describe('Personajes', () => {
  it('visitar lista de personajes', () => {
    cy.visit('http://localhost:4200')
    cy.wait(1000)
    cy.get('[data-cy="menu"]').click()
    cy.get('[data-cy="Maestras"]').click()
    cy.get('[data-cy="Personajes"]').click()
    cy.wait(2000)
  });

  it('Ver detalle de personaje', () => {
    cy.get('[data-cy="ver-detalle-1"]').click()
    cy.wait(3000)
    cy.get('[data-cy="cerrar-modal-detalle"]').click()
  });

  it('Filtrar personajes por nombre', () => {
    cy.get('[data-cy="filtrar-personajes"]').click()
    cy.wait(2000)
    cy.get('[data-cy="opcion-Nombre"]').click()
    cy.get('[data-cy=name]').type('Rick Sanchez')
    cy.get('[data-cy="filtrar"]').click()
    cy.wait(3000)
    cy.get('[data-cy="limpiar-filtros"]').click()
    cy.get('[data-cy="filtrar-personajes"]').click()
    cy.get('[data-cy="opcion-Nombre"]').click()
  });

  it('Buscar personajes', () => {
    cy.get('[data-cy=buscar-personajes]').type('Rick')
    cy.wait(3000)
    cy.get('[data-cy=buscar-personajes]').clear().should('have.value', '');
  });
})