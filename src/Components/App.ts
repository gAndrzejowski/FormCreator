import Component from "../Interfaces/Component";
import FieldLabel  from './FieldLabel';
import Select from './Fields/Select';

const App = (): Component => ({
    render(parent: HTMLElement): void {
        parent.innerHTML = "Hello from App.ts";
        parent.innerHTML += "<hr /> Here are some labels:";
        const labels = document.createElement('div');
        const selection = new Select('selection', 'test', new Map(
            [
                ['1', 'test1'],
                ['2', 'test2'],
            ]
        ))

        selection.render(labels);
        parent.appendChild(labels);
    }
});

export default App();