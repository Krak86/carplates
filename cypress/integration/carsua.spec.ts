/// <reference types="cypress" />

Cypress.Commands.add("typePlate", (plate) => {
    cy
    .get('#searchId')
    .type(plate)
    .get('button[aria-label*="search"]')
    .click()
    .get('button[aria-label*="clear"]')
    .click()
});

context('Assertions', () => {
    const carplatesUrl = "https://carsua.app"
    const plateCyrillic = "ве1111ве"
    const plateLatin = "be1111be"
    const wrongPlate = "zzzz"
    const plates = ["ВЕ0618СО", "Be3038ce", "ВЕ9341СВ", "Be2136ci", "ВЕ6580СВ"]

    beforeEach(() => {
      cy.visit(carplatesUrl)
    })

    describe('Check search', () => {
        it('Type Cyrillic Plates', () => {
            cy
            .typePlate(plateCyrillic)
            .wait(2000)
            .location('href')
            .should('include', `${carplatesUrl}/#/${encodeURI(plateCyrillic.toLocaleUpperCase())}`)

            .get('div[class*="MuiContainer-maxWidthLg"]')
            .children()
            .its('length')
            .should('be.gte', 1)
        })
        it('Type Latin Plates', () => {
            cy
            .typePlate(plateLatin)
            .wait(2000)
            .location('href')
            .should('include', `${carplatesUrl}/#/${encodeURI(plateCyrillic.toLocaleUpperCase())}`)

            .get('div[class*="MuiContainer-maxWidthLg"]')
            .children()
            .its('length')
            .should('be.gte', 1)
        })
        it('Type Wrong Plate', () => {
            cy
            .typePlate(wrongPlate)
            .wait(2000)
            .get('div[class*="MuiContainer-maxWidthLg"]')
            .children()
            .its('length')
            .should('equal', 2)
        })
        it('Check Notification Badges', () => {
            cy
            .typePlate(plateLatin)
            .wait(2000)
            .get('span[class*="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary"]')
            .should('have.text', '1')
        })
        it('Check Notification Badges Incriment', () => {
            cy
            .typePlate(plates[0])
            .wait(1000)
            .typePlate(plates[1])
            .wait(1000)
            .typePlate(plates[2])
            .wait(1000)

            .get('span[class*="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary"]')
            .should('have.text', '3')
        })
    })

    describe('Check Notification Page', () => {
        it('Check Notification Badges Incriment', () => {
            cy
            .typePlate(plates[0])
            .wait(1000)
            .typePlate(plates[1])
            .wait(1000)
            .typePlate(plates[2])
            .wait(1000)

            .get('span[class*="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary"]')
            .should('have.text', '3')
            .click()

            cy
            .get('div[class*="MuiContainer-maxWidthLg"]')
            .children()
            .its('length')
            .should('equal', 4)

            cy
            .get('span[class*="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary"]')
            .should('have.text', '0')
        })
    })
})
