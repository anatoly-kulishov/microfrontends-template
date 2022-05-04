import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'first-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'second-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    mode?: string;
  }
}
