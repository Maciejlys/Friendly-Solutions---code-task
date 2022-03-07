import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    width: 80vw;
    max-width: 800px;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 30px;
    padding: 6px 16px;
    position: relative;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  input:focus {
    outline: none;
  }
`;
