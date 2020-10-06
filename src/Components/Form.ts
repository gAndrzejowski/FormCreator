import Component from '../Interfaces/Component';
import FieldType from '../Enums/FieldType';
import FieldSpec from '../Interfaces/FieldSpec';
import Field from '../Interfaces/Field';
import FieldClasses from './Fields';
import LocStorageUtil from '../Util/LocStorage';
import {navigateHome} from '../Util/Navigation';

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
    protected storageUtil: LocStorageUtil;

    constructor(fieldspecs: Map<string, FieldSpec>) {
        this.storageUtil = new LocStorageUtil();
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

    getValue(): {[index: string]: any} {
        return [...this.fields.entries()].reduce((accumulator: {[index: string]: any}, [fieldId, field]) => {
            accumulator[fieldId] = field.value;
            return accumulator;
        }, {});
    }
    
    save(): void {
        this.storageUtil.saveDocument(this.getValue());
        navigateHome();
    }

    render(parent: HTMLElement): void {
        for (let field of this.fields.values()) field.render(this.DOM);
        const save = document.createElement('button');
        save.innerText = 'Zapisz';
        const back = document.createElement('button');
        back.innerText = 'Powrót';
        save.addEventListener('click', () => this.save());
        back.addEventListener('click', navigateHome);
        this.DOM.appendChild(save);
        this.DOM.appendChild(back);
        parent.appendChild(this.DOM);
    }

}

export default Form