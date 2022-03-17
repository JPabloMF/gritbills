import Dropdown from "../dropdown";

import CircleDark from "../../assets/theme_circle_dark.png";
import CircleWhite from "../../assets/theme_circle_white.png";
import ThemeIcon from "../../assets/theme_icon.png";
import LangIcon from "../../assets/lang_icon.png";
import UserIcon from "../../assets/user_icon.png";

interface IMockData {
  id: number;
  icon?: string;
  value?: string;
}

const MOCK_THEME_DROPDOWN_OPTIONS: IMockData[] = [
  { id: 0, icon: CircleDark },
  { id: 1, icon: CircleWhite },
];

const MOCK_LANGUAGE_DROPDOWN_OPTIONS: IMockData[] = [
  { id: 0, value: "English" },
  { id: 1, value: "Spanish" },
];

const MOCK_USER_DROPDOWN_OPTIONS: IMockData[] = [
  { id: 0, value: "Profile" },
  { id: 1, value: "Settings" },
  { id: 2, value: "Log out" },
];

function TopNav() {
  return (
    <div>
      <Dropdown
        id="theme-dropdown"
        options={MOCK_THEME_DROPDOWN_OPTIONS}
        icon={ThemeIcon}
        onClick={(event) => console.log(event)}
      />
      <Dropdown
        id="language-dropdown"
        options={MOCK_LANGUAGE_DROPDOWN_OPTIONS}
        icon={LangIcon}
        onClick={(event) => console.log(event)}
      />
      <Dropdown
        id="user-dropdown"
        placeholder="Juan Pablo"
        options={MOCK_USER_DROPDOWN_OPTIONS}
        icon={UserIcon}
        onClick={(event) => console.log(event)}
      />
    </div>
  );
}

export default TopNav;
