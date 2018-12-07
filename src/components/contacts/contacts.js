import contactsTemplate from './template';
import contactsStyles from './styles';

class ContactsComponent extends HTMLElement {
  constructor() {
      super();
      const shadowRoot= this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
      <style>
        ${contactsStyles}
      </style>
      ${contactsTemplate}
      `;
      this.nameValue = this.shadowRoot.querySelector('#test-name');
      // this.nameValue.innerHTML = this.name;
  }

  // get name() {
  //   return this.getAttribute('name');
  // }
}

customElements.define("contacts-component", ContactsComponent);
export default ContactsComponent;
