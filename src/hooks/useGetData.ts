"use client";
import { getAPI } from "@/services";
import { Todo } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState<Todo[] | undefined>(undefined);

  const fetchData = async () => {
    const data: Todo[]  = await getAPI('');
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
