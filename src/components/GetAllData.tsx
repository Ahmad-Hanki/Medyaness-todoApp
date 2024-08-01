"use client";

import { Todo } from "@prisma/client";
import axios from "axios";
import { Button } from "./ui/button";
import { useContext, useEffect, useState } from "react";
import TitleContext from "./context/TitleContext";
import useGetData from "@/hooks/useGetData";

const GetAllData = () => {
  const { setId, setTitle, id, title } = useContext(TitleContext);
  const { data, refreshData } = useGetData();

  const deleteHandler = async (id: string) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API as string}/${id}`
    );
    if (res.status == 200) {
      await refreshData();
    }
  };
  const updateHandler = async (id: string) => {
    if (title == "") {
      return;
    }
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_API as string}/${id}`,
      {
        title,
      }
    );

    if (res.status == 200) {
      await refreshData();
      setTitle("");
      setId("");
    }
  };

  return (
    <div className="w-full py-9">
      <div className="overflow-auto max-w-3xl mx-auto border border-secondary-foreground space-y-10  py-6 px-3">
        {data?.map((todo) => (
          <div
            key={todo.id}
            className="flex flex-col justify-center items-center w-fit mx-auto cursor-pointer space-y-4"
          >
            <h1
              onClick={() => {
                setId(todo.id);
                setTitle(todo.title);
              }}
              className="text-center text-primary"
            >
              {todo.title}
            </h1>

            {id == "" && (
              <Button
                className="text-red-400 w-fit"
                onClick={async () => {
                  await deleteHandler(todo.id);
                }}
              >
                Delete
              </Button>
            )}
            {id == todo.id && (
              <>
                <Button
                  onClick={() => {
                    updateHandler(todo.id);
                  }}
                  className="text-blue-400 w-fit"
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    setId("");
                    setTitle("");
                  }}
                  className="text-pink-400 w-fit"
                >
                  Cancle
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllData;
