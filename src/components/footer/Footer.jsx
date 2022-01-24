import styled from '@emotion/styled';
import React from 'react';

const FooterDiv = styled.div`
    background-image: linear-gradient(0.55turn, #170126, #27063e, #170126);
    height: 300px;
    position: relative;
    width: 100%;
    border-top: 2px solid #49187a;

    &:before {
        background-image: url("./img/footer-bg.png");
        background-size: stretch;
        background-repeat: no-repeat;
        position: absolute;
        content: '';
        display: block;
        height: 18px;
        top: -18px;
        width: 100%;

    }
    `
const Footer = () => {
    return (
        <FooterDiv>
            <div className="container-fluid" style={{ width: "80%",color:"white" }}>
                <div className="row">
                    <div className="col-lg-4">
                        <h4> <span> LAUNCHPAD & </span> IGO</h4>
                        <p></p>
                    </div>
                    <div className="col-lg-5 row">
                        <div className="col-lg-4">
                            <h4> ABOUT </h4>
                            <ul>
                                <li>main website</li>
                                <li>privacy policy</li>
                                <li>terms of services</li>
                                <li>legal overview</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h4> LINKS </h4>
                            <ul>
                                <li>main website</li>
                                <li>privacy policy</li>
                                <li>terms of services</li>
                                <li>legal overview</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h4> CONTACT </h4>
                            <p>info@oasismetaverse.studio</p>
                            <p>info@knightwar.io</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4> JOIN OUR COMMUNITY </h4>
                    </div>
                </div>
            </div>
        </FooterDiv>

    )
}

export default Footer;