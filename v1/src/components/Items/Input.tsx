import { Fragment } from "react/jsx-runtime";

interface Props {
  children: string;
}

const Input = ({ children }: Props) => {
  return (
    <Fragment>
      <input
        className="bg-primary bg-opacity-25 border border-0 text-white text-center w-100"
        placeholder={children}
        type={"number"}
      ></input>
    </Fragment>
  );
};

export default Input;
