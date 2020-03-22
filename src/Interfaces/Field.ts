import Component from './Component';
import FieldType from '../Enums/FieldType';

interface Field extends Component {
    name: string,
    label: string, //TODO: convert to FieldLabel class once it exists
    type: FieldType,
    value: any
}

export default Field;