import Component from './Component';
import FieldLabel from '../Components/FieldLabel';
import FieldType from '../Enums/FieldType';

interface Field extends Component {
    name: string,
    label: FieldLabel,
    type: FieldType,
    value: any
}

export default Field;