import ReactDOM from 'react-dom';

import { AppWithSettings } from './App';

class AppCustomElement extends HTMLElement {
  connectedCallback() {
    // const appSomeAttribute = this.getAttribute('someAttribute');
    ReactDOM.render(AppWithSettings, this);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

if (process.env.REACT_APP_WEB_COMPONENT_NAME) {
  customElements.define(process.env.REACT_APP_WEB_COMPONENT_NAME, AppCustomElement);
}
