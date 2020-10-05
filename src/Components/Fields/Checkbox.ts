import InputField from './InputField';
import FieldTypes from '../../Enums/FieldType';
import FieldSpec from '../../Interfaces/FieldSpec';

class Checkbox extends InputField {

    constructor(spec: FieldSpec) {
        super(spec);
        this.type = FieldTypes.Checkbox;
        this.DOM.type = 'checkbox';
    }
}

export default Checkbox;