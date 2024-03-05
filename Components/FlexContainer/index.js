import styled from "styled-components";

const StyledDiv = styled.div`
  flex-direction: ${(props) => (props.$direction ? "column" : "row")};
  display: flex;
  //flex-wrap: wrap;
  justify-content: space-around;
`;

export default function FlexDiv({ children, $direction }) {
  return <StyledDiv $direction={$direction}>{children}</StyledDiv>;
}
