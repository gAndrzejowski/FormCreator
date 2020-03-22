import Component from "../Interfaces/Component";

const App = (): Component => ({
    render(parent: HTMLElement): void {
        parent.innerHTML = "Hello from App.ts";
    }
});

export default App();