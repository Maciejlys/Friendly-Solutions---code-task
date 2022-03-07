import React, { useEffect, useState } from "react";
import { DataType, WorkOrderType } from "../types/data.type";
import { getData } from "./promise";
import mocked from "./mocked.json";

const initialState = {
  data: mocked,
  filterByDescription: (description: string) => {},
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: any) => {
  const [response, setResponse] = useState<WorkOrderType[]>(mocked);
  const [data, setData] = useState<WorkOrderType[]>(mocked);

  const filterByDescription = (description: string) => {
    const current = response;
    const newData = current.filter((c) =>
      c.description
        .toLocaleLowerCase()
        .includes(description.toLocaleLowerCase())
    );
    setData(newData);
    console.log("a");
  };

  const fetchData = async () => {
    try {
      const res: DataType = await getData();
      const { exec_time, response } = res;
      setResponse(response.data);
      setData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        filterByDescription,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
