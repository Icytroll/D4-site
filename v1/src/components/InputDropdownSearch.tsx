interface Props {
  children: string;
}

const InputDropdownSearch = ({ children }: Props) => {
  return (
    <div>
      <input
        className="bg-primary bg-opacity-25 text-white border border-0 w-100"
        placeholder={children}
      ></input>
    </div>
  );
};

export default InputDropdownSearch;
