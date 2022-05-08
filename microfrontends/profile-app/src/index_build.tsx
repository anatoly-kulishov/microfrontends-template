import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

class AppCustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

if (process.env.REACT_APP_WEB_COMPONENT_NAME) {
  customElements.define(process.env.REACT_APP_WEB_COMPONENT_NAME, AppCustomElement);
}
