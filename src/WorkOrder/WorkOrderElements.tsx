import styled from "styled-components";

export const WoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 9px;
  padding: 2rem;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  .right {
    display: flex;
    gap: 1rem;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const Priority = styled.div`
  font-size: 2rem;
  color: black;
  padding: 10px 0;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #0c0c0c;
  padding: 15px 0;
  height: 150px;
`;

export const Asignee = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  width: 300px;
  flex-wrap: wrap;
  div {
    color: #292929;
  }
`;

export const Status = styled.div`
  font-size: 1.2rem;
  color: black;
  padding: 10px 0;
  font-weight: bold;
  text-align: center;
`;
