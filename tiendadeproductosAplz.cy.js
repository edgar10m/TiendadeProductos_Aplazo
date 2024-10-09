describe("Test suite -- Conjunto de Pruebas par la pagina TIENDA DE PRODUCTOS",  () => {

    
    beforeEach(()  => {
    cy.visit("https://www.demoblaze.com/")

})


    it("CP1- Validar la transacción correcta del producto Samsung Galaxy S6", ()  => {
       
        cy.get("#nava").should("be.visible")
        cy.get(":nth-child(1) > .card > .card-block").should("be.visible")
        cy.get(":nth-child(1) > .card > :nth-child(1) > .card-img-top").click()
        cy.get(".name").contains("Samsung galaxy s6")
        cy.get(".col-sm-12 > .btn").click()
        cy.get("#cartur").click()
        cy.get(".success > :nth-child(2)").contains("Samsung galaxy s6")
        cy.get(".col-lg-1 > .btn").click()
        cy.get("#name").type("Juan Carlos Medina Rivera")
        cy.get("#country").type("Mexico")
        cy.get("#city").type("Ciudad de Mexico")
        cy.get("#card").type("4111-1111-1111-1111 - 26/12 - 123)")
        cy.get("#month").type("Octubre")
        cy.get("#year").type("2024")
        cy.get("#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()
        cy.get(".sweet-alert > h2").contains("Thank you for your purchase!")
        cy.get(".confirm").click()
        cy.get("#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary").click()
        cy.get(".active > .nav-link").click()

    })



    it("CP2- Seleccionar Nokia Lumia 1520 Agregar al carrito y Confirmar que se agregó el producto,eliminar el producto y confirmar que se eliminó el producto", ()  => {
       
        cy.get("#nava").should("be.visible")
        cy.get(":nth-child(2) > .card > .card-block").should("be.visible")
        cy.get(":nth-child(2) > .card > .card-block > .card-title > .hrefch").click()
        cy.get(".name").contains("Nokia lumia 1520")
        cy.get(".col-sm-12 > .btn").click()
        cy.get("#cartur").click()
        cy.get(".success > :nth-child(4) > a").click()
        cy.get(".table-responsive").should("be.visible")
       
        

    })


    })