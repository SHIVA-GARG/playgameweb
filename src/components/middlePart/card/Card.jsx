import React from 'react';
import './Card.css'

function card() {
    return (
        <div className="card">
            <div className="upper">
                <div className="left">
                    <img src='data:image/jpeg;base64,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' alt="playimg" />
                    <button>2ND PHASE</button>
                </div>
                <div className="right">
                    <div className="rightupper">
                    <h6>RARE NFT</h6>
                    <div className="dimensions">
                        1BUSD*6.25 SMCH
                    </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, ducimus incidunt nulla harum assumenda, reiciendis aut totam facere quae deserunt, quas blanditiis beatae non consectetur a fuga sequi explicabo alias.
                    </p>
                </div>
            </div>
        </div>
    );
}

// .box
//   .box-inner
//     %h1 Lorem Ipsum
//     %p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laudantium odit, eligendi architecto eveniet labore error minus, temporibus doloremque, amet itaque. Voluptatum rerum dolorem nesciunt totam. Saepe reprehenderit dignissimos error!


// @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

// $color-alpha: #b78846;

// * {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   box-sizing: border-box;
//   &:before, &:after {
//     box-sizing: border-box;
//   }
// }

// html, body {
//   height: 100%;
//   background: radial-gradient(#003, #000);
//   overflow: hidden;
//   color: #fff;
//   font-family: 'Open Sans';
//   font-size: 18px;
// }

// h1 {
//   font-weight: 700;
//   margin-bottom: 0.5em;
// }

// .box {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate3d(-50%, -50%, 0);
//   background-color: rgba(#000, 0.5);
//   width: 100%;
//   max-width: 600px;
//   padding: 5px;
//   border: 2px solid $color-alpha;
//   &:before, &:after {
//     content: "•";
//     position: absolute;
//     width: 14px;
//     height: 14px;
//     font-size: 14px;
//     color: $color-alpha;
//     border: 2px solid $color-alpha;
//     line-height: 12px;
//     top: 5px;
//     text-align: center;
//   }
//   &:before {
//     left: 5px;
//   }
//   &:after {
//     right: 5px;
//   }
//   .box-inner {
//     position: relative;
//     border: 2px solid $color-alpha;
//     padding: 40px;
//     &:before, &:after {
//       content: "•";
//       position: absolute;
//       width: 14px;
//       height: 14px;
//       font-size: 14px;
//       color: $color-alpha;
//       border: 2px solid $color-alpha;
//       line-height: 12px;
//       bottom: -2px;
//       text-align: center;
//     }
//     &:before {
//       left: -2px;
//     }
//     &:after {
//       right: -2px;
//     }
//   }
// }


export default card;
