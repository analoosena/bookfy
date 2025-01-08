import styled from "styled-components";

export const HeaderColor = styled.div`
  margin: 0 auto;
  background-color: #d6d6d6;
`;
export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-top: 12px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
export const Logo = styled.img`
  max-width: 120px;
  margin: 8px;
  background-color: transparent;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 13px;
  background-color: transparent;
  &:hover {
    font-weight: 700;
  }
`;
export const LogInButton = styled.button`
  background-color: #f6d133;
  border: 1px solid #b88318;
  border-radius: 3px;
  text-align: center;
  padding: 5px;
  font-weight: 600;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    background-color: #f6d133;
    gap: 2px;
  }
  :hover {
    padding: 2px;
    color: #b88318;
  }
`;
