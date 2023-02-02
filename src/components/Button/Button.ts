type buttons = 'submit' | 'reset' | 'button' | 'clear';

export default class Button {
  #text: string;
  #element: HTMLButtonElement;
  #buttonType: buttons;

  constructor(text: string, buttonType: buttons, cssClasses: string = '') {
    this.#text = text;
    this.#buttonType = buttonType;
  }

  render(): void {
    this.#element.type = this.#buttonType;
  }
}
