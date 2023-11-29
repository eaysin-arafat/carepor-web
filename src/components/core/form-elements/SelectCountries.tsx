import { Component } from "react";

type Props = {
  value?: string | number;
  onChange?: (e: any) => void;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  children?: any;
};

type State = {};

class SelectCountries extends Component<Props, State> {
  state = {};

  render() {
    return <div>SelectCountries</div>;
  }
}

export default SelectCountries;
