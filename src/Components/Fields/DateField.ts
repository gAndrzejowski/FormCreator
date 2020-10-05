import InputField from './InputField';
import FieldTypes from '../../Enums/FieldType';
import FieldSpec from '../../Interfaces/FieldSpec';

class DateField extends InputField {

    constructor(spec: FieldSpec) {
        super(spec);
        this.type = FieldTypes.Date;
        this.DOM.type = 'date';
    }
}

export default DateField;