import Component from "../Interfaces/Component";
import Form from "./Form";
import FieldType from '../Enums/FieldType';
import FieldSpec from '../Interfaces/FieldSpec';

class NewDocument implements Component {
    
    protected fields: Map<string, FieldSpec>;

    constructor() {
        this.fields = new Map([
            ['imie', { type: FieldType.Text, labelText: 'Twoje imię' }],
            ['nazwisko', { type: FieldType.Textarea, labelText: 'Twoje nazwisko' }],
            ['email', { type: FieldType.Email, labelText: 'Email' }],
            ['kierstud', { type: FieldType.Select, labelText: 'Kierunek studiów', options: new Map([
                ['ie', 'Informatyka i Ekonometria'],
                ['za', 'Zarządzanie']
            ]) }],
            ['elearning', {type: FieldType.Checkbox, labelText: 'Czy preferujesz elearning?'}],
            ['uwagi', {type: FieldType.Textarea, labelText: 'Uwagi'}]
        ]);
    };

    render(parent: HTMLElement): void {
        const form = new Form(this.fields);
        form.render(parent);
    };
};

export default NewDocument;
