import FieldType from '../../Enums/FieldType';
import InputField from './base'; 

class TextAreaInput extends InputField {

  protected DOM: HTMLTextAreaElement;

  constructor(
    labelText: string,
    inputName: string,
    initialValue: string = ''
    ) {
      super(FieldType.Textarea, labelText, inputName, initialValue);
      this.DOM = document.createElement('textarea');
      this.setDOMAttributes();
    }

  render(parent: HTMLElement): void {
    parent.appendChild(this.DOM);
    this.listenToChangeEvents();
    this.label.render(parent);
  }


}

export default TextAreaInput;
