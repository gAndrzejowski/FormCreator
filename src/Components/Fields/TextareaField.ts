import Field from '../../Interfaces/Field';
import FieldTypes from '../../Enums/FieldType';
import FieldLabel from '../FieldLabel';

class TextareaField implements Field {

    name: string;
    value: string;
    label: FieldLabel;
    type: FieldTypes;
    protected DOM: HTMLTextAreaElement;

    constructor(name: string, labelText: string, defaultValue: string = '') {
        this.name = name || `InputField=${Date.now()}`;
        this.label = new FieldLabel(labelText || this.name);
        this.value = defaultValue;
        this.type = FieldTypes.Textarea
        this.DOM = document.createElement('textarea');
        this.DOM.value = defaultValue;
    };

    render(parent: HTMLElement) {
        parent.appendChild(this.DOM);
    }
}

export default TextareaField;