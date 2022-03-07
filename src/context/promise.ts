import data from "../data/data.json";
import { DataType } from "../types/data.type";

export const getData = () => {
  return new Promise<DataType | any>((resolve, reject) => {
    resolve(data);
  });
};
