import { createContext, Dispatch, SetStateAction } from "react";

export interface TitleContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const object: TitleContextType = {
  title: "",
  setTitle: () => {},
};

const TitleContext = createContext(object);

export default TitleContext;
