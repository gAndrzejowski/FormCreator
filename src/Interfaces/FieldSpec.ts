import FieldType from '../Enums/FieldType';

export default interface FieldSpec {
        type: FieldType,
        labelText?: string,
        name?: string,
        defaultValue?: string,
        options?: Map<string, string>
};

export interface SelectFieldSpec extends FieldSpec {
    options?: Map<string, string>
};