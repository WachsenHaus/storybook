import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
  // 2.타입속성 지정
  export type TitleType = {
    isActive: boolean;
    border: number;
    backgroundColor;
    InputText;
  };
}
