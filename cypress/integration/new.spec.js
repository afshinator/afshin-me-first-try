describe("Home page", () => {
  before(() => {
    // // Disable other auth options
    // const newSettings = {
    //   Office365Settings: {Enable: false},
    //   LdapSettings: {Enable: false},
    // };
    // cy.apiUpdateConfig(newSettings).then((data) => {
    //   ({config} = data);
    // });

    // // # Create new team and users
    // cy.apiInitSetup().then(({user}) => {
    //   testUser = user;

    //   cy.apiLogout();
    //   cy.visit('/login');
    // });
    cy.visit("localhost:8000")
  })

  it("should be on home page", () => {
    // start writing here
    cy.url().should("include", "/")

    // * Verify title of the document is correct
    cy.title().should("include", "Afshin")

    // Verify logo is there
    cy.get(".appLogo").should("be.visible")

    // Verify My picture is there
    cy.get(".myPic").should("be.visible")
  })
  
})
