import React, { PropsWithChildren } from "react";
import SidebarItem from "../../components/SidebarItem";
import { SidebarItemProps } from "../../components/SidebarItem/SidebarItem";

const list = [
  { name: "Home", icon: "", path: "" },
  {
    name: "Planning",
    icon: "",
    path: "",
    items: [{ name: "Sessions", path: "" }],
  },
  {
    name: "Attendees",
    icon: "",
    path: "",
    items: [
      {
        name: "YOU",
        items: [
          {
            name: "CAN",
            items: [
              { name: "Nest", items: [{ name: "AS MUCH AS YOU F want" }] },
            ],
          },
        ],
      },
    ],
  },
  { name: "Settings", icon: "", path: "" },
];

interface AppDrawerProps {
  open: boolean;
}

const AppDrawer = (props: PropsWithChildren<AppDrawerProps>) => {
  const [openedItem, setOpenedItem] = React.useState<string>("");

  const onItemClick = React.useCallback(
    (item: { name: string; path: string }) => {
      setOpenedItem((old) => {
        if (old == item.name) {
          return "";
        }
        return item.name;
      });
    },
    [],
  );

  const items = React.useMemo(() => {
    return (
      <>
        {list.map((v, i) => {
          return (
            <div key={v.name}>
              <SidebarItem
                name={v.name}
                path={v.path}
                icon={v.icon as unknown as JSX.Element}
                selected={v.name == openedItem}
                onClick={onItemClick}
                items={v.items as SidebarItemProps[]}
              />
              {i != list.length - 1 && (
                <div className="border-[1px] border-gray-700 mt-[5px] mb-[5px]" />
              )}
            </div>
          );
        })}
      </>
    );
  }, [openedItem, onItemClick]);

  return (
    <div className="flex transition ease-in-out items-stretch">
      <div
        className={`${
          !props.open ? "w-0" : "w-full"
        } relative max-w-[20.8rem] bg-gray-700 overflow-hidden min-h-[100vh]`}
      >
        <ul className="w-full pt-md0 px-sm0 pb-xs1">{items}</ul>
      </div>
      <div className="w-full bg-gray-1000">{props.children}</div>
    </div>
  );
};

export default AppDrawer;
