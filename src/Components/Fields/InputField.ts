import Field from '../../Interfaces/Field';
import FieldTypes from '../../Enums/FieldType';
import FieldLabel from '../FieldLabel';
import FieldSpec from '../../Interfaces/FieldSpec';

class InputField implements Field {

    name: string;
    get value(): string {
        return this.DOM.value;
    };
    label: FieldLabel;
    type: FieldTypes;
    protected DOM: HTMLInputElement;

    constructor({
        name,
        labelText,
        defaultValue = ''
    }: FieldSpec) {
        this.name = name || `InputField_${Date.now()}`;
        this.label = new FieldLabel(labelText || this.name);
        this.type = FieldTypes.Text
        this.DOM = document.createElement('input');
        this.DOM.type = 'text';
        this.DOM.value = defaultValue || '';
    };

    render(parent: HTMLElement) {
        parent.appendChild(this.DOM);
    }
}

export default InputField;