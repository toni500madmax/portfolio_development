import styled from "styled-components";

export const ContainFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UL = styled.ul`
  margin-top: 6px;
  display: flex;
`;

export const LI = styled.li`
  margin: 0 26px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  z-index: 2;

  &:hover {
    color: grey;
  }
`;
