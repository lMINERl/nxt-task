import React from "react";

export interface SidebarItemProps {
  selected?: boolean;
  disabled?: boolean;
  name: string;
  path: string;
  onClick?: (item: { name: string; path: string }) => void;
  icon?: JSX.Element;
  items?: SidebarItemProps[];
}

const SidebarItem = (props: SidebarItemProps) => {
  const [selected, setSelected] = React.useState("");

  const onItemClick = React.useCallback(
    (item: { name: string; path: string }) => {
      setSelected((old) => {
        if (old == item.name) {
          return "";
        }
        return item.name;
      });
    },
    [],
  );

  const items = React.useMemo(() => {
    return props.items?.map((v) => {
      return (
        <SidebarItem
          key={v.name}
          name={v.name}
          path={v.path}
          selected={v.name == selected}
          onClick={onItemClick}
          items={v.items}
        />
      );
    });
  }, [props.selected, props.items, selected, onItemClick]);

  React.useEffect(() => {
    if (!props.selected) {
      setSelected("");
    }
  }, [props.selected]);

  return (
    <li className="w-full flex flex-col justify-start items-start">
      <button
        className="w-full bg-gray-800 flex justify-center items-start p-xs1"
        onClick={() => {
          props.onClick && props.onClick(props);
        }}
      >
        <div className="w-[24px] h-[24px]">{props.icon}</div>
        <div
          className={`text-sm ml-xs0 ${
            props.selected ? "text-gray-200" : "text-gray-300"
          } ${props.disabled ? "text-gray-400" : ""} `}
        >
          {props.name}
        </div>
        <div className="w-[24] h-[24] ml-[4.3rem]"></div>
      </button>
      <ul
        className={`flex justify-start flex-col items-start overflow-hidden w-full ${
          props.selected ? "h-full" : "h-0"
        }`}
      >
        {items}
      </ul>
    </li>
  );
};

export default React.memo(SidebarItem);
