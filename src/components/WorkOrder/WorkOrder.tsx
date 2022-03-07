import React from "react";
import { WorkOrderType } from "../../types/data.type";
import {
  Asignee,
  Description,
  Priority,
  Status,
  TopBar,
  WoWrapper,
} from "./WorkOrderElements";

export const WorkOrder: React.FC<WorkOrderType> = ({
  work_order_id,
  description,
  received_date,
  assigned_to,
  status,
  priority,
}) => {
  return (
    <WoWrapper>
      <TopBar>
        <div className="left">{work_order_id}</div>
        <div className="right">{received_date}</div>
      </TopBar>
      <Status>{status}</Status>
      <Priority>{priority}</Priority>
      <Description>{description}</Description>
      <Asignee>
        {assigned_to.map((a, index) => (
          <div key={index}>{a.person_name}</div>
        ))}
      </Asignee>
    </WoWrapper>
  );
};

// <WoWrapper>
//   <div>{work_order_id}</div>
//   <div>{description}</div>
//   <div>{received_date}</div>
//   <div>{status}</div>
//   <div>{priority}</div>
// </WoWrapper>
