interface Props {
  children: string;
}

const Input = ({ children }: Props) => {
  return (
    <div>
      <input
        className="bg-primary bg-opacity-25 border border-0 text-white text-center w-100"
        placeholder={children}
        type="number"
      ></input>
    </div>
  );
};

export default Input;
