export type FormSectionType = {
  children: JSX.Element;
  titleText?: string;
  title?: string;
  titleClass?: string;
  boxClass?: string;
  noteText?: string;
  titleBorder?: boolean;
  noteClass?: string;
  border?: boolean;
  sectionErrorMsg?: string;
  sectionErrorClass?: string;
};

export interface LoginDataType {
  username: string;
  password: string;
  rememberMe: boolean;
}
