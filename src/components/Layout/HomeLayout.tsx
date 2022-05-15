import React from "react";

type Props = {
  children: any;
};

const HomeLayout = ({ children }: Props) => {
  return <div className="container py-5">{children}</div>;
};

export default HomeLayout;
