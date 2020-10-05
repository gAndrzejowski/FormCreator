import Component from '../Interfaces/Component';
import FieldType from '../Enums/FieldType';
import FieldSpec from '../Interfaces/FieldSpec';
import Field from '../Interfaces/Field';
import FieldClasses from './Fields';

class Form implements Component {

    static fieldTypeToFieldClassMap = {
        [FieldType.Text]: FieldClasses.InputField,
        [FieldType.Textarea]: FieldClasses.TextareaField,
        [FieldType.Date]: FieldClasses.DateField,
        [FieldType.Email]: FieldClasses.Email,
        [FieldType.Select]: FieldClasses.Select,
        [FieldType.Checkbox]: FieldClasses.Checkbox,
    }
    fields = new Map<string, Field>();
    protected DOM: HTMLFormElement;

    constructor(fieldspecs: Map<string, FieldSpec>) {
        for (let [fieldId, {
               type,
               name,
               labelText,
               options = new Map(),
               defaultValue
            }] of fieldspecs.entries()) {
            const createdField = new Form.fieldTypeToFieldClassMap[type]({               name: name || fieldId,
                type,
                labelText: labelText || name || fieldId,
                options,
                defaultValue }
            );
            this.fields.set(fieldId, createdField);
        };
        this.DOM = document.createElement('form');
    }

    getValue(): Array<string> {
        return [...this.fields.values()].map(formElement => formElement.value);
    }

    render(parent: HTMLElement): void {
        for (let field of this.fields.values()) field.render(this.DOM);
        parent.appendChild(this.DOM);
    }

}

export default Form