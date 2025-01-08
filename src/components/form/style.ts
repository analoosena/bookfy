import styled from "styled-components";

export const FormsSection = styled.section`
  width: 80%;
  background-color: #d6d6d6;
  padding-bottom: 25px;
  h3 {
    text-align: center;
    padding-bottom: 12px;
    padding-top: 12px;
    color: #b88318;
    border-bottom: 1px solid #000;
  }
`;
export const ContainerForm = styled.div`
  margin-top: 25px;
  width: 80%;
  border-radius: 5px;
  background-color: #fff;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 15px;
  align-items: flex-start;
  width: 100%;

  input {
    width: 90%;
    border: none;
    border-radius: 3px;
    padding: 2px;
    background-color: #d9d9d9;
    &:focus {
      border: 2px solid #b88318;
      outline: none;
    }
  }
  div {
    display: flex;
    align-items: center;
    width: 90%;
    margin-top: 12px;
    margin-bottom: 16px;
    gap: 5px;
    div {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      label {
        margin-left: 0;
      }
      select {
        margin-left: 0;
        width: 80%;
        border: none;
        border-radius: 3px;
        background-color: #d9d9d9;
        &:focus {
      border: 2px solid #b88318;
      outline: none;
    }
      }
    }
  }
`;
export const CadastrarButton = styled.button`
  cursor: pointer;
  background-color: #f6d133;
  border: 2px solid #b88318;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  padding: 4px;
  &:hover {
    background-color: #b88318;
    border: 1px solid #fff;
    color: #fff;
  }
`;
export const LabelText = styled.label`
  display: block;
  margin-bottom: 1px;
  width: auto;
  margin-left: 25px;
`;
