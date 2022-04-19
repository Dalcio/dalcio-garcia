import { createContext, useContext } from "react";

export type AppContextProps = {};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children }) => {
  return <div>{children}</div>;
};

const useApp = () => useContext(AppContext);

export default AppProvider;
