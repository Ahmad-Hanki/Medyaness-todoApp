"use client";

import { useContext, useState } from "react";
import SubmitButton from "./SubmitButton";
import { Input } from "./ui/input";
import TitleContext from "./context/TitleContext";
import axios from "axios";

const Form = () => {
  const { setTitle, title } = useContext(TitleContext);
  const [id, setId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    if (title == "") {
      return;
    }

    if (id == "") {
      const res = await axios.post("/api", { title });
      console.log(res.status);
      if (res.status == 200) {
        setTitle("");
      }
    }
  };
  return (
    <div className="w-full py-9">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto border border-secondary-foreground space-y-7 py-9 px-5"
      >
        <h1 className="text-center text-3xl font-bold">Add a mission:</h1>
        <div className="flex gap-3">
          <Input
            name="title"
            type="text"
            className="w-full border border-secondary-foreground"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
