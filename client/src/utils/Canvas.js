import device from "./device";
import styled from "styled-components";

const Canvas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.mobileM} {
    width: 100vw;
  }
  @media ${device.mobileL} {
    width: 100vw;
  }
  @media ${device.tablet} {
    width: 500px;
    max-height: 890px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5vh;
  }
`;

export default Canvas;
