import { useState } from "react";
import _ from "lodash";

interface IDropDownProps {
  options: any[];
  defaultValue: number | undefined;
  icon: string | null;
  onClick: ((value: any) => void) | undefined;
}

const defaultProps: IDropDownProps = {
  options: [{ id: 0, value: "Default option", icon: null }],
  defaultValue: 0,
  icon: null,
  onClick: undefined
};

function Dropdown({ options, defaultValue, icon, onClick }: IDropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number | undefined>(
    undefined
  );

  return (
    <div>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {icon && (
          <img src={icon} alt={defaultValue && options.length ? options[defaultValue]?.value : "dropdown icon"} />
        )}
        {_.isNumber(defaultValue)
          ? options[defaultValue].value
          : selectedValue
          ? options[selectedValue].value
          : "Select a value"}
      </button>
      {isOpen && (
        <ul
          style={{ margin: 0, border: "1px solid red" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {options?.length &&
            options.map((option, index) => (
              <li
                key={index}
                onClick={onClick ? onClick : () => setSelectedValue(index)}
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
