import { createWrapper } from '@vue/test-utils'
import { mountCallback } from '@cypress/vue'
import VueCompositionAPI from '@vue/composition-api'
import Hello from '~/components/Hello.vue'

describe('Hello Component', () => {
  beforeEach(mountCallback(Hello, {
    extensions: { use: [VueCompositionAPI] }
  }))

  it('should initialize', () => {
    cy.wrap(Cypress.vue).should('not.be.undefined')

    cy.wrap(createWrapper(Cypress.vue)).should(cmp => cmp.isVueInstance())
  })

  it('shold see "hello"', () => {
    cy.contains('hello').should('be.visible')
  })
})
