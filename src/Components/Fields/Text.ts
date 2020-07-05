import FieldType from '../../Enums/FieldType';
import InputField from './base'; 

class TextInput extends InputField {

  protected DOM: HTMLInputElement;

  constructor(
    labelText: string,
    inputName: string,
    initialValue: string = ''
    ) {
      super(FieldType.Text, labelText, inputName, initialValue);
      this.DOM = document.createElement('input');
      this.setDOMAttributes({
        type: 'text'
      });
    }

  render(parent: HTMLElement): void {
    parent.appendChild(this.DOM);
    this.listenToChangeEvents();
    this.label.render(parent);
  }


}

export default TextInput;
