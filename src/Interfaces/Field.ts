import Component from './Component';
import FieldType from '../Enums/FieldType';
import FieldLabel from '../Components/Fragments/FieldLabel';

interface Field extends Component {
    name: string,
    label: FieldLabel,
    inputType: FieldType,
    value: any,
}

export default Field;
