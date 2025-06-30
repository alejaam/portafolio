// Para manejar importaciones de imágenes
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Para módulos CSS/SCSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Para archivos de estilos globales
declare module '*.css';
declare module '*.scss';

// Para archivos de fuentes
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';

// Para alias de rutas (si usas path aliases en tu configuración)
declare module '@/*' {
  const value: string;
  export default value;
}
