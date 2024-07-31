"use client";

import { Todo } from "@prisma/client";
import axios from "axios";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const GetAllData = () => {
  const [data, setData] = useState<Todo[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api");
      const data: Todo[] = await res.data;
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="w-full py-9">
      <div className="overflow-auto max-w-3xl mx-auto border border-secondary-foreground space-y-3 py-6 px-3">
        {data?.map((todo) => (
          <div  key={todo.id} className="flex flex-col justify-center items-center">
            <h1 className="text-center text-primary">{todo.title}</h1>
            <Button className="text-red-400 w-fit">Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllData;
