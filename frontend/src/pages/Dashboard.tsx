
import React from 'react'
import styled from 'styled-components'
import DashBoardLeft from '../components/molecules/dashBoard/DashBoardLeft';

const Container = styled.div`
  height : 100vh;
  width : 100vw;
  background : #fffff9 ;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const MainContainer = styled.div`
  height : 832px;
  width : 1280px;
  display :flex;
`;

const LeftContainer = styled.div`
  height : 832px;
  width : 288px;
  background : #E1E8ED;
`;

const RightContainer = styled.div`
  height : 832px;
  width : 992px;
  background : #E1E8ED;
  display : flex;
  gap : 10px;
  box-sizing : border-box;
  padding : 8px 8px 8px 0;
`;

const InnerRightContainer = styled.div`
  width : 984px;
  height : 824px;
  diplay : flex;
  flex-direction : column;
`;

const NavigatingTopBar = styled.div`
  width : 984px;
  height : 48px;
  background : #F5F8FA;
  border : 2px solid #E1E8ED;
  border-radius : 16px 16px 0 0;
  box-sizing : border-box;
`;

const Navigator = styled.div`
  height : 24px;
  width : 115px;
  display : flex;
  gap: 16px;
  position : relative;
  top : 12px;
  left : 24px;
  align-items : center;
`;

const BackButton = styled.div`
  height : 24px;
  width : 24px;
`;

const Pipe = styled.div`
  width: 7px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;


const TextDiv = styled.div`
  height : 20px;
  width : 52px;
  display : flex;
  align-items : center;
`;

const Text = styled.p `
  width: 37px;
  height: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171A;
`;

const ContentContainer = styled.div`
  width : 984px;
  height : 776px;
  border-right: 2px solid #E1E8ED;
  border-bottom: 2px solid #E1E8ED;
  border-left: 2px solid #E1E8ED;
  display : flex;
  gap : 10px;
  padding : 32px 48px 0 48px;
  box-sizing : border-box;
  background: #F5F8FA;
`;

const ContentMainContainer = styled.div`
  height : 744px;
  width : 888px;
  box-sizing : border-box;
  display: flex;
  flex-direction : column;
  gap: 32px;
  // border-right: 2px solid #E1E8ED;
  // border-bottom: 2px solid #E1E8ED;
  // border-left: 2px solid #E1E8ED;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const HeadContainer = styled.div`
  width : 888px;
  height : 60px;
  border-bottom : 1px;
  padding-top : 4px;
  padding-bottom : 4px;
  box-sizing : border-box;
  display : flex;
  gap: 10px;
`;

const InnerHeadContainer = styled.div`
  height : 52px;
  width : 653px;
  display : flex;
  gap: 10px;
  align-items : flex-end
`;

const HeadIconContainer = styled.div`
  height : 40px;
  width : 40px;
`;

const HeadTextContainer = styled.div`
  height : 52px;
  width : 520px;
  display : flex;
  flex-direction : column;
  gap : 12px;
`;


const HeadTitle = styled.div`
  height : 24px;
  width : 64px;
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171A;

`;


const HeadDescription = styled.div`
  width: 520px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;

const BodyContainer = styled.div`
  height : 652px;
  width : 888px;
  display : flex;
  gap : 10px;
  justify-content : center;
`;

const InnerBodyContainer = styled.div`
  height : 545px;
  width : 316px;
  display : flex;
  flex-direction : column;
  gap: 12px;
  align-items : center;
`;

const InnerBodyIconContainer = styled.div`
  height : 48px;
  width : 48px;
`;

const BodyContentContainer = styled.div`
  height : 485px;
  width : 316px;
  display : flex;
  flex-direction : column;
  gap : 24px;
`;

const BodyTitle = styled.div`
  height : 44px;
  width : 316px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A
`;

const BodyDesciption = styled.div`
  width: 316px;
  height: 17px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786
`;

const BodyContent = styled.div`
  width: 316px;
  height: 376px;
  padding: 16px 0px 16px 0px;
  display : flex;
  justify-content : center;
  gap: 10px;
  border-radius: 8px ;
  opacity: 0px;
  box-sizing : border-box;
  border : 1px solid #AAB8C2;
  color : #FFFFFF;
`;

const StepContainer  = styled.div`
  width: 277px;
  height: 344px;
  display : flex;
  flex-direction : column;
  gap: 8px;
  color : black;
`;

const Step1 = styled.div`
  height : 24px;
  width : 253px;
  display : flex;
  gap: 8px;
  align-items : center;
`;



const Step1Text = styled.div`
  width : 221px;
  height : 14px;
  display : flex;
  gap : 10px;
  // font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A

`;

const VerticalLine = styled.div`
  height : 40px;
  width : 24px;
`;


const Step2 = styled.div`
  height : 24px;
  width : 204px;
  display : flex;
  gap: 8px;
  align-items : center;
`;

const Step2Text = styled.div`
  width : 172px;
  height : 14px;
  display : flex;
  gap : 10px;
  // font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A
`;

const Step3 = styled.div`
  height : 24px;
  width : 277px;
  display : flex;
  gap: 8px;
  align-items : center;
`;

const Step3Text = styled.div`
  width : 243px;
  height : 14px;
  display : flex;
  gap : 10px;
  // font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A
`;

const Step4 = styled.div`
  height : 24px;
  width : 105px;
  display : flex;
  gap: 8px;
  align-items : center;
`;

const Step4Text = styled.div`
  width : 77px;
  height : 14px;
  display : flex;
  gap : 10px;
  // font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A
`;


const Step5 = styled.div`
  height : 24px;
  width : 277px;
  display : flex;
  gap: 8px;
  align-items : center;
`;

const Step5Text = styled.div`
  width : 195px;
  height : 14px;
  display : flex;
  gap : 10px;
  // font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A
`;




const Dashboard = () => {

  const backButtonSVG = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.9996 11.2531H4.80711L8.78211 7.28557C8.92334 7.14434 9.00268 6.95279 9.00268 6.75307C9.00268 6.55334 8.92334 6.3618 8.78211 6.22057C8.64088 6.07934 8.44934 6 8.24961 6C8.04988 6 7.85834 6.07934 7.71711 6.22057L2.46711 11.4706C2.40657 11.5365 2.35831 11.6127 2.32461 11.6956C2.32041 11.7204 2.32041 11.7457 2.32461 11.7706C2.30416 11.8312 2.29156 11.8942 2.28711 11.9581V12.0031C2.28746 12.0827 2.30272 12.1616 2.33211 12.2356C2.36324 12.3198 2.4118 12.3964 2.47461 12.4606L7.72461 17.7106C7.79433 17.7809 7.87728 17.8367 7.96868 17.8747C8.06007 17.9128 8.1581 17.9324 8.25711 17.9324C8.35612 17.9324 8.45415 17.9128 8.54554 17.8747C8.63694 17.8367 8.71989 17.7809 8.78961 17.7106C8.85991 17.6408 8.9157 17.5579 8.95378 17.4665C8.99185 17.3751 9.01146 17.2771 9.01146 17.1781C9.01146 17.0791 8.99185 16.981 8.95378 16.8896C8.9157 16.7982 8.85991 16.7153 8.78961 16.6456L4.80711 12.7531H20.9996C21.1985 12.7531 21.3893 12.6741 21.5299 12.5334C21.6706 12.3927 21.7496 12.202 21.7496 12.0031C21.7496 11.8042 21.6706 11.6134 21.5299 11.4727C21.3893 11.3321 21.1985 11.2531 20.9996 11.2531Z" fill="#14171A"/>
  </svg>

  const headIconSVG = <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.4869 12.5524C28.0981 12.0585 28.5507 11.3675 28.7803 10.5775C29.01 9.78747 29.005 8.93877 28.7661 8.15204C28.5271 7.36531 28.0665 6.6806 27.4495 6.19528C26.8326 5.70995 26.0908 5.44872 25.3297 5.44872C24.5685 5.44872 23.8267 5.70995 23.2098 6.19528C22.5928 6.6806 22.1322 7.36531 21.8933 8.15204C21.6543 8.93877 21.6494 9.78747 21.879 10.5775C22.1086 11.3675 22.5612 12.0585 23.1724 12.5524L22.6979 12.7566C21.549 11.3567 20.0616 10.3369 18.4055 9.81361C19.3094 9.21035 20.0076 8.30223 20.3938 7.22738C20.7801 6.15253 20.8333 4.96976 20.5454 3.85894C20.2575 2.74813 19.6443 1.77007 18.7989 1.07351C17.9535 0.376945 16.9223 0 15.8621 0C14.8018 0 13.7706 0.376945 12.9252 1.07351C12.0799 1.77007 11.4666 2.74813 11.1787 3.85894C10.8908 4.96976 10.944 6.15253 11.3303 7.22738C11.7166 8.30223 12.4147 9.21035 13.3186 9.81361C11.7054 10.3222 10.2513 11.3027 9.11448 12.6485L8.84966 12.5284C9.45816 12.0327 9.90791 11.3412 10.1351 10.5517C10.3624 9.76219 10.3555 8.91487 10.1156 8.12986C9.8757 7.34484 9.41487 6.66195 8.79847 6.17801C8.18206 5.69407 7.44136 5.43364 6.68138 5.43364C5.9214 5.43364 5.1807 5.69407 4.56429 6.17801C3.94789 6.66195 3.48706 7.34484 3.24715 8.12986C3.00723 8.91487 3.0004 9.76219 3.22762 10.5517C3.45485 11.3412 3.9046 12.0327 4.5131 12.5284C3.1979 13.0205 2.05638 13.9469 1.24746 15.1784C0.438548 16.41 0.00249196 17.8854 0 19.3994C0 19.5587 0.0581279 19.7114 0.161596 19.8241C0.265065 19.9367 0.405398 20 0.551724 20H31.4483C31.5946 20 31.7349 19.9367 31.8384 19.8241C31.9419 19.7114 32 19.5587 32 19.3994C31.9929 17.8895 31.5548 16.4194 30.7462 15.1927C29.9376 13.9659 28.7986 13.0432 27.4869 12.5524ZM22.8083 9.42922C22.8083 8.88753 22.9558 8.35802 23.2323 7.90762C23.5087 7.45723 23.9016 7.10619 24.3614 6.8989C24.8211 6.69161 25.3269 6.63737 25.815 6.74305C26.303 6.84872 26.7513 7.10957 27.1031 7.4926C27.455 7.87562 27.6946 8.36363 27.7917 8.8949C27.8887 9.42618 27.8389 9.97686 27.6485 10.4773C27.4581 10.9778 27.1356 11.4055 26.7219 11.7064C26.3081 12.0074 25.8217 12.168 25.3241 12.168C24.9938 12.168 24.6666 12.0972 24.3614 11.9595C24.0561 11.8219 23.7788 11.6202 23.5452 11.3658C23.3115 11.1115 23.1262 10.8096 22.9998 10.4773C22.8734 10.145 22.8083 9.78888 22.8083 9.42922ZM25.3241 13.3692C26.7053 13.3631 28.0383 13.9212 29.0599 14.9332C30.0814 15.9451 30.7171 17.3374 30.8414 18.8348H25.0152C24.9179 17.012 24.3604 15.2537 23.4041 13.7536C24.0166 13.4954 24.6673 13.361 25.3241 13.3572V13.3692ZM12.0828 5.34505C12.0828 4.5349 12.3034 3.74295 12.7169 3.06933C13.1304 2.39572 13.718 1.8707 14.4056 1.56067C15.0931 1.25064 15.8497 1.16953 16.5796 1.32758C17.3095 1.48563 17.98 1.87575 18.5062 2.44861C19.0324 3.02147 19.3908 3.75134 19.536 4.54593C19.6812 5.34051 19.6066 6.16411 19.3219 6.91259C19.0371 7.66107 18.5548 8.3008 17.936 8.7509C17.3172 9.20099 16.5897 9.44123 15.8455 9.44123C15.3514 9.43965 14.8624 9.33214 14.4064 9.12483C13.9504 8.91752 13.5365 8.61448 13.1881 8.233C12.8397 7.85152 12.5637 7.39907 12.376 6.90149C12.1882 6.40392 12.0923 5.87096 12.0938 5.33304L12.0828 5.34505ZM6.67586 6.69042C7.17392 6.68804 7.66141 6.84665 8.07659 7.14614C8.49177 7.44563 8.81596 7.87254 9.00807 8.37278C9.20018 8.87301 9.25158 9.42407 9.15576 9.95613C9.05993 10.4882 8.82119 10.9773 8.46979 11.3615C8.11838 11.7458 7.67012 12.0078 7.18179 12.1145C6.69346 12.2211 6.18704 12.1676 5.72668 11.9607C5.26633 11.7537 4.87275 11.4027 4.59581 10.952C4.31887 10.5014 4.17104 9.97141 4.17103 9.42922C4.17103 8.70492 4.43458 8.01011 4.90401 7.49683C5.37344 6.98355 6.01053 6.6936 6.67586 6.69042ZM6.67586 13.3572C7.25208 13.3521 7.82546 13.4454 8.37517 13.6335C7.37993 15.1532 6.79859 16.9476 6.69793 18.8108H1.18069C1.30725 17.3196 1.94095 15.9337 2.95753 14.9248C3.97412 13.9159 5.30024 13.3569 6.67586 13.3572ZM12.8 18.8228H7.80138C7.93263 16.5959 8.83781 14.5068 10.333 12.9803C11.8282 11.4537 13.8011 10.6041 15.851 10.6041C17.9009 10.6041 19.8739 11.4537 21.3691 12.9803C22.8643 14.5068 23.7694 16.5959 23.9007 18.8228H12.8Z" fill="#657786"/>
  </svg>

  const bodyIconSVG = <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.3586 18.8286C35.1226 18.0878 35.6883 17.0512 35.9754 15.8662C36.2624 14.6812 36.2562 13.4081 35.9576 12.2281C35.6589 11.048 35.0831 10.0209 34.3119 9.29291C33.5407 8.56493 32.6135 8.17307 31.6621 8.17307C30.7106 8.17307 29.7834 8.56493 29.0122 9.29291C28.2411 10.0209 27.6652 11.048 27.3666 12.2281C27.0679 13.4081 27.0617 14.6812 27.3488 15.8662C27.6358 17.0512 28.2015 18.0878 28.9655 18.8286L28.3724 19.1349C26.9363 17.0351 25.077 15.5053 23.0069 14.7204C24.1367 13.8155 25.0095 12.4534 25.4923 10.8411C25.9751 9.2288 26.0417 7.45463 25.6818 5.78842C25.3219 4.1222 24.5553 2.65511 23.4986 1.61026C22.4419 0.565418 21.1529 0 19.8276 0C18.5023 0 17.2133 0.565418 16.1566 1.61026C15.0998 2.65511 14.3332 4.1222 13.9734 5.78842C13.6135 7.45463 13.6801 9.2288 14.1629 10.8411C14.6457 12.4534 15.5184 13.8155 16.6483 14.7204C14.6318 15.4832 12.8141 16.9541 11.3931 18.9728L11.0621 18.7926C11.8227 18.0491 12.3849 17.0117 12.6689 15.8275C12.9529 14.6433 12.9444 13.3723 12.6445 12.1948C12.3446 11.0173 11.7686 9.99292 10.9981 9.26702C10.2276 8.54111 9.3017 8.15046 8.35172 8.15046C7.40175 8.15046 6.47587 8.54111 5.70537 9.26702C4.93486 9.99292 4.35883 11.0173 4.05893 12.1948C3.75904 13.3723 3.7505 14.6433 4.03453 15.8275C4.31856 17.0117 4.88075 18.0491 5.64138 18.7926C3.99737 19.5308 2.57047 20.9203 1.55933 22.7676C0.548185 24.6149 0.00311495 26.8281 0 29.0991C0 29.338 0.0726599 29.5672 0.201995 29.7361C0.331331 29.9051 0.506747 30 0.689655 30H39.3103C39.4933 30 39.6687 29.9051 39.798 29.7361C39.9273 29.5672 40 29.338 40 29.0991C39.9912 26.8343 39.4434 24.6291 38.4327 22.789C37.4219 20.9489 35.9982 19.5648 34.3586 18.8286ZM28.5103 14.1438C28.5103 13.3313 28.6948 12.537 29.0403 11.8614C29.3859 11.1858 29.8771 10.6593 30.4517 10.3483C31.0263 10.0374 31.6587 9.95605 32.2687 10.1146C32.8787 10.2731 33.4391 10.6644 33.8789 11.2389C34.3187 11.8134 34.6182 12.5454 34.7396 13.3424C34.8609 14.1393 34.7986 14.9653 34.5606 15.716C34.3226 16.4666 33.9195 17.1082 33.4023 17.5597C32.8852 18.0111 32.2772 18.252 31.6552 18.252C31.2422 18.252 30.8332 18.1458 30.4517 17.9393C30.0702 17.7328 29.7235 17.4302 29.4314 17.0488C29.1394 16.6673 28.9078 16.2144 28.7497 15.716C28.5917 15.2175 28.5103 14.6833 28.5103 14.1438ZM31.6552 20.0539C33.3816 20.0447 35.0479 20.8818 36.3248 22.3997C37.6017 23.9177 38.3964 26.006 38.5517 28.2522H31.269C31.1473 25.518 30.4505 22.8806 29.2552 20.6304C30.0208 20.2431 30.8341 20.0416 31.6552 20.0358V20.0539ZM15.1034 8.01757C15.1034 6.80235 15.3793 5.61442 15.8961 4.604C16.4129 3.59358 17.1475 2.80606 18.007 2.34101C18.8664 1.87597 19.8121 1.75429 20.7245 1.99137C21.6369 2.22844 22.4749 2.81363 23.1327 3.67292C23.7905 4.53221 24.2385 5.62702 24.42 6.81889C24.6015 8.01076 24.5083 9.24617 24.1523 10.3689C23.7963 11.4916 23.1935 12.4512 22.42 13.1263C21.6465 13.8015 20.7372 14.1618 19.8069 14.1618C19.1892 14.1595 18.578 13.9982 18.008 13.6872C17.4381 13.3763 16.9206 12.9217 16.4851 12.3495C16.0496 11.7773 15.7047 11.0986 15.47 10.3522C15.2353 9.60588 15.1154 8.80643 15.1172 7.99956L15.1034 8.01757ZM8.34483 10.0356C8.9674 10.0321 9.57677 10.27 10.0957 10.7192C10.6147 11.1685 11.0199 11.8088 11.2601 12.5592C11.5002 13.3095 11.5645 14.1361 11.4447 14.9342C11.3249 15.7323 11.0265 16.466 10.5872 17.0423C10.148 17.6187 9.58765 18.0117 8.97724 18.1717C8.36683 18.3317 7.7338 18.2514 7.15836 17.941C6.58291 17.6306 6.09094 17.104 5.74477 16.4281C5.39859 15.7521 5.2138 14.9571 5.21379 14.1438C5.21379 13.0574 5.54322 12.0152 6.13001 11.2452C6.7168 10.4753 7.51316 10.0404 8.34483 10.0356ZM8.34483 20.0358C9.0651 20.0282 9.78183 20.1681 10.469 20.4503C9.22491 22.7298 8.49824 25.4215 8.37241 28.2162H1.47586C1.63406 25.9794 2.42619 23.9006 3.69692 22.3872C4.96764 20.8739 6.6253 20.0353 8.34483 20.0358ZM16 28.2342H9.75172C9.91579 24.8938 11.0473 21.7603 12.9162 19.4704C14.7852 17.1805 17.2514 15.9061 19.8138 15.9061C22.3762 15.9061 24.8424 17.1805 26.7114 19.4704C28.5803 21.7603 29.7118 24.8938 29.8759 28.2342H16Z" fill="#AAB8C2"/>
  </svg>

  const tickSVG = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" width="24" height="24" rx="12" fill="#E4F4FF"/>
  <path d="M10.0777 17C9.93725 17.0009 9.80203 16.945 9.7009 16.8445L5.66374 12.801C5.61285 12.7499 5.57219 12.689 5.54411 12.6217C5.51602 12.5545 5.50105 12.4822 5.50005 12.4089C5.49905 12.3357 5.51204 12.263 5.53828 12.1949C5.56452 12.1268 5.60349 12.0648 5.65298 12.0123C5.70246 11.9598 5.76148 11.9178 5.82667 11.8888C5.89187 11.8598 5.96195 11.8444 6.03293 11.8434C6.10391 11.8423 6.17439 11.8557 6.24035 11.8828C6.30631 11.9099 6.36645 11.9501 6.41735 12.0012L10.0777 15.667L18.5827 7.15785C18.6854 7.05473 18.8237 6.99797 18.9671 7.00006C19.1104 7.00214 19.2471 7.06289 19.347 7.16896C19.447 7.27502 19.502 7.4177 19.4999 7.56561C19.4979 7.71352 19.439 7.85454 19.3363 7.95766L10.4545 16.8445C10.3534 16.945 10.2182 17.0009 10.0777 17Z" fill="#4C9EEB"/>
  </svg>

  const verticalLineSVG = <svg width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="13" y1="2.18558e-08" x2="13" y2="40" stroke="#4C9EEB"/>
  </svg>

  const number2SVG = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" width="24" height="24" rx="12" fill="#4C9EEB"/>
  <path d="M14.909 15.817C15.0443 15.817 15.1517 15.8567 15.231 15.936C15.3103 16.0153 15.35 16.118 15.35 16.244V17H8.658V16.573C8.658 16.4843 8.67667 16.3933 8.714 16.3C8.75133 16.2067 8.80967 16.1203 8.889 16.041L12.102 12.814C12.368 12.5433 12.6107 12.2843 12.83 12.037C13.0493 11.785 13.236 11.533 13.39 11.281C13.544 11.029 13.663 10.7747 13.747 10.518C13.831 10.2567 13.873 9.979 13.873 9.685C13.873 9.391 13.8263 9.13433 13.733 8.915C13.6397 8.691 13.5113 8.50667 13.348 8.362C13.1893 8.21733 13.0003 8.11 12.781 8.04C12.5617 7.96533 12.326 7.928 12.074 7.928C11.8173 7.928 11.5817 7.96533 11.367 8.04C11.1523 8.11467 10.961 8.21967 10.793 8.355C10.6297 8.48567 10.492 8.642 10.38 8.824C10.268 9.006 10.1887 9.20667 10.142 9.426C10.086 9.58933 10.009 9.699 9.911 9.755C9.81767 9.80633 9.68467 9.82033 9.512 9.797L8.861 9.685C8.92633 9.22767 9.05233 8.824 9.239 8.474C9.43033 8.11933 9.66833 7.823 9.953 7.585C10.2423 7.347 10.5713 7.16733 10.94 7.046C11.3087 6.92 11.7077 6.857 12.137 6.857C12.5617 6.857 12.9583 6.92 13.327 7.046C13.6957 7.172 14.0153 7.35633 14.286 7.599C14.5567 7.837 14.769 8.12867 14.923 8.474C15.077 8.81933 15.154 9.21133 15.154 9.65C15.154 10.0233 15.098 10.371 14.986 10.693C14.874 11.0103 14.7223 11.3137 14.531 11.603C14.3397 11.8923 14.118 12.1747 13.866 12.45C13.6187 12.7253 13.355 13.003 13.075 13.283L10.429 15.985C10.6157 15.9337 10.8047 15.894 10.996 15.866C11.1873 15.8333 11.3717 15.817 11.549 15.817H14.909Z" fill="white"/>
  </svg>
  
  const number3SVG = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" width="24" height="24" rx="12" fill="#E1E8ED"/>
  <path d="M8.91 9.685C8.97533 9.22767 9.10133 8.824 9.288 8.474C9.47467 8.11933 9.71033 7.823 9.995 7.585C10.2843 7.347 10.6133 7.16733 10.982 7.046C11.3553 6.92 11.7567 6.857 12.186 6.857C12.6107 6.857 13.0027 6.91767 13.362 7.039C13.7213 7.16033 14.0293 7.333 14.286 7.557C14.5473 7.781 14.7503 8.05167 14.895 8.369C15.0397 8.68633 15.112 9.03867 15.112 9.426C15.112 9.74333 15.07 10.028 14.986 10.28C14.9067 10.5273 14.79 10.7443 14.636 10.931C14.4867 11.1177 14.3047 11.2763 14.09 11.407C13.8753 11.5377 13.635 11.645 13.369 11.729C14.0223 11.897 14.5123 12.1863 14.839 12.597C15.1703 13.003 15.336 13.5117 15.336 14.123C15.336 14.585 15.2473 15.0003 15.07 15.369C14.8973 15.7377 14.6593 16.0527 14.356 16.314C14.0527 16.5707 13.698 16.769 13.292 16.909C12.8907 17.0443 12.459 17.112 11.997 17.112C11.465 17.112 11.01 17.0467 10.632 16.916C10.254 16.7807 9.93433 16.5963 9.673 16.363C9.41167 16.1297 9.197 15.8543 9.029 15.537C8.861 15.215 8.71867 14.8673 8.602 14.494L9.141 14.27C9.281 14.2093 9.41633 14.193 9.547 14.221C9.68233 14.249 9.78033 14.326 9.841 14.452C9.90167 14.5827 9.97633 14.739 10.065 14.921C10.1583 15.103 10.2843 15.278 10.443 15.446C10.6017 15.614 10.8023 15.7563 11.045 15.873C11.2923 15.9897 11.605 16.048 11.983 16.048C12.333 16.048 12.6387 15.992 12.9 15.88C13.166 15.7633 13.3853 15.614 13.558 15.432C13.7353 15.25 13.8683 15.047 13.957 14.823C14.0457 14.599 14.09 14.3773 14.09 14.158C14.09 13.8873 14.055 13.64 13.985 13.416C13.915 13.192 13.7843 12.9983 13.593 12.835C13.4017 12.6717 13.138 12.5433 12.802 12.45C12.4707 12.3567 12.0437 12.31 11.521 12.31V11.407C11.9503 11.4023 12.3143 11.3557 12.613 11.267C12.9163 11.1783 13.1613 11.057 13.348 10.903C13.5393 10.749 13.677 10.5647 13.761 10.35C13.8497 10.1353 13.894 9.89733 13.894 9.636C13.894 9.34667 13.8473 9.09467 13.754 8.88C13.6653 8.66533 13.5417 8.488 13.383 8.348C13.2243 8.208 13.0353 8.103 12.816 8.033C12.6013 7.963 12.368 7.928 12.116 7.928C11.864 7.928 11.6283 7.96533 11.409 8.04C11.1943 8.11467 11.003 8.21967 10.835 8.355C10.6717 8.48567 10.534 8.642 10.422 8.824C10.31 9.006 10.2307 9.20667 10.184 9.426C10.1233 9.58933 10.0463 9.699 9.953 9.755C9.86433 9.80633 9.73367 9.82033 9.561 9.797L8.91 9.685Z" fill="#657786"/>
  </svg>

  const number4SVG = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" width="24" height="24" rx="12" fill="#E1E8ED"/>
  <path d="M13.11 13.381V9.244C13.11 9.12267 13.1147 8.98967 13.124 8.845C13.1333 8.70033 13.1473 8.55333 13.166 8.404L9.512 13.381H13.11ZM15.721 13.381V14.095C15.721 14.1697 15.6977 14.2327 15.651 14.284C15.609 14.3353 15.5413 14.361 15.448 14.361H14.202V17H13.11V14.361H8.658C8.56467 14.361 8.483 14.3353 8.413 14.284C8.34767 14.228 8.30567 14.1603 8.287 14.081L8.161 13.444L13.04 6.969H14.202V13.381H15.721Z" fill="#657786"/>
  </svg>

  const number5SVG = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" width="24" height="24" rx="12" fill="#E1E8ED"/>
  <path d="M10.534 10.756C11.0567 10.644 11.5373 10.588 11.976 10.588C12.4987 10.588 12.9607 10.665 13.362 10.819C13.7633 10.973 14.097 11.1853 14.363 11.456C14.6337 11.7267 14.8367 12.0463 14.972 12.415C15.112 12.7837 15.182 13.185 15.182 13.619C15.182 14.151 15.0887 14.6317 14.902 15.061C14.72 15.4903 14.4657 15.859 14.139 16.167C13.817 16.4703 13.4367 16.7037 12.998 16.867C12.5593 17.0303 12.0857 17.112 11.577 17.112C11.283 17.112 11.0007 17.0817 10.73 17.021C10.4593 16.965 10.205 16.888 9.967 16.79C9.73367 16.692 9.51667 16.58 9.316 16.454C9.11533 16.328 8.938 16.195 8.784 16.055L9.169 15.523C9.253 15.4017 9.36267 15.341 9.498 15.341C9.59133 15.341 9.69633 15.3783 9.813 15.453C9.92967 15.523 10.072 15.6023 10.24 15.691C10.408 15.7797 10.604 15.8613 10.828 15.936C11.0567 16.006 11.3273 16.041 11.64 16.041C11.99 16.041 12.305 15.985 12.585 15.873C12.865 15.761 13.1053 15.6023 13.306 15.397C13.5067 15.187 13.6607 14.9373 13.768 14.648C13.8753 14.3587 13.929 14.0343 13.929 13.675C13.929 13.3623 13.8823 13.08 13.789 12.828C13.7003 12.576 13.5627 12.3613 13.376 12.184C13.194 12.0067 12.9653 11.869 12.69 11.771C12.4147 11.673 12.0927 11.624 11.724 11.624C11.472 11.624 11.2083 11.645 10.933 11.687C10.6623 11.729 10.3847 11.7967 10.1 11.89L9.316 11.659L10.121 6.969H14.874V7.515C14.874 7.69233 14.818 7.83933 14.706 7.956C14.5987 8.068 14.412 8.124 14.146 8.124H10.996L10.534 10.756Z" fill="#657786"/>
  </svg>
  

  return (
    <Container>
      <MainContainer>
        <LeftContainer>
          <DashBoardLeft/>
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer>
            <NavigatingTopBar>
              <Navigator>
                <BackButton>{backButtonSVG}</BackButton>
                <Pipe>|</Pipe>
                <TextDiv>
                  <Text>Team</Text>
                </TextDiv>
              </Navigator>
            </NavigatingTopBar>
            <ContentContainer>
              <ContentMainContainer>
                <HeadContainer>
                  <InnerHeadContainer>
                    <HeadIconContainer>{headIconSVG}</HeadIconContainer>
                    <HeadTextContainer>
                        <HeadTitle>Team</HeadTitle>
                        <HeadDescription>Manage and organize your team members for efficient collaboration.</HeadDescription>
                    </HeadTextContainer>
                  </InnerHeadContainer>
                </HeadContainer>
                <BodyContainer>
                  <InnerBodyContainer>
                    <InnerBodyIconContainer>{bodyIconSVG}</InnerBodyIconContainer>
                    <BodyContentContainer>
                      <BodyTitle>You have not added any member in your Team.</BodyTitle>
                      <BodyDesciption>When you do, It’ll show up here.</BodyDesciption>
                      <BodyContent>
                        <StepContainer>
                            <Step1>
                              {tickSVG}
                              <Step1Text>Download FastGST biz mobie App</Step1Text>
                            </Step1>
                            <VerticalLine>{verticalLineSVG}</VerticalLine>
                            <Step2>
                              {number2SVG}
                              <Step2Text>Open App and go to Team</Step2Text>
                            </Step2>
                            <VerticalLine>{verticalLineSVG}</VerticalLine>
                            <Step3>
                              {number3SVG}
                              <Step3Text>Select member from your contact list</Step3Text>
                            </Step3>
                            <VerticalLine>{verticalLineSVG}</VerticalLine>
                            <Step4>
                              {number4SVG}
                              <Step4Text>Send invite</Step4Text>
                            </Step4>
                            <VerticalLine>{verticalLineSVG}</VerticalLine>
                            <Step5>
                              {number5SVG}
                              <Step5Text>Wait for the invite acceptance</Step5Text>
                            </Step5>
                        </StepContainer>
                      </BodyContent>
                    </BodyContentContainer>
                  </InnerBodyContainer>
                </BodyContainer>
              </ContentMainContainer>
            </ContentContainer>
          </InnerRightContainer>
        </RightContainer>
      </MainContainer>
    </Container>
  )
}

export default Dashboard