import { createWrapper } from '@vue/test-utils'
import { mountCallback } from '@cypress/vue'
import Logo from '~/components/Logo.vue'

describe('Logo Component', () => {
  beforeEach(mountCallback(Logo))

  it('should initialize', () => {
    cy.wrap(Cypress.vue)
      .should('not.be.undefined')

    cy.wrap(createWrapper(Cypress.vue)).should(cmp => cmp.isVueInstance())
  })
})
