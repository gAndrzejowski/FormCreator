import InputField from './InputField';
import FieldTypes from '../../Enums/FieldType';

class DateField extends InputField {

    constructor(name: string, labelText: string, defaultValue: string = '') {
        super(name, labelText, defaultValue);
        this.type = FieldTypes.Date;
        this.DOM.type = 'date';
    }
}

export default DateField;