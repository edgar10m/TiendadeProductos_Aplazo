describe("Test suite -- Conjunto de Pruebas",  () => {

    
    beforeEach(()  => {
    cy.visit("http://zero.webappsecurity.com")

})


    it ("1- Validar que se muestre la descripción solicitada en la pagina de inicio", ()  => {
       
        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")

    })



    it ("2- Validar prueba E2E Transferencia de Fondos", ()  => {
       
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get("#transfer_funds_tab > a").click()
        cy.get("#tf_fromAccountId").select("1")
        cy.get("#tf_toAccountId").select("5")
        cy.get("#tf_amount").type("300")
        cy.get("#tf_description").type("Prueba Transacción")
        cy.get("#btn_submit").click()
        cy.get("#btn_submit").click()
        cy.get(".alert").contains("You successfully submitted your transaction")
        


    })



    it ("3- Validar que se permita interactuar con las opciónes del grafico", ()  => {
        cy.visit("http://zero.webappsecurity.com")
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get("#money_map_tab > a").click()
        cy.get("#ext-sprite-1275 > tspan").should("be.visible")
        cy.get("#ext-sprite-1168").click()
        cy.get("#ext-sprite-1275 > tspan").should("not.be.visible")
        cy.get("#ext-sprite-1350").click()
        
    })


    })