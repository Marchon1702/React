import styled from "styled-components";

const MainFrame = () => {
  const MainFrameStyles = styled.section`
    width: 300px;
    padding: 12px;
    background-color: #ffff;
    border-radius: 1rem;

    img {
      width: 100%;
      border-radius: 1rem;
    }

    h4 {
      text-align: center;
      font-weight: 800;
      margin: 12px 0;
    }

    span {
      display: block;
      margin: auto;
      color: #000000b1;
      text-align: center;
    }
  `;

  return (
    <MainFrameStyles>
      <img src="/images/image-qr-code.png" alt="qr code" />
      <h4>Improve your front-end skills by building projects</h4>
      <span>
        Scan the QR Code to visit FrontEnd Mentor and taking your coding skills
        to the next level.
      </span>
    </MainFrameStyles>
  );
};

export default MainFrame;
