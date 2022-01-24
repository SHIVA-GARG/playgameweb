import styled from "@emotion/styled";
import React from "react";
import "./Footer.css";

const FooterDiv = styled.div`
  background-image: linear-gradient(0.55turn, #170126, #27063e, #170126);
  position: relative;
  width: 100%;
  border-top: 4px solid #49187a;

  & .container-fluid {
      padding-left: 5%;
  }

  & h5 {
    color: #fff;
    font-family: CasanovaScotia;
    margin-bottom: 1rem;
  }

  & h6 {
    color: #fff;
    font-family: SpaceQuest;
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    padding: 0;
    color: #867e99;
    font-family: GammaOrionis;
    font-size: 12px;
    font-width: bold;
    font-stretch: expanded;
  }

  & p{
    color: #867e99;
    font-size: 11px;
    font-family: GammaOrionis;
    line-height: 1.5;
  }

  & .text{
      padding-right: 3rem;
  }

  & img{
      margin-right: 1rem;
      width: 32px;
  }

  & span{
    color: #e6b659
  }

  &:before {
    background-image: url("./img/footer-bg.png");
    background-position: bottom;
    background-size: cover;
    position: absolute;
    content: "";
    display: block;
    height: 18px;
    top: -17px;
    width: 100%;
  }

  & hr{
      height: 2px;
      background-color: #36125a;
  }
  & .last p{
      font-family: sans-serif !important;
      font-size: 12px;
      font-weight: 800;
      margin: 0;
  }

  @media (max-width: 400px) {
      & .container-fluid {
            padding: 0 1%;
      }

      & ul{
          font-size: 10px;
      }

      & p{
            font-size: 10px;
      }

      & .col-12{
          margin-bottom: 1rem;
      }
  }
`;
const Footer = () => {
  return (
    <FooterDiv>
      <div className="container-fluid" style={{ width: "90%" }}>
        <div className="row mt-5">
          <div className="col-12 col-lg-4">
            <h5>
              {" "}
              <span> LAUNCHPAD & </span> IGO
            </h5>
            <p className="text">
              cras laculis euismod nisi sit amet congue. pellentesque sodales
              metus tempus, posuere diam a, pretium purus. Suspendisse euismod
              bibendum ipsum vitae blandit. mauris tristique lectus ex, vitae
              congue lacus commodo nec. nullam rhoncus maximus odio, malesuada
              maximus ex auctor sed. vitae congue lacus e conque lacus e congue
              lacus commodo nec. nullam rhoncus maximus odio, malesuada maximus
              ex auctor sed.cras laculis euismod nisi sit amet congue.
              pellentesque sodales metus tempus, posuere diam a, pretium purus.
              Suspendisse euismod bibendum ipsum vitae blandit.
            </p>
          </div>
          <div className="col-12 col-lg-5 row">
            <div className="col-4 col-lg-4">
              <h6> ABOUT </h6>
              <ul>
                <li>main website</li>
                <li>privacy policy</li>
                <li>terms of services</li>
                <li>legal overview</li>
              </ul>
            </div>
            <div className="col-4 col-lg-4">
              <h6> LINKS </h6>
              <ul>
                <li>main website</li>
                <li>privacy policy</li>
                <li>terms of services</li>
                <li>legal overview</li>
              </ul>
            </div>
            <div className="col-4 col-lg-4">
              <h6> CONTACT </h6>
              <ul>
                <li>info@oasismetaverse.studio</li>
                <li>info@knightwar.io</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <h6> JOIN OUR COMMUNITY </h6>
            <img src="./img/github-logo.png" alt="github"></img>
            <img src="./img/discord-logo.png" alt="discord"></img>
            <img src="./img/twitter-logo.png" alt="twitter"></img>
            <img src="./img/instagram-logo.png" alt="instagram"></img>

          </div>
        </div>
      </div>
      <div>
          <br />
          <hr/>
          <br />
      </div>
      <div className="container-fluid text-center last" style={{ paddingBottom: "52px"}}>
        <p> <span>LAUNCHPAD & IGO </span>  is a registered trademark of LAUNCHPAD & IGO Inc. All Rights Reserved. </p>
        <p>All logos are registered trademarks of their respective owners. All contents of this document, unless otherwise credited, are copyright © <span>2021 LAUNCHPAD & IGO Inc. </span></p>
      </div>

    </FooterDiv>
  );
};

export default Footer;
