interface Props {
  children: string;
}

const Input = ({ children }: Props) => {
  return (
    <div>
      <input
        className="bg-primary bg-opacity-10 border border-0 text-white text-center w-100 [&::-moz-appearance]:textfield"
        placeholder={children}
        type="number"
      ></input>
    </div>
  );
};

export default Input;
