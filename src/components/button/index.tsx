interface IButtonProps {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  text: string;
}

const defaultProps: IButtonProps = {
  type: "submit",
  onClick: () => {},
  text: "Default text",
};

function Button({ type, onClick, text }: IButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button