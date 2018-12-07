import {styles} from './styles';
import counterTemplate from './template';
// We define an ES6 class that extends HTMLElement
class CounterElement extends HTMLElement {
    constructor() {
        super();

        // Initialise the counter value
        this.counter = 1;

        // We attach an open shadow root to the custom element
        const shadowRoot= this.attachShadow({mode: 'open'});

        // We define some inline styles using a template string

        // We provide the shadow root with some HTML
        shadowRoot.innerHTML = `
            <style>${styles}</style>
            ${counterTemplate}
        `;

        // We can query the shadow root for internal elements
        // in this case the button
        this.incrementButton = this.shadowRoot.querySelector('#counter-increment');
        this.decrementButton = this.shadowRoot.querySelector('#counter-decrement');
        this.counterValue = this.shadowRoot.querySelector('#counter-value');

        // We can bind an event which references one of the class methods
        this.incrementButton.addEventListener("click", this.decrement.bind(this));
        this.decrementButton.addEventListener("click", this.increment.bind(this));

    }

    increment() {
      if (this.counter < 6) {
        this.counter++;
        this.invalidate();
        this.incrementButton.classList.remove('disabled')
      } else {
        this.decrementButton.classList.add('disabled');
      }

    }

    decrement() {
      if (this.counter > 1) {
        this.counter--
        this.invalidate();
        this.incrementButton.classList.remove('disabled');
        this.decrementButton.classList.remove('disabled');
      } else {
        this.incrementButton.classList.add('disabled');
      }
    }

    // Call when the counter changes value
    invalidate() {
        this.counterValue.innerHTML = this.counter;
    }
}

// This is where the actual element is defined for use in the DOM
customElements.define('counter-element', CounterElement);
export default CounterElement;
