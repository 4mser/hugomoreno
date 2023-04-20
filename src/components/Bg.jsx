import styled from "styled-components";

const Bg = ({ tema }) => {
  return <Fondo tema={tema}></Fondo>;
};

export default Bg;

const Fondo = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background: ${(props) =>
    props.tema === "light" ? "var(--color2)" : "var(--color1)"};
  transition: 0.3s;
`;
