import InputField from './InputField';
import FieldTypes from '../../Enums/FieldType';

class Checkbox extends InputField {

    constructor(name: string, labelText: string, defaultValue: string = '') {
        super(name, labelText, defaultValue);
        this.type = FieldTypes.Checkbox;
        this.DOM.type = 'checkbox';
    }
}

export default Checkbox;