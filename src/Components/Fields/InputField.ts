import Field from '../../Interfaces/Field';
import FieldTypes from '../../Enums/FieldType';
import FieldLabel from '../FieldLabel';

class InputField implements Field {

    name: string;
    value: string;
    label: FieldLabel;
    type: FieldTypes;
    protected DOM: HTMLInputElement;

    constructor(name: string, labelText: string, defaultValue: string = '') {
        this.name = name || `InputField=${Date.now()}`;
        this.label = new FieldLabel(labelText || this.name);
        this.value = defaultValue;
        this.type = FieldTypes.Text
        this.DOM = document.createElement('input');
        this.DOM.type = 'text';
        this.DOM.value = defaultValue;
    };

    render(parent: HTMLElement) {
        parent.appendChild(this.DOM);
    }
}

export default InputField;