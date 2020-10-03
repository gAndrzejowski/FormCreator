import InputField from './InputField';
import FieldTypes from '../../Enums/FieldType';

class EmailField extends InputField {

    constructor(name: string, labelText: string, defaultValue: string = '') {
        super(name, labelText, defaultValue);
        this.type = FieldTypes.Email;
        this.DOM.type = 'email';
    }
}

export default EmailField;