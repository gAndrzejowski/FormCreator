import Component from '../../Interfaces/Component';

class Option implements Component {

  protected DOM: HTMLOptionElement;

  constructor(
    label: string,
    value: string,
    disabledByDefault: boolean = false) {
    
    this.DOM = document.createElement('option');
    this.DOM.innerHTML = label;
    this.DOM.value = value;
    if (disabledByDefault) this.DOM.setAttribute('disabled', 'disabled');
  }

  enable(): void {
    this.DOM.removeAttribute('disabled');
  }
  
  disable(): void {
    this.DOM.setAttribute('disabled', 'disabled');
  }

  render(parent: HTMLElement): void {
    parent.appendChild(this.DOM);
  }

  destroy(): void {
    this.DOM.remove();
  }
}

export default Option;
