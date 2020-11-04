import Component from '../Interfaces/Component';
import {navigateToNewDocument, navigateToList} from '../Util/Navigation';

class Homepage implements Component {

    protected DOM: HTMLDivElement;

    constructor() {
        this.DOM = document.createElement('div');
        const toList = document.createElement('button');
        toList.innerHTML = 'Lista dokumentow';
        const toNew = document.createElement('button');
        toNew.innerHTML = 'Nowy dokument';
        toList.addEventListener('click', navigateToList);
        toNew.addEventListener('click', navigateToNewDocument);
        this.DOM.appendChild(toList);
        this.DOM.appendChild(toNew);
    }
    
    render(parent: HTMLElement): void {
        parent.appendChild(this.DOM);
    }
    

}

export default Homepage;
