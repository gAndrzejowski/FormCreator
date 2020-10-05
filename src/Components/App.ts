import Component from "../Interfaces/Component";
import Form from './Form';
import FieldType from '../Enums/FieldType';

const App = (): Component => ({
    render(parent: HTMLElement): void {

        const fields = new Map([
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

        const form = new Form(fields);

        form.render(parent);

        const getAll = document.createElement('button');
        getAll.innerHTML = 'pobierz';
        getAll.addEventListener('click', () => document.write(JSON.stringify(
            form.getValue()
        )));
        document.body.appendChild(getAll);
    }
});

export default App();