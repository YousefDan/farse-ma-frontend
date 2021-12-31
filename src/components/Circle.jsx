import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 999;
    opacity: 0.2;
   margin:auto;
`;

const Circle = (props) => {
  return <Container style={{ ...props }}></Container>;
};

export default Circle;
