import Component from '../Interfaces/Component';

export default class FieldLabel implements Component {
    constructor(labelString: string) {
        this.DOM = document.createElement('label');
        this.DOM.innerText = labelString;
    };
    private DOM: HTMLLabelElement;
    render(parent: HTMLElement): void {
        parent.appendChild(this.DOM)
    };
};