import { useState } from "react";

interface ITab {
  name: string;
  component: JSX.Element;
}

interface ITabProps {
  tabs?: ITab[];
}

const defaultProps: ITabProps = {
  tabs: [{ name: "Default tab", component: <div>Default View</div> }],
};

function Tab({ tabs }: ITabProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div>
        {tabs?.length &&
          tabs.map((tab, indexTab) => (
            <button key={indexTab} onClick={() => setActiveTab(indexTab)}>
              {tab.name}
            </button>
          ))}
      </div>
      {tabs?.length && tabs[activeTab].component}
    </>
  );
}

Tab.defaultProps = defaultProps;

export default Tab;
