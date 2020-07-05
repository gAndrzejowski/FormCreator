import FieldType from '../../Enums/FieldType';
import InputField from './base'; 

class DateField extends InputField {

  protected DOM: HTMLInputElement;

  constructor(
    labelText: string,
    inputName: string,
    initialValue: string = ''
    ) {
      super(FieldType.Date, labelText, inputName, initialValue);
      this.DOM = document.createElement('input');
      this.setDOMAttributes({
        type: 'date'
      });
    }

  render(parent: HTMLElement): void {
    parent.appendChild(this.DOM);
    this.listenToChangeEvents();
    this.label.render(parent);
  }


}

export default DateField;
