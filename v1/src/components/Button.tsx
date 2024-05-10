interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={"h-100 w-100 fs-3 rounded-0 btn btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
