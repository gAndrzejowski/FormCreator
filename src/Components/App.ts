import Component from "../Interfaces/Component";
import TextInput from "./Fields/Text";
import DateField from "./Fields/DateField";
import TextAreaInput from "./Fields/TextAreaField";

const App = (): Component => ({

    render(parent: HTMLElement): void {

        parent.innerHTML = "Hello from App.ts";
        parent.innerHTML += "<hr />";

        const input = new TextInput(
          "Test input",
          "test",
          "test2"
        );
        const tarea = new TextAreaInput(
          "Write something clever here",
          "test2",
          "Let's get started"
        );
        
        const dateInput = new DateField(
          "When are we starting?",
          "date-test"
        );
      input.render(parent);
      tarea.render(parent);
      dateInput.render(parent);
    }
});

export default App();
