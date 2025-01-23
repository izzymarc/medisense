describe('Symptom Checker Flow', () => {
  beforeEach(() => {
    cy.login(); // Custom command to handle login
    cy.visit('/dashboard');
  });

  it('should allow user to add symptoms and get advice', () => {
    cy.get('input[aria-label="Enter symptom description"]').type('Headache');
    cy.get('button[aria-label="Add symptom"]').click();
    cy.contains('Headache').should('be.visible');
    cy.contains('Analyzing symptoms...').should('be.visible');
    cy.contains('Mock AI advice', { timeout: 5000 }).should('be.visible');
  });

  it('should show error when no symptoms are added', () => {
    cy.get('button[aria-label="Get AI Analysis"]').click();
    cy.contains('Please enter at least one symptom').should('be.visible');
  });

  it('should allow user to remove symptoms', () => {
    cy.get('input[aria-label="Enter symptom description"]').type('Headache');
    cy.get('button[aria-label="Add symptom"]').click();
    cy.get('button[aria-label="Remove symptom Headache"]').click();
    cy.contains('Headache').should('not.exist');
  });
});
