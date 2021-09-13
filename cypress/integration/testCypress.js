describe("Pizza APP Loading", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    const home = () => cy.get(':nth-child(1) > a')
    const orderNav = () => cy.get(':nth-child(2) > a')
    const testName = "Danny"
    const nameinput = () => cy.get('#name-input')
    const drop = () => cy.get('#size-dropdown')
    const classic = () => cy.get(':nth-child(4) > ul > :nth-child(1) > label')
    const pep = () => cy.get(':nth-child(3) > label')
    const suasage = () => cy.get(':nth-child(4) > label')
    const chicken = () => cy.get(':nth-child(5) > label')
    const button = () => cy.get('#order-button')

    it("loads properly", ()=>{
        home().should("exist")
        orderNav().should("exist")
    })
    it("Clicking Nav", ()=>{
        orderNav().click()
        home().click()
    })
    it("From fill out", ()=>{
        orderNav().click()
        nameinput().type(testName)
        drop().select("Small - 10")
        classic().click()
        pep().click()
        suasage().click()
        chicken().click()
        button().click()

    })

})