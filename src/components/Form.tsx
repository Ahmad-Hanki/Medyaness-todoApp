"use client";

import { useContext } from "react";
import SubmitButton from "./SubmitButton";
import { Input } from "./ui/input";
import TitleContext from "./context/TitleContext";
import { postAPI } from "@/services";
import { redirect } from "next/navigation";

const Form = () => {
  const { setTitle, title, id } = useContext(TitleContext);

  const handleSubmit = async () => {
    if (title == "") {
      return;
    }

    if (id == "") {
      const res = await postAPI("", { title });
      if (res.status === 200) {
        setTitle("");
        redirect("/");
      }
    }
  };
  return (
    <div className="w-full py-9">
      <form
        action={handleSubmit}
        className="max-w-3xl mx-auto border border-secondary-foreground space-y-7 py-9 px-5"
      >
        <h1 className="text-center text-3xl font-bold">Add a mission:</h1>
        <div className="flex gap-3">
          <Input
            name="title"
            type="text"
            className="w-full border border-secondary-foreground"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {!id && <SubmitButton />}
        </div>
      </form>
    </div>
  );
};

export default Form;
