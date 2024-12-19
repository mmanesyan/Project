class QuizPage {
  visit(_quizId) {
    cy.visit(`https://quiz.cyberhayq.am/?quiz=832456720`);
  }

  getNameField() {
    return cy.get('input[type="text"]'); 
  }


  getFileInput() {
    return cy.get('input[type="file"]'); 
  }

  getDateField() {
    return cy.get('input[type="date"]'); 
  }

  getQuestion() {
    return cy.get('body > form:nth-child(1) > div:nth-child(4) > label:nth-child(5) > textarea:nth-child(1)'); 
  }

  getAnswer() {
    return cy.get('body > form:nth-child(1) > div:nth-child(4) > label:nth-child(6) > textarea:nth-child(1)'); 
  }


  sendQuiz() {
    cy.get('body > form:nth-child(1) > button:nth-child(6)').click();
  }
}

export default QuizPage;


