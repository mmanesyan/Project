// fileTransferPage.js (Page Object Model)
class FileTransferPage {
    elements = {
        fileInput: () => cy.get('input[type="file"]'), // Selector for the file input field
        uploadBtn: () => cy.get('button#upload'),     // Selector for the upload button
        downloadLink: () => cy.get('a#download'),     // Selector for the download link
        successMsg: () => cy.get('.success-message'), // Optional: Success message selector
    };

    uploadFile(fileName) {
        this.elements.fileInput().attachFile(fileName);
        this.elements.uploadBtn().click();
    }

    downloadFile() {
        this.elements.downloadLink().click();
    }
}

export const fileTransferPage = new FileTransferPage();

