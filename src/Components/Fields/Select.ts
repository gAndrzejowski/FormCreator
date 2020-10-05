import Field from '../../Interfaces/Field';
import FieldTypes from '../../Enums/FieldType';
import FieldLabel from '../FieldLabel';
import {SelectFieldSpec} from '../../Interfaces/FieldSpec';

class Select implements Field {

    name: string;
    get value(): string {
        return this.DOM.value;
    };
    label: FieldLabel;
    type: FieldTypes;
    private DOM: HTMLSelectElement;

    constructor({
        name, defaultValue = '', labelText, options = new Map() 
    }: SelectFieldSpec
     ) {
        this.name = name || `InputField=${Date.now()}`;
        this.label = new FieldLabel(labelText || this.name);
        this.type = FieldTypes.Select
        this.DOM = document.createElement('select');
        this.DOM.value = defaultValue || '';
        for (let [option, optionLabel] of options) {
            const optionDOM: HTMLOptionElement = document.createElement('option');
            optionDOM.value = option;
            optionDOM.innerText = optionLabel;
            this.DOM.appendChild(optionDOM)
        }
    };

    render(parent: HTMLElement) {
        parent.appendChild(this.DOM);
    }
}

export default Select;