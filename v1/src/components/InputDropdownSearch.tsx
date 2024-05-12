interface Props {
  children: string;
}

const InputDropdownSearch = ({ children }: Props) => {
  return (
    <div>
      <input
        className="bg-primary bg-opacity-25 text-white border border-0 w-100"
        placeholder={children}
        list="browser"
      ></input>
      <datalist id="browser">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Internet Explorer" />
        <option value="Opera" />
        <option value="Safari" />
        <option value="Microsoft Edge" />
      </datalist>
    </div>
  );
};

export default InputDropdownSearch;

/* Have to try out other select options, like react-select

import Select from react-select

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)

*/
