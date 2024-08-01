import { createContext, Dispatch, SetStateAction } from "react";

export interface TitleContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

const object: TitleContextType = {
  title: "",
  setTitle: () => {},
  id: "",
  setId: () => {},
};

const TitleContext = createContext(object);

export default TitleContext;
