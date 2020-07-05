import { InputDOM } from '../../Types';
import Field from '../../Interfaces/Field';
import Component from '../../Interfaces/Component';
import FieldType from '../../Enums/FieldType';
import FieldLabel from '../Fragments/FieldLabel';

abstract class InputField implements Field, Component {

  name: string;
  label: FieldLabel;
  inputType: FieldType;
  value: any;
  onChangeCallback: EventListener;

  protected abstract DOM: InputDOM;

  constructor(
    inputType: FieldType,
    labelText: string,
    inputName: string,
    initialValue: string|number
    ) {
    this.inputType = inputType;
    this.label = new FieldLabel(labelText, inputName); 
    this.name = inputName;
    this.value = initialValue;
    this.onChangeCallback = () => {};
  }

  setDOMAttributes(params: Object = {}) {
    this.DOM.id = this.name;
    this.DOM.value = this.value;
    for (let [paramName, paramValue] of Object.entries(params)) {
      this.DOM.setAttribute(paramName, paramValue);
    }
  }

  clearOnchange(): void {
    this.DOM.removeEventListener('change', this.onChangeCallback);
    this.onChangeCallback = (event: Event): void => {
      this.value = this.DOM.value;
    };
    this.DOM.addEventListener('change', this.onChangeCallback);
  }

  listenToChangeEvents(callback: EventListener = () => {}): void {
    this.DOM.removeEventListener('change', this.onChangeCallback);
    this.onChangeCallback = (event) => {
      this.value = this.DOM.value;
      callback(event);
    };
    this.DOM.addEventListener('change', this.onChangeCallback);
  }


  render(parent: HTMLElement): void {
    // InputField is a base component and should not be rendered
    // to render actual input use a child class
    return;
  }

  destroy(): void {
    this.clearOnchange();
    this.DOM.remove();
    this.label.destroy();
  }

}

export default InputField;
