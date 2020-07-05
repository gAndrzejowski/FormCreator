import {Options} from '../../Types';
import FieldType from '../../Enums/FieldType';
import InputField from './base';
import Option from '../Fragments/Option';

class SelectField extends InputField {

  DOM: HTMLSelectElement;
  currentOptions: Options;

  constructor(
    labelText: string,
    inputName: string,
    options: Options,
    initialValue: string = '',
  ) {
    super(FieldType.Select, labelText, inputName, initialValue);
    this.DOM = document.createElement('select');
    this.currentOptions = options;
    this.setDOMAttributes({
      value: initialValue
    });
  }

  renderOptions(): void {
    this.DOM.innerHTML = "";
    this.currentOptions.forEach(option => {
      const {label, value, isDisabled = false} = option;
      const OptionElement = new Option(label, value, isDisabled);
      OptionElement.render(this.DOM);
    });
  }

  render(parent: HTMLElement): void {
    this.renderOptions();
    parent.appendChild(this.DOM);
  }
}
