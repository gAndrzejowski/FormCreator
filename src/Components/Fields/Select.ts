import Field from '../../Interfaces/Field';
import FieldTypes from '../../Enums/FieldType';
import FieldLabel from '../FieldLabel';

class Select implements Field {

    name: string;
    value: string;
    label: FieldLabel;
    type: FieldTypes;
    private DOM: HTMLSelectElement;

    constructor(name: string, labelText: string, options: Map<string, string>, defaultValue: string = '') {
        this.name = name || `InputField=${Date.now()}`;
        this.label = new FieldLabel(labelText || this.name);
        this.value = defaultValue;
        this.type = FieldTypes.Select
        this.DOM = document.createElement('select');
        this.DOM.value = defaultValue;
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