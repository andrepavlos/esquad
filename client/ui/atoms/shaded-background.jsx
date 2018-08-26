import styled from "styled-components";

const ShadedBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(50, 50, 50, 0.9);
`;

export { ShadedBackground };
