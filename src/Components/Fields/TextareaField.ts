import Field from '../../Interfaces/Field';
import FieldTypes from '../../Enums/FieldType';
import FieldLabel from '../FieldLabel';
import FieldSpec from '../../Interfaces/FieldSpec';

class TextareaField implements Field {

    name: string;
    get value(): string {
        return this.DOM.value;
    };
    label: FieldLabel;
    type: FieldTypes;
    protected DOM: HTMLTextAreaElement;

    constructor({name, defaultValue = '', labelText}: FieldSpec) {
        this.name = name || `InputField=${Date.now()}`;
        this.label = new FieldLabel(labelText || this.name);
        this.type = FieldTypes.Textarea
        this.DOM = document.createElement('textarea');
        this.DOM.value = defaultValue;
    };

    render(parent: HTMLElement) {
        parent.appendChild(this.DOM);
    }
}

export default TextareaField;