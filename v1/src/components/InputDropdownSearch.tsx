interface Props {
  children: string;
}

const InputDropdownSearch = ({ children }: Props) => {
  return (
    <div>
      <input
        className="bg-dark text-white border border-secondary w-100"
        placeholder={children}
      ></input>
    </div>
  );
};

export default InputDropdownSearch;
