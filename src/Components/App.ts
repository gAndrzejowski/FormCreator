import Component from "../Interfaces/Component";
import Form from './Form';
import FieldType from '../Enums/FieldType';

const App = (): Component => ({
    render(parent: HTMLElement): void {

        const fields = new Map([
            ['normalInput', { type: FieldType.Text, }],
            ['text area', { type: FieldType.Textarea, }],
            ['date', { type: FieldType.Date, }],
            ['email', { type: FieldType.Email, }],
            ['selection', { type: FieldType.Select, options: new Map([
                ['1', 'one'],
                ['2', 'two']
                ]) }],
            ['checkbox input', { type: FieldType.Checkbox, }],
        ]);

        const form = new Form(fields);

        form.render(parent);

        const getAll = document.createElement('button');
        getAll.addEventListener('click', () => document.write(JSON.stringify(
            form.getValue()
        )));
        document.body.appendChild(getAll);
    }
});

export default App();