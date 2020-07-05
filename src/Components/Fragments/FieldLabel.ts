import Component from '../../Interfaces/Component';

export default class FieldLabel implements Component {

    private DOM: HTMLLabelElement;

    constructor(labelString: string, describedInputName : string = "") {
        this.DOM = document.createElement('label');
        this.DOM.innerText = labelString;
        this.DOM.setAttribute('for', describedInputName);
    };

    render(parent: HTMLElement): void {
        parent.appendChild(this.DOM);
    };

    destroy(): void {
      return;
    }
};
