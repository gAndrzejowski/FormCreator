import InputField from './InputField';
import FieldTypes from '../../Enums/FieldType';
import FieldSpec from '../../Interfaces/FieldSpec';

class EmailField extends InputField {

    constructor(spec: FieldSpec) {
        super(spec);
        this.type = FieldTypes.Email;
        this.DOM.type = 'email';
    }
}

export default EmailField;