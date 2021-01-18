import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I go to add todo page', function () {
  cy.visit('http://localhost:3000/todo')
})

Given('todo list is empty', function () {
  cy.get('[data-cy=todo-item]').should('have.length', 0)
})

When('add {string} into list', function (input: string) {
  cy.get('[data-cy=add-todo-input]')
    .type(input)
    .type('{enter}')
    .then((addTodoInput) => {
      const txt = addTodoInput.text()
      expect(txt).to.be.empty
    })
})

Then('should number of list eq {int}', function (count: number) {
  cy.get('[data-cy=todo-item]').should('have.length', count)
})

Then('should see {string} in list', function (todo: string) {
  cy.get('[data-cy=todo-item]').contains(todo).should('be.visible')
})
