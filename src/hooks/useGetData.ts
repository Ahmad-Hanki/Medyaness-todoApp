"use client";
import { Todo } from "@prisma/client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState<Todo[] | undefined>(undefined);

  const fetchData = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API as string, {
      headers: { "Cache-Control": "no-cache" },
    });
    const data: Todo[] = await res.data;
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshData = async () => {
    await fetchData();
    console.log("Data refreshed");
  };

  return {
    data,
    refreshData,
  };
};

export default useGetData;
