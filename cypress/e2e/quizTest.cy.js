import QuizPage from '../support/pages/quizPage';

describe('Quiz Test', () => {
  const quizPage = new QuizPage();
  const quizId = '832456720';

  beforeEach(() => {
    quizPage.visit(quizId);
  });

  it('should fill in the personal information and start the quiz', () => {
    quizPage.getNameField().type('John Doe');
    quizPage.getDateField().type('2024-12-19');
    quizPage.getQuestion().type("Hello, how are you?");
    quizPage.getAnswer().type("I am fine.");
    //quizPage.sendQuiz();
  });

  it('should validate required fields are not left empty', () => {
    quizPage.sendQuiz();
    cy.get('body > form > h1').should('contain', 'ԵՊՀ ԻՄ ֊ Ծրագրային որակի ապահովում'); 
  });

  it('should upload a file', () => {
    quizPage.getFileInput().attachFile('../helpers/ias_lecture1.pdf'); 
    quizPage.getDateField().type('2024-12-19');
    quizPage.getNameField().type('Jane Doe');
    quizPage.sendQuiz();
  });

  it('should submit the quiz and verify success message', () => {
    quizPage.getNameField().type('Alice');
    quizPage.getDateField().type('2024-12-19');
    quizPage.getQuestion().type('What is your favorite color?');
    quizPage.getAnswer().type('Blue');
    quizPage.sendQuiz();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Ձեր հարցումը յաջողութեամբ ուղարկուած է:'); 
    });
  })

  /*it('should validate max character limit in text fields', () => {
    quizPage.getQuestion().type('a'.repeat(14000)); 
    cy.get('.error-message').should('contain', 'Maximum character limit exceeded'); 
  });*/

  it('should handle page reload gracefully', () => {
    cy.reload();
    quizPage.getNameField().should('exist');
  });
});
