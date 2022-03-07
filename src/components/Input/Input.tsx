import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import { InputContainer } from "./InputElements";

interface InputProps {}

export const Input: React.FC<InputProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { filterByDescription } = useContext(AppContext);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearchTerm(newValue);
    filterByDescription(newValue);
  };
  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </InputContainer>
    </>
  );
};
