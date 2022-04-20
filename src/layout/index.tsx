import { FC } from "react";

import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ home, children }) => {
  return <div>{children}</div>;
};

export default Layout;
