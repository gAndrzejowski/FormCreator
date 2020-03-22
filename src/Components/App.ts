import Component from "../Interfaces/Component";
import FieldLabel  from './FieldLabel';

const App = (): Component => ({
    render(parent: HTMLElement): void {
        parent.innerHTML = "Hello from App.ts";
        parent.innerHTML += "<hr /> Here are some labels:";
        const labels = document.createElement('div');
        const label1: FieldLabel = new FieldLabel('First label');
        const label2: FieldLabel = new FieldLabel('Second Label');
        label1.render(labels);
        label2.render(labels);
        parent.appendChild(labels);
    }
});

export default App();