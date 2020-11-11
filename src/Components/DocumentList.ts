import Component from '../Interfaces/Component';
import LocStorageUtil from '../Util/LocStorage';
import DataStorage from '../Interfaces/DataStorage';

class DocumentList implements Component {

    private StorageUtils = new LocStorageUtil();

    protected documents: Array<string> = [];

    protected DOM: HTMLTableElement;

    constructor() {
        this.DOM = document.createElement('table');
    }

    getDocumentsList(): void {
        this.documents = this.StorageUtils.getDocuments();
    }

    removeDocumentById(id: string): void {
        this.StorageUtils.removeDocument(id);
        this.getDocumentsList();
        this.renderCells();
    }

    private renderCells(): void {
        this.DOM.innerHTML = `
        <caption> Zapisane dokumenty </caption>
        <thead>
            <th> Zapisano </th>
            <th> Akcja </th>
        <thead>
        `;
        if (!this.documents.length) {
            const empty = document.createElement('tr');
            const emptyCell = document.createElement('td');
            emptyCell.setAttribute('colspan', '2');
            emptyCell.innerText = 'Brak dokumentów do wyświetlenia';
            empty.appendChild(emptyCell);
            this.DOM.appendChild(empty);
        }
        
        else for (let documentId of this.documents) {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            const creationTime = new Date(Number(documentId.split('=')[1]));
            console.log(creationTime, documentId, documentId.split('=')[1]);

            timeCell.innerHTML = `Formularz utworzony <time datetime=${creationTime.toISOString()}>
            ${creationTime.getDate()}.${creationTime.getMonth()+1}.${creationTime.getFullYear()}\n
            ${creationTime.getHours()}:${creationTime.getMinutes()}:${creationTime.getSeconds()}</time>`;
            const actionCell = document.createElement('td');
            const formLink = document.createElement('a');
            formLink.setAttribute('href', `index.html?${documentId}`);
            formLink.innerText = 'Otwórz';
            actionCell.appendChild(formLink);
            const deleteForm = document.createElement('button');
            deleteForm.innerHTML = 'Usuń';
            deleteForm.addEventListener('click', () => {this.removeDocumentById(documentId)});
            actionCell.appendChild(deleteForm);
            row.appendChild(timeCell);
            row.appendChild(actionCell);
            this.DOM.appendChild(row);
        }
    }

    render(parent: HTMLElement): void {
        this.getDocumentsList();
        this.renderCells();
        parent.appendChild(this.DOM);
    }

}

export default DocumentList;
