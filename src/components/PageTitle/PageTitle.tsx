import React, { PropsWithChildren } from "react";

interface PageTitleProps {
  name: string;
}

const PageTitle = (props: PropsWithChildren<PageTitleProps>) => {
  return (
    <div className="w-full flex justify-between items-center bg-gray-1000 max-h-[6.8rem] px-md2">
      <div className="text-xl text-white py-sm0 pl-xs0 my-[0.5rem]">
        {props.name}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default PageTitle;
