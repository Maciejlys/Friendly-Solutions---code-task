export interface DataType {
  exec_time: number;
  response: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    data: WorkOrderType[];
  };
}

export interface WorkOrderType {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AsignedType[];
  status: string;
  priority: string;
}

interface AsignedType {
  person_name: string;
  status: string;
}
