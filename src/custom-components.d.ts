import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'home-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'messenger-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'profile-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    mode?: string;
  }
}
