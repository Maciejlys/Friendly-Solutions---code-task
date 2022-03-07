import React, { useContext } from "react";
import { DataTable } from "./components/DataTable/DataTable";
import { Input } from "./components/Input/Input";
import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      <Input />
      <DataTable />
    </AppStyle>
  );
}

export const AppStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default App;
