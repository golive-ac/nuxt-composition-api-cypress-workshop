// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// import cucumber from 'cypress-cucumber-preprocessor'
import * as cypressNuxt from 'cypress-nuxt'
import * as tsNode from 'ts-node'
const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')

const plugin: Cypress.PluginConfig = async (on, config) => {
  on('file:preprocessor', await pluginNuxt())
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
  }
  on('file:preprocessor', await cucumber(options))

  return config
}

async function pluginNuxt () {
  tsNode.register({
    compilerOptions: {
      target: 'es5',
      module: 'commonjs'
    }
  })

  return await cypressNuxt.plugin()
}

module.exports = plugin
