//this ignores uncaught exceptions coming from demoblaze
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  import './commands'