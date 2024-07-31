'use client'

import { ReactNode, useState } from "react";
import TitleContext, { TitleContextType } from "./TitleContext";

const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");

  const object: TitleContextType = {
    title,
    setTitle,
  };
  return (
    <div>
      <TitleContext.Provider value={object}>{children}</TitleContext.Provider>
    </div>
  );
};

export default TitleProvider;
