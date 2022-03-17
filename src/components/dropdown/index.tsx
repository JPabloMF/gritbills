import { useState } from "react";

interface IDropDownOption {
  id: number;
  value?: string;
  icon?: string;
}

interface IOnClick {
  dropdownId: string;
  index: number;
}

interface IDropDownProps {
  id: string;
  placeholder?: string;
  options: IDropDownOption[];
  defaultValue?: number;
  icon?: string;
  onClick: ((event: IOnClick) => void) | undefined;
}

const defaultProps: IDropDownProps = {
  id: "default-dropdown",
  options: [{ id: 0, value: "Default option", icon: undefined }],
  onClick: undefined,
};

function Dropdown({
  id: dropdownId,
  placeholder,
  options,
  defaultValue,
  icon,
  onClick,
}: IDropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number | undefined>(
    defaultValue
  );

  return (
    <div>
      <button
        onMouseEnter={(): void => setIsOpen(true)}
        onMouseLeave={(): void => setIsOpen(false)}
      >
        {icon && (
          <img
            src={icon}
            alt={
              defaultValue && options.length
                ? options[defaultValue]?.value
                : "dropdown icon"
            }
          />
        )}
        {selectedValue ? options[selectedValue].value : placeholder}
      </button>
      {isOpen && (
        <ul
          style={{ margin: 0, border: "1px solid red" }}
          onMouseEnter={(): void => setIsOpen(true)}
          onMouseLeave={(): void => setIsOpen(false)}
        >
          {options?.length &&
            options.map((option, index) => (
              <li
                key={index}
                onClick={
                  onClick
                    ? (): void => onClick({ dropdownId, index })
                    : (): void => setSelectedValue(index)
                }
              >
                {option?.value && <p>{option.value}</p>}
                {option?.icon && <img src={option.icon} alt={option.value} />}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;
