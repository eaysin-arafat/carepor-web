export type FormSectionType = {
  children: JSX.Element;
  titleText: string;
  titleClass?: string;
  boxClass?: string;
  noteText?: string;
  titleBorder?: boolean;
  noteClass?: string;
};

export interface LoginDataType {
  username: string;
  password: string;
}
