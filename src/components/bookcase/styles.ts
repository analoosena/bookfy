import styled from "styled-components";

export const BookcaseSection = styled.section`
  background-color: #d9d9d9;
  width: 80%;
  h3 {
    text-align: center;
    padding-bottom: 12px;
    padding-top: 12px;
    color: #b88318;
    border-bottom: 1px solid #000;
  }
  padding-bottom: 25px;
  padding-top: 25px;
`;
export const ContainerBookcase = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 30px;
  width: 90%;
`;
export const ContainerItem = styled.div`
  background-color: #fff;
  width: 90%;
  text-align: center;
  p{
    font-style: italic;
    font-size: 12px;
    padding-bottom: 16px;
  }
  h4{
    padding-bottom: 2%;
  }
  h5{
    color: #c6c6c6;
    padding-bottom: 16px;
  }
`;
