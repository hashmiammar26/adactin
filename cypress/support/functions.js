export const urlfunction = () => {
  cy.visit('https://adactinhotelapp.com/');
};

export const performValidLogin = () => {
  urlfunction();
  cy.get('#username').type("asfandtariq");
  cy.get('#password').type("159159..");
  cy.get('#login').click();
  cy.xpath("/html/body/table[2]/tbody/tr[1]/td[1]").should('have.text', 'Welcome to Adactin Group of Hotels');
};

export const search_hotel = () => {
  performValidLogin();
  cy.get('#location').select('Sydney'); // Select a location
  cy.get('#hotels').select('Hotel Creek'); // Select a hotel
  cy.get('#Submit').click(); // Submit the form
  cy.xpath("/html/body/table[2]/tbody/tr[2]/td/form/table/tbody/tr[1]/td").should('be.visible'); // Assert that the next page loads
};

export const selecthotel = () => {
  search_hotel();
  cy.get('#radiobutton_1').click();
  cy.get('#continue').click();
  cy.xpath("/html/body/table[2]/tbody/tr[2]/td/form/table/tbody/tr[2]/td").should('be.visible'); // Assert
};

export const bookhotel = () => {
  selecthotel();
  cy.get('#first_name').type('Ammar');
  cy.get('#last_name').type('Hashmi');
  cy.get('#address').type('2nd Floor, Z House, Mansoor Tower, Clifton Block 8, Karachi, Pakistan');
  cy.get('#cc_num').type('1234567887654321');
  cy.get('#cc_type').select('Other');
  cy.get('#cc_exp_month').select('May');
  cy.get('#cc_exp_year').select('2024');
  cy.get('#cc_cvv').type('008');
  cy.get('#book_now').click();
  cy.wait(2500);
  cy.xpath("/html/body/table[2]/tbody/tr[2]/td/form/table/tbody/tr[1]/td").should('be.visible'); // Assert
  cy.get('#logout').click();
  cy.xpath("/html/body/table[2]/tbody/tr/td[1]/table/tbody/tr/td/a").click();
  cy.xpath("/html/body/table[2]/tbody/tr/td[1]/p").should('be.visible'); // Assert
};

export const invalidlogin = () => {
    urlfunction();
    cy.get('#username').type("ammarh");
    cy.get('#password').type("Ammar123!");
    cy.get('#login').click();
    cy.xpath("/html/body/table[2]/tbody/tr/td[2]/form/table/tbody/tr[5]/td[2]/div/b")
      .should('have.text', 'Invalid Login details or Your Password might have expired. Click here to reset your password');
  };