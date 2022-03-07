import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { WorkOrder } from "../WorkOrder/WorkOrder";
import { DataWrapper } from "./DataTableElements";

export const DataTable: React.FC = () => {
  const { data } = useContext(AppContext);

  return (
    <DataWrapper>
      {data.map((wo, index) => (
        <WorkOrder key={index} {...wo} />
      ))}
    </DataWrapper>
  );
};
