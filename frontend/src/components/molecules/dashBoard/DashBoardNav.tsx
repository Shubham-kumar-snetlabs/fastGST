import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavContainer = styled.div<{ isActive: boolean }>`
  width: 264px;
  height: 48px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background-color: ${(props) => (props.isActive ? '#F5F8FA' : 'transparent')};
  color: ${(props) => (props.isActive ? '#1DA1F2' : '#14171A')};
  cursor: pointer;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items : center;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
`;

const AdditionalIcon = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: inherit;
`;

interface NavItem {
  id: number;
  text: string;
  icon: JSX.Element;
  additionalIcon?: JSX.Element; // Optional property for the additional icon
}

const TeamSVG = <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.91 11.2972C25.4639 10.8527 25.874 10.2307 26.0822 9.51972C26.2903 8.80872 26.2858 8.04489 26.0692 7.33683C25.8527 6.62878 25.4352 6.01254 24.8761 5.57575C24.317 5.13896 23.6448 4.90384 22.955 4.90384C22.2652 4.90384 21.593 5.13896 21.0339 5.57575C20.4748 6.01254 20.0573 6.62878 19.8408 7.33683C19.6242 8.04489 19.6197 8.80872 19.8278 9.51972C20.036 10.2307 20.4461 10.8527 21 11.2972L20.57 11.481C19.5288 10.221 18.1808 9.30318 16.68 8.83225C17.4991 8.28931 18.1319 7.47201 18.4819 6.50464C18.832 5.53728 18.8802 4.47278 18.6193 3.47305C18.3584 2.47332 17.8026 1.59306 17.0365 0.966157C16.2704 0.339251 15.3358 0 14.375 0C13.4142 0 12.4796 0.339251 11.7135 0.966157C10.9474 1.59306 10.3916 2.47332 10.1307 3.47305C9.86979 4.47278 9.91804 5.53728 10.2681 6.50464C10.6181 7.47201 11.2509 8.28931 12.07 8.83225C10.608 9.28995 9.29023 10.1724 8.26 11.3837L8.02 11.2755C8.57146 10.8295 8.97904 10.207 9.18497 9.4965C9.39089 8.78597 9.3847 8.02339 9.16727 7.31687C8.94985 6.61035 8.53223 5.99575 7.97361 5.56021C7.41499 5.12467 6.74373 4.89028 6.055 4.89028C5.36627 4.89028 4.69501 5.12467 4.13639 5.56021C3.57777 5.99575 3.16015 6.61035 2.94273 7.31687C2.7253 8.02339 2.71911 8.78597 2.92503 9.4965C3.13096 10.207 3.53854 10.8295 4.09 11.2755C2.89809 11.7185 1.86359 12.5522 1.13051 13.6606C0.397434 14.769 0.00225834 16.0969 0 17.4594C0 17.6028 0.0526784 17.7403 0.146447 17.8417C0.240215 17.943 0.367392 18 0.5 18H28.5C28.6326 18 28.7598 17.943 28.8536 17.8417C28.9473 17.7403 29 17.6028 29 17.4594C28.9936 16.1006 28.5965 14.7775 27.8637 13.6734C27.1309 12.5693 26.0987 11.7389 24.91 11.2972ZM20.67 8.48629C20.67 7.99878 20.8037 7.52221 21.0542 7.11686C21.3048 6.71151 21.6609 6.39557 22.0775 6.20901C22.4941 6.02245 22.9525 5.97363 23.3948 6.06874C23.8371 6.16385 24.2433 6.39861 24.5622 6.74334C24.8811 7.08806 25.0982 7.52727 25.1862 8.00541C25.2742 8.48356 25.229 8.97917 25.0564 9.42958C24.8839 9.87998 24.5916 10.2649 24.2167 10.5358C23.8418 10.8066 23.4009 10.9512 22.95 10.9512C22.6506 10.9512 22.3541 10.8875 22.0775 10.7636C21.8009 10.6397 21.5495 10.4581 21.3378 10.2293C21.1261 10.0004 20.9581 9.72863 20.8436 9.42958C20.729 9.13052 20.67 8.80999 20.67 8.48629ZM22.95 12.0323C24.2017 12.0268 25.4097 12.5291 26.3355 13.4398C27.2612 14.3506 27.8374 15.6036 27.95 16.9513H22.67C22.5818 15.3108 22.0766 13.7284 21.21 12.3783C21.7651 12.1458 22.3547 12.0249 22.95 12.0215V12.0323ZM10.95 4.81054C10.95 4.08141 11.15 3.36865 11.5247 2.7624C11.8994 2.15615 12.432 1.68363 13.055 1.40461C13.6781 1.12558 14.3638 1.05257 15.0253 1.19482C15.6867 1.33707 16.2943 1.68818 16.7712 2.20375C17.2481 2.71933 17.5729 3.37621 17.7045 4.09133C17.8361 4.80646 17.7685 5.5477 17.5104 6.22133C17.2523 6.89496 16.8153 7.47072 16.2545 7.87581C15.6937 8.28089 15.0344 8.49711 14.36 8.49711C13.9122 8.49569 13.469 8.39893 13.0558 8.21235C12.6426 8.02577 12.2674 7.75303 11.9517 7.4097C11.636 7.06636 11.3859 6.65916 11.2157 6.21134C11.0456 5.76353 10.9587 5.28386 10.96 4.79973L10.95 4.81054ZM6.05 6.02138C6.50136 6.01924 6.94316 6.16198 7.31941 6.43153C7.69567 6.70107 7.98946 7.08529 8.16356 7.5355C8.33766 7.98571 8.38424 8.48166 8.2974 8.96052C8.21056 9.43937 7.9942 9.87959 7.67574 10.2254C7.35728 10.5712 6.95104 10.807 6.5085 10.903C6.06595 10.999 5.60701 10.9508 5.18981 10.7646C4.77261 10.5784 4.41593 10.2624 4.16495 9.85684C3.91398 9.45126 3.78 8.97427 3.78 8.48629C3.77999 7.83443 4.01883 7.2091 4.44426 6.74715C4.86968 6.2852 5.44704 6.02424 6.05 6.02138ZM6.05 12.0215C6.57219 12.0169 7.09183 12.1008 7.59 12.2702C6.68806 13.6379 6.16123 15.2529 6.07 16.9297H1.07C1.18469 15.5877 1.75899 14.3403 2.68026 13.4323C3.60154 12.5243 4.80334 12.0212 6.05 12.0215ZM11.6 16.9405H7.07C7.18895 14.9363 8.00927 13.0562 9.36427 11.6822C10.7193 10.3083 12.5073 9.54367 14.365 9.54367C16.2227 9.54367 18.0107 10.3083 19.3657 11.6822C20.7207 13.0562 21.5411 14.9363 21.66 16.9405H11.6Z" fill="#1DA1F2"/>
</svg>

const ClientSVG = <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4771 0C13.997 0 11.9761 1.86293 11.9761 4.14906V6.9151C11.9761 8.24279 12.6707 9.41559 13.7285 10.1749C10.8958 11.2592 8.86286 14.0252 8.76834 17.2698C8.76574 17.3618 8.78313 17.4535 8.81947 17.5393C8.85582 17.6251 8.91039 17.7033 8.98 17.7694C9.0496 17.8355 9.13282 17.8881 9.22478 17.9241C9.31674 17.9602 9.41559 17.9789 9.51551 17.9792L23.2466 18C23.3468 18.0004 23.4461 17.9823 23.5385 17.9467C23.631 17.9112 23.7148 17.859 23.785 17.7931C23.8552 17.7272 23.9103 17.6491 23.9472 17.5632C23.9841 17.4774 24.002 17.3856 23.9998 17.2933C23.9158 14.0985 21.9503 11.3491 19.1582 10.226C19.7206 9.8432 20.1781 9.34441 20.4941 8.76951C20.8101 8.19462 20.9759 7.55957 20.9781 6.9151V4.14906C20.9781 1.86293 18.9587 0 16.4771 0ZM16.4771 1.38302C18.153 1.38302 19.4778 2.60423 19.4778 4.14906V6.9151C19.4778 8.45993 18.153 9.68113 16.4771 9.68113C14.8027 9.68113 13.4764 8.45993 13.4764 6.9151V4.14906C13.4764 2.60423 14.8027 1.38302 16.4771 1.38302ZM6.69937 4.14906C5.70531 4.15125 4.75265 4.51623 4.04974 5.16417C3.34683 5.81211 2.95089 6.69028 2.94851 7.60661V8.98962C2.94851 10.0048 3.43912 10.9079 4.1998 11.5427C1.78425 12.4776 0.084357 14.6932 0.000337816 17.2504C-0.00266835 17.3427 0.0144142 17.4346 0.0505773 17.5208C0.0867405 17.6069 0.141252 17.6855 0.210894 17.7518C0.280537 17.8182 0.363899 17.8711 0.456063 17.9073C0.548227 17.9435 0.647325 17.9623 0.747508 17.9627L6.68136 17.9765C6.77988 17.9767 6.87747 17.959 6.96856 17.9244C7.05965 17.8898 7.14246 17.839 7.21225 17.7749C7.28205 17.7108 7.33748 17.6347 7.37536 17.5509C7.41324 17.4671 7.43284 17.3772 7.43303 17.2864C7.43323 17.1955 7.41402 17.1056 7.37651 17.0216C7.33899 16.9377 7.2839 16.8613 7.21438 16.797C7.14486 16.7326 7.06227 16.6816 6.97133 16.6466C6.88039 16.6117 6.78288 16.5936 6.68436 16.5935L1.67322 16.5796C2.12332 14.2064 4.2223 12.3711 6.90191 12.4444C7.01748 12.4526 7.13354 12.4361 7.24099 12.396C8.13 12.277 8.94307 11.8676 9.5321 11.2424C10.1211 10.6172 10.447 9.81771 10.4502 8.98962V7.60661C10.4502 5.70357 8.76384 4.14906 6.69937 4.14906ZM6.69937 5.53208C7.95966 5.53208 8.94988 6.44487 8.94988 7.60661V8.98962C8.94988 10.1514 7.95966 11.0642 6.69937 11.0642C5.43908 11.0642 4.44885 10.1514 4.44885 8.98962V7.60661C4.44885 6.44487 5.43908 5.53208 6.69937 5.53208ZM16.5656 11.0697C19.5288 11.1637 21.9248 13.5245 22.3464 16.6156L10.4262 16.599C10.8748 13.371 13.4659 10.9715 16.5656 11.0697Z" fill="#657786"/>
</svg>

const BillingSVG = <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8 10H22.4V6C22.4 5.68174 22.2736 5.37652 22.0485 5.15147C21.8235 4.92643 21.5183 4.8 21.2 4.8H20.8V1.2C20.8 0.88174 20.6736 0.576515 20.4485 0.351472C20.2235 0.126428 19.9183 0 19.6 0H2.8C2.05769 0.000952567 1.34605 0.296258 0.821153 0.821153C0.296258 1.34605 0.000952567 2.05769 0 2.8V18C0.000635143 18.5302 0.211553 19.0386 0.586488 19.4135C0.961423 19.7884 1.46976 19.9994 2 20H21.2C21.5183 20 21.8235 19.8736 22.0485 19.6485C22.2736 19.4235 22.4 19.1183 22.4 18.8V15.6H22.8C23.1183 15.6 23.4235 15.4736 23.6485 15.2485C23.8736 15.0235 24 14.7183 24 14.4V11.2C24 10.8817 23.8736 10.5765 23.6485 10.3515C23.4235 10.1264 23.1183 10 22.8 10ZM1.388 1.3856C1.57254 1.19893 1.79249 1.05098 2.03495 0.95042C2.27741 0.849862 2.53751 0.798723 2.8 0.8H19.6C19.7061 0.8 19.8078 0.842143 19.8828 0.917157C19.9579 0.992172 20 1.09391 20 1.2V2.4H2.8C2.69391 2.4 2.59217 2.44214 2.51716 2.51716C2.44214 2.59217 2.4 2.69391 2.4 2.8C2.4 2.90609 2.44214 3.00783 2.51716 3.08284C2.59217 3.15786 2.69391 3.2 2.8 3.2H20V4.8H2.8C2.26976 4.79937 1.76142 4.58845 1.38649 4.21351C1.01155 3.83858 0.800635 3.33024 0.8 2.8C0.798828 2.53696 0.850241 2.27633 0.951217 2.03344C1.05219 1.79055 1.2007 1.57029 1.388 1.3856ZM21.6 18.8C21.6 18.9061 21.5579 19.0078 21.4828 19.0828C21.4078 19.1579 21.3061 19.2 21.2 19.2H2C1.68174 19.2 1.37652 19.0736 1.15147 18.8485C0.926428 18.6235 0.8 18.3183 0.8 18V4.76L0.8124 4.7712C0.8416 4.8008 0.8736 4.8284 0.9044 4.8568C0.9352 4.8852 0.9744 4.9232 1.0116 4.9544C1.0488 4.9856 1.0772 5.004 1.11 5.0292C1.15 5.0588 1.1876 5.0896 1.228 5.1176C1.262 5.1404 1.298 5.1604 1.3328 5.182C1.3748 5.2084 1.4164 5.2356 1.46 5.2596C1.4964 5.2796 1.5352 5.2964 1.5728 5.3148C1.6168 5.3364 1.66 5.3596 1.7056 5.3788C1.7512 5.398 1.7884 5.4096 1.83 5.4252C1.8716 5.4408 1.918 5.46 1.9636 5.474C2.0092 5.488 2.0584 5.4992 2.106 5.5112C2.1536 5.5232 2.19 5.5352 2.2332 5.544C2.2892 5.5556 2.3468 5.5624 2.404 5.5708C2.44 5.576 2.4756 5.5836 2.5124 5.5872C2.60799 5.59632 2.70398 5.60059 2.8 5.6H21.2C21.3061 5.6 21.4078 5.64214 21.4828 5.71716C21.5579 5.79217 21.6 5.89391 21.6 6V10H17.2C16.8817 10 16.5765 10.1264 16.3515 10.3515C16.1264 10.5765 16 10.8817 16 11.2V14.4C16 14.7183 16.1264 15.0235 16.3515 15.2485C16.5765 15.4736 16.8817 15.6 17.2 15.6H21.6V18.8ZM23.2 14.4C23.2 14.5061 23.1579 14.6078 23.0828 14.6828C23.0078 14.7579 22.9061 14.8 22.8 14.8H17.2C17.0939 14.8 16.9922 14.7579 16.9172 14.6828C16.8421 14.6078 16.8 14.5061 16.8 14.4V11.2C16.8 11.0939 16.8421 10.9922 16.9172 10.9172C16.9922 10.8421 17.0939 10.8 17.2 10.8H22.8C22.9061 10.8 23.0078 10.8421 23.0828 10.9172C23.1579 10.9922 23.2 11.0939 23.2 11.2V14.4Z" fill="#657786"/>
</svg>

const InvitesSVG = <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.996 12.6551C25.9952 12.6236 25.9872 12.5927 25.9727 12.5647C25.9689 12.5572 25.9635 12.5514 25.959 12.5439C25.9465 12.5247 25.931 12.5077 25.9131 12.4935C25.9085 12.4902 25.9069 12.4848 25.9023 12.4818L23.4797 10.87V8.36841C23.4798 8.31291 23.4579 8.25962 23.4189 8.22014C23.3799 8.18066 23.3269 8.1582 23.2714 8.15765H19.4016L16.2063 6.03513C16.1726 6.0128 16.1332 6.00061 16.0928 6.00002C16.0525 5.99943 16.0127 6.01046 15.9784 6.0318L12.5652 8.15599H8.72631C8.69862 8.15593 8.67119 8.16135 8.64559 8.17192C8.61999 8.18249 8.59673 8.19801 8.57715 8.21759C8.55757 8.23717 8.54205 8.26043 8.53147 8.28602C8.5209 8.31162 8.51549 8.33905 8.51554 8.36674V10.6784L6.09956 12.184C6.07312 12.2007 6.05088 12.2232 6.03457 12.2498C6.03041 12.2561 6.02916 12.2632 6.02541 12.2702C6.01371 12.2938 6.00664 12.3194 6.00458 12.3456C6.00458 12.3515 6 12.3565 6 12.3623V25.7863C6 25.7934 6.00333 25.7992 6.00375 25.8059C6.00496 25.8201 6.00775 25.834 6.01208 25.8476C6.01579 25.8621 6.02139 25.8761 6.02874 25.8892C6.03074 25.895 6.03311 25.9007 6.03582 25.9063C6.03874 25.9109 6.04374 25.9125 6.04707 25.9167C6.06168 25.9353 6.07945 25.9513 6.09956 25.9638C6.10599 25.9689 6.11282 25.9735 6.11997 25.9775C6.14814 25.9918 6.17919 25.9995 6.21077 26H25.7886C25.8223 25.9999 25.8554 25.9916 25.8852 25.9758C25.9354 25.9496 25.9732 25.9047 25.9906 25.8509C25.9999 25.8278 26.0024 25.8025 25.9977 25.778V12.658L25.996 12.6551ZM16.0859 6.46039L18.6389 8.15724H13.3617L16.0859 6.46039ZM8.72631 13.1916C8.78178 13.1909 8.83475 13.1684 8.87374 13.129C8.91273 13.0895 8.93459 13.0363 8.93459 12.9808V8.57916H23.0556V13.2553C23.0543 13.2837 23.0588 13.3121 23.0689 13.3388C23.0789 13.3654 23.0942 13.3898 23.1139 13.4103C23.1335 13.4309 23.1572 13.4473 23.1833 13.4585C23.2095 13.4696 23.2377 13.4754 23.2662 13.4754C23.2946 13.4754 23.3228 13.4696 23.349 13.4585C23.3752 13.4473 23.3988 13.4309 23.4185 13.4103C23.4382 13.3898 23.4535 13.3654 23.4635 13.3388C23.4735 13.3121 23.478 13.2837 23.4767 13.2553V11.3752L25.4041 12.6564L16.1567 18.8615L16.1351 18.8465C11.9079 15.968 7.67994 13.1049 6.59608 12.3715L8.51554 11.1761V12.9808C8.51554 13.0367 8.53775 13.0903 8.57727 13.1298C8.6168 13.1694 8.67041 13.1916 8.72631 13.1916ZM6.4203 12.7609C8.69757 14.302 12.3028 16.7469 15.7785 19.1143L6.4203 25.3915V12.7609ZM6.90183 25.5756L16.1534 19.3696C20.1423 22.0869 23.89 24.6547 25.1721 25.5756H6.90183ZM16.5316 19.1168L25.5745 13.0504V25.3636C24.7855 24.7517 22.5766 23.2348 16.5316 19.1168Z" fill="#657786"/>
<path d="M19.3083 11.255H19.8673C19.8935 11.2562 19.9197 11.252 19.9443 11.2429C19.9689 11.2337 19.9913 11.2197 20.0103 11.2017C20.0293 11.1836 20.0444 11.162 20.0547 11.138C20.065 11.114 20.0703 11.0882 20.0703 11.0622C20.0703 11.0361 20.065 11.0103 20.0547 10.9863C20.0444 10.9623 20.0293 10.9407 20.0103 10.9227C19.9913 10.9047 19.9689 10.8906 19.9443 10.8815C19.9197 10.8723 19.8935 10.8682 19.8673 10.8693H19.3083C19.2821 10.8682 19.2559 10.8723 19.2313 10.8815C19.2067 10.8906 19.1843 10.9047 19.1653 10.9227C19.1463 10.9407 19.1312 10.9623 19.1209 10.9863C19.1106 11.0103 19.1053 11.0361 19.1053 11.0622C19.1053 11.0882 19.1106 11.114 19.1209 11.138C19.1312 11.162 19.1463 11.1836 19.1653 11.2017C19.1843 11.2197 19.2067 11.2337 19.2313 11.2429C19.2559 11.252 19.2821 11.2562 19.3083 11.255ZM12.2733 11.255H18.1992C18.2492 11.2528 18.2964 11.2315 18.331 11.1956C18.3656 11.1597 18.385 11.1119 18.385 11.0622C18.385 11.0125 18.3656 10.9647 18.331 10.9287C18.2964 10.8928 18.2492 10.8715 18.1992 10.8693H12.2733C12.2471 10.8682 12.2209 10.8723 12.1963 10.8815C12.1718 10.8906 12.1493 10.9047 12.1303 10.9227C12.1114 10.9407 12.0963 10.9623 12.0859 10.9863C12.0756 11.0103 12.0703 11.0361 12.0703 11.0622C12.0703 11.0882 12.0756 11.114 12.0859 11.138C12.0963 11.162 12.1114 11.1836 12.1303 11.2017C12.1493 11.2197 12.1718 11.2337 12.1963 11.2429C12.2209 11.252 12.2471 11.2562 12.2733 11.255ZM19.8673 12.6764H15.4766C15.425 12.6764 15.3756 12.6967 15.3391 12.7329C15.3027 12.7691 15.2822 12.8182 15.2822 12.8694C15.2822 12.9206 15.3027 12.9697 15.3391 13.0059C15.3756 13.0421 15.425 13.0625 15.4766 13.0625H19.8673C19.9188 13.0625 19.9683 13.0421 20.0047 13.0059C20.0412 12.9697 20.0617 12.9206 20.0617 12.8694C20.0617 12.8182 20.0412 12.7691 20.0047 12.7329C19.9683 12.6967 19.9188 12.6764 19.8673 12.6764ZM12.2733 13.0625H14.2918C14.3433 13.0625 14.3928 13.0421 14.4292 13.0059C14.4657 12.9697 14.4862 12.9206 14.4862 12.8694C14.4862 12.8182 14.4657 12.7691 14.4292 12.7329C14.3928 12.6967 14.3433 12.6764 14.2918 12.6764H12.2733C12.2218 12.6764 12.1723 12.6967 12.1359 12.7329C12.0994 12.7691 12.079 12.8182 12.079 12.8694C12.079 12.9206 12.0994 12.9697 12.1359 13.0059C12.1723 13.0421 12.2218 13.0625 12.2733 13.0625ZM12.2733 14.8691H19.8673C19.9188 14.8691 19.9683 14.8488 20.0047 14.8126C20.0412 14.7764 20.0617 14.7273 20.0617 14.6761C20.0617 14.6249 20.0412 14.5758 20.0047 14.5396C19.9683 14.5034 19.9188 14.4831 19.8673 14.4831H12.2733C12.2218 14.4831 12.1723 14.5034 12.1359 14.5396C12.0994 14.5758 12.079 14.6249 12.079 14.6761C12.079 14.7273 12.0994 14.7764 12.1359 14.8126C12.1723 14.8488 12.2218 14.8691 12.2733 14.8691Z" fill="#657786"/>
</svg>

const ProfileSVG = <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8.35879C9.15033 8.35879 10.8126 5.90435 10.8126 3.79945C10.8126 2.79177 10.4109 1.82537 9.69594 1.11283C8.98093 0.400298 8.01117 0 7 0C5.98883 0 5.01907 0.400298 4.30406 1.11283C3.58905 1.82537 3.18736 2.79177 3.18736 3.79945C3.18736 5.90435 4.84967 8.35879 7 8.35879ZM7 1.51978C7.6067 1.51978 8.18856 1.75996 8.61757 2.18748C9.04657 2.615 9.28758 3.19484 9.28758 3.79945C9.28758 5.12926 8.17429 6.83901 7 6.83901C5.82571 6.83901 4.71242 5.12926 4.71242 3.79945C4.71242 3.19484 4.95343 2.615 5.38243 2.18748C5.81144 1.75996 6.3933 1.51978 7 1.51978ZM12.4292 11.4819C11.7198 10.7651 10.8745 10.1959 9.94251 9.8074C9.01048 9.41889 8.01028 9.21883 7 9.21883C5.98972 9.21883 4.98952 9.41889 4.05749 9.8074C3.12547 10.1959 2.2802 10.7651 1.57081 11.4819C1.11157 11.8704 0.735738 12.3472 0.465826 12.8839C0.195914 13.4205 0.0374751 14.006 0 14.6051C0.0384797 15.2029 0.197399 15.7869 0.467277 16.3221C0.737155 16.8574 1.11246 17.333 1.57081 17.7206C2.27755 18.4421 3.12195 19.0154 4.05433 19.4069C4.98672 19.7983 5.98825 20 7 20C8.01175 20 9.01328 19.7983 9.94567 19.4069C10.878 19.0154 11.7225 18.4421 12.4292 17.7206C12.8875 17.333 13.2628 16.8574 13.5327 16.3221C13.8026 15.7869 13.9615 15.2029 14 14.6051C13.9625 14.006 13.8041 13.4205 13.5342 12.8839C13.2643 12.3472 12.8884 11.8704 12.4292 11.4819ZM11.354 16.634C10.7862 17.2107 10.1086 17.6688 9.36103 17.9815C8.61343 18.2942 7.81078 18.4553 7 18.4553C6.18922 18.4553 5.38657 18.2942 4.63897 17.9815C3.89138 17.6688 3.21384 17.2107 2.64597 16.634C2.01828 16.1316 1.61536 15.4023 1.52505 14.6051C1.61342 13.8051 2.01653 13.0728 2.64597 12.5686C3.21384 11.9919 3.89138 11.5338 4.63897 11.2211C5.38657 10.9083 6.18922 10.7473 7 10.7473C7.81078 10.7473 8.61343 10.9083 9.36103 11.2211C10.1086 11.5338 10.7862 11.9919 11.354 12.5686C11.9835 13.0728 12.3866 13.8051 12.4749 14.6051C12.3846 15.4023 11.9817 16.1316 11.354 16.634Z" fill="#657786"/>
</svg>

const NotificationsSVG = <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7059 8.19211H11.7647C11.7647 7.22647 11.3681 6.30039 10.662 5.61758C9.95603 4.93477 8.99846 4.55117 8 4.55117V3.64094C9.24808 3.64094 10.445 4.12043 11.3276 4.97394C12.2101 5.82746 12.7059 6.98506 12.7059 8.19211ZM16 15.9291C16 16.2912 15.8513 16.6385 15.5865 16.8946C15.3217 17.1506 14.9627 17.2945 14.5882 17.2945H11.2565C11.1377 18.0475 10.744 18.7344 10.1466 19.2307C9.54913 19.7271 8.7876 20 8 20C7.2124 20 6.45087 19.7271 5.85345 19.2307C5.25603 18.7344 4.86226 18.0475 4.74353 17.2945H1.41176C1.03734 17.2945 0.678254 17.1506 0.413496 16.8946C0.148739 16.6385 0 16.2912 0 15.9291C0 15.567 0.148739 15.2197 0.413496 14.9637C0.678254 14.7076 1.03734 14.5637 1.41176 14.5637V8.19211C1.41346 6.58215 2.04527 5.03249 3.18019 3.85468C4.3151 2.67686 5.86897 1.95822 7.52941 1.84322V0H8.47059V1.84322C10.131 1.95822 11.6849 2.67686 12.8198 3.85468C13.9547 5.03249 14.5865 6.58215 14.5882 8.19211V14.5637C14.9627 14.5637 15.3217 14.7076 15.5865 14.9637C15.8513 15.2197 16 15.567 16 15.9291ZM2.35294 14.5637H13.6471V8.19211C13.6471 6.74365 13.0521 5.35452 11.9931 4.33031C10.934 3.3061 9.49769 2.7307 8 2.7307C6.50231 2.7307 5.06596 3.3061 4.00693 4.33031C2.9479 5.35452 2.35294 6.74365 2.35294 8.19211V14.5637ZM10.3059 17.2945H5.69412C5.80212 17.8089 6.0907 18.2713 6.51094 18.6035C6.93118 18.9357 7.45724 19.1172 8 19.1172C8.54276 19.1172 9.06882 18.9357 9.48906 18.6035C9.9093 18.2713 10.1979 17.8089 10.3059 17.2945ZM15.0588 15.9291C15.0588 15.8084 15.0092 15.6926 14.921 15.6073C14.8327 15.5219 14.713 15.474 14.5882 15.474H1.41176C1.28696 15.474 1.16726 15.5219 1.07901 15.6073C0.990756 15.6926 0.941176 15.8084 0.941176 15.9291C0.941176 16.0498 0.990756 16.1656 1.07901 16.2509C1.16726 16.3363 1.28696 16.3842 1.41176 16.3842H14.5882C14.713 16.3842 14.8327 16.3363 14.921 16.2509C15.0092 16.1656 15.0588 16.0498 15.0588 15.9291Z" fill="#657786"/>
</svg>

const NotificatioNumberSVG = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="10" fill="#4C9EEB"/>
<path d="M7.28 8.73C7.336 8.338 7.444 7.992 7.604 7.692C7.764 7.388 7.966 7.134 8.21 6.93C8.458 6.726 8.74 6.572 9.056 6.468C9.376 6.36 9.72 6.306 10.088 6.306C10.452 6.306 10.788 6.358 11.096 6.462C11.404 6.566 11.668 6.714 11.888 6.906C12.112 7.098 12.286 7.33 12.41 7.602C12.534 7.874 12.596 8.176 12.596 8.508C12.596 8.78 12.56 9.024 12.488 9.24C12.42 9.452 12.32 9.638 12.188 9.798C12.06 9.958 11.904 10.094 11.72 10.206C11.536 10.318 11.33 10.41 11.102 10.482C11.662 10.626 12.082 10.874 12.362 11.226C12.646 11.574 12.788 12.01 12.788 12.534C12.788 12.93 12.712 13.286 12.56 13.602C12.412 13.918 12.208 14.188 11.948 14.412C11.688 14.632 11.384 14.802 11.036 14.922C10.692 15.038 10.322 15.096 9.926 15.096C9.47 15.096 9.08 15.04 8.756 14.928C8.432 14.812 8.158 14.654 7.934 14.454C7.71 14.254 7.526 14.018 7.382 13.746C7.238 13.47 7.116 13.172 7.016 12.852L7.478 12.66C7.598 12.608 7.714 12.594 7.826 12.618C7.942 12.642 8.026 12.708 8.078 12.816C8.13 12.928 8.194 13.062 8.27 13.218C8.35 13.374 8.458 13.524 8.594 13.668C8.73 13.812 8.902 13.934 9.11 14.034C9.322 14.134 9.59 14.184 9.914 14.184C10.214 14.184 10.476 14.136 10.7 14.04C10.928 13.94 11.116 13.812 11.264 13.656C11.416 13.5 11.53 13.326 11.606 13.134C11.682 12.942 11.72 12.752 11.72 12.564C11.72 12.332 11.69 12.12 11.63 11.928C11.57 11.736 11.458 11.57 11.294 11.43C11.13 11.29 10.904 11.18 10.616 11.1C10.332 11.02 9.966 10.98 9.518 10.98V10.206C9.886 10.202 10.198 10.162 10.454 10.086C10.714 10.01 10.924 9.906 11.084 9.774C11.248 9.642 11.366 9.484 11.438 9.3C11.514 9.116 11.552 8.912 11.552 8.688C11.552 8.44 11.512 8.224 11.432 8.04C11.356 7.856 11.25 7.704 11.114 7.584C10.978 7.464 10.816 7.374 10.628 7.314C10.444 7.254 10.244 7.224 10.028 7.224C9.812 7.224 9.61 7.256 9.422 7.32C9.238 7.384 9.074 7.474 8.93 7.59C8.79 7.702 8.672 7.836 8.576 7.992C8.48 8.148 8.412 8.32 8.372 8.508C8.32 8.648 8.254 8.742 8.174 8.79C8.098 8.834 7.986 8.846 7.838 8.826L7.28 8.73Z" fill="white"/>
</svg>


const PreferencesSVG = <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8333 26H15.1667C14.4775 26 13.9167 25.4392 13.9167 24.75V23.1983C13.3833 23.0442 12.8688 22.8307 12.3829 22.5621L11.2854 23.66C10.8129 24.1325 9.99 24.1317 9.5175 23.66L8.33875 22.4817C8.1025 22.2458 7.9725 21.9317 7.9725 21.5979C7.9725 21.2642 8.1025 20.95 8.33875 20.7142L9.43667 19.6158C9.16799 19.1303 8.95484 18.6161 8.80125 18.0829H7.25C6.56083 18.0829 6 17.5221 6 16.8329V15.1663C6 14.8321 6.13 14.5183 6.36583 14.2825C6.48171 14.1661 6.61951 14.0738 6.77127 14.0109C6.92303 13.948 7.08574 13.9159 7.25 13.9163H8.80167C8.95583 13.3837 9.16833 12.87 9.4375 12.3833L8.34 11.2854C8.10587 11.0509 7.97436 10.7331 7.97436 10.4017C7.97436 10.0703 8.10587 9.75243 8.34 9.51792L9.51833 8.33917C9.99042 7.8675 10.8137 7.86667 11.2863 8.33917L12.3842 9.43708C12.8697 9.16877 13.3837 8.95563 13.9167 8.80167V7.25C13.9167 6.56083 14.4775 6 15.1667 6H16.8333C17.5225 6 18.0833 6.56083 18.0833 7.25V8.80167C18.6167 8.95583 19.13 9.16875 19.6158 9.43708L20.7137 8.33917C21.1862 7.8675 22.0092 7.86667 22.4817 8.33917L23.6604 9.5175C23.8967 9.75333 24.0267 10.0675 24.0267 10.4012C24.0267 10.735 23.8967 11.0492 23.6604 11.285L22.5629 12.3829C22.8317 12.8686 23.045 13.3829 23.1987 13.9163H24.75C25.4392 13.9163 26 14.4771 26 15.1663V16.8329C26 17.1671 25.87 17.4808 25.6342 17.7167C25.3983 17.9525 25.0842 18.0829 24.75 18.0829H23.1983C23.0443 18.6162 22.831 19.1305 22.5625 19.6163L23.66 20.7142C23.8941 20.9487 24.0256 21.2665 24.0256 21.5979C24.0256 21.9293 23.8941 22.2471 23.66 22.4817L22.4817 23.6604C22.0092 24.1325 21.1862 24.1325 20.7137 23.6604L19.6167 22.5625C19.131 22.8309 18.6168 23.0442 18.0837 23.1983V24.75C18.0832 25.0814 17.9513 25.3991 17.7169 25.6334C17.4825 25.8677 17.1648 25.9996 16.8333 26ZM12.3154 21.6242C12.39 21.6242 12.4654 21.6442 12.5325 21.685C13.1205 22.045 13.7611 22.3108 14.4312 22.4729C14.5221 22.4949 14.6029 22.5468 14.6608 22.6202C14.7186 22.6937 14.75 22.7844 14.75 22.8779V24.75C14.75 24.98 14.9371 25.1667 15.1667 25.1667H16.8333C17.0629 25.1667 17.25 24.98 17.25 24.75V22.8779C17.25 22.7844 17.2814 22.6937 17.3392 22.6202C17.3971 22.5468 17.4779 22.4949 17.5687 22.4729C18.2387 22.3109 18.8792 22.0452 19.4671 21.6854C19.6321 21.585 19.8429 21.6104 19.9792 21.7463L21.3033 23.0708C21.4596 23.2267 21.7362 23.2275 21.8929 23.0708L23.0712 21.8921C23.1494 21.8139 23.1932 21.708 23.1932 21.5975C23.1932 21.487 23.1494 21.3811 23.0712 21.3029L21.7467 19.9783C21.6805 19.9122 21.6385 19.8257 21.6275 19.7328C21.6165 19.6399 21.637 19.546 21.6858 19.4662C22.0456 18.8784 22.3112 18.2379 22.4729 17.5679C22.4948 17.477 22.5467 17.3961 22.6201 17.3382C22.6936 17.2803 22.7844 17.2488 22.8779 17.2487H24.75C24.8047 17.249 24.8589 17.2384 24.9095 17.2176C24.9601 17.1968 25.0061 17.1661 25.0448 17.1275C25.0835 17.0889 25.1142 17.0429 25.1352 16.9924C25.1561 16.9418 25.1668 16.8876 25.1667 16.8329V15.1663C25.1667 14.9362 24.9796 14.7496 24.75 14.7496H22.8779C22.7844 14.7496 22.6935 14.7182 22.62 14.6603C22.5466 14.6024 22.4947 14.5214 22.4729 14.4304C22.3112 13.7604 22.0456 13.1199 21.6858 12.5321C21.637 12.4523 21.6165 12.3584 21.6275 12.2655C21.6385 12.1726 21.6805 12.0861 21.7467 12.02L23.0712 10.6954C23.1488 10.6175 23.1933 10.5104 23.1933 10.4008C23.1933 10.2913 23.1488 10.1837 23.0712 10.1062L21.8925 8.92792C21.813 8.85233 21.7074 8.81018 21.5977 8.81018C21.488 8.81018 21.3825 8.85233 21.3029 8.92792L19.9783 10.2525C19.9124 10.319 19.8259 10.3612 19.7329 10.3722C19.6399 10.3833 19.5459 10.3625 19.4662 10.3133C18.8786 9.95369 18.2384 9.68812 17.5687 9.52625C17.4779 9.50452 17.3971 9.45281 17.3392 9.37948C17.2814 9.30615 17.25 9.21547 17.25 9.12208V7.25C17.25 7.02 17.0629 6.83333 16.8333 6.83333H15.1667C14.9371 6.83333 14.75 7.02 14.75 7.25V9.12208C14.75 9.21556 14.7186 9.30632 14.6608 9.37978C14.6029 9.45323 14.5221 9.50512 14.4312 9.52708C13.7613 9.68893 13.1208 9.9545 12.5329 10.3142C12.4532 10.363 12.3594 10.3836 12.2665 10.3726C12.1737 10.3615 12.0873 10.3195 12.0212 10.2533L10.6967 8.92875C10.6171 8.85316 10.5116 8.81101 10.4019 8.81101C10.2922 8.81101 10.1866 8.85316 10.1071 8.92875L8.92917 10.1071C8.85105 10.1852 8.80717 10.2912 8.80717 10.4017C8.80717 10.5122 8.85105 10.6181 8.92917 10.6962L10.2537 12.0208C10.3199 12.087 10.3619 12.1734 10.3729 12.2663C10.3839 12.3592 10.3634 12.4531 10.3146 12.5329C9.95485 13.1206 9.68928 13.761 9.5275 14.4308C9.50561 14.5218 9.45377 14.6027 9.3803 14.6606C9.30684 14.7185 9.21603 14.75 9.1225 14.75H7.25C7.19526 14.7498 7.14101 14.7604 7.09038 14.7812C7.03976 14.8021 6.99376 14.8327 6.95503 14.8714C6.9163 14.9101 6.88561 14.9561 6.86472 15.0067C6.84384 15.0573 6.83317 15.1115 6.83333 15.1663V16.8329C6.83333 17.0629 7.02042 17.2496 7.25 17.2496H9.12208C9.31458 17.2496 9.48208 17.3812 9.52708 17.5687C9.68893 18.2385 9.9545 18.8789 10.3142 19.4667C10.363 19.5465 10.3835 19.6404 10.3725 19.7332C10.3615 19.8261 10.3195 19.9126 10.2533 19.9787L8.92875 21.3038C8.85125 21.3817 8.80667 21.4887 8.80667 21.5983C8.80667 21.7079 8.85125 21.8154 8.92875 21.8929L10.1075 23.0712C10.187 23.1468 10.2926 23.189 10.4023 23.189C10.512 23.189 10.6175 23.1468 10.6971 23.0712L12.0212 21.7467C12.0597 21.7078 12.1055 21.6769 12.156 21.6559C12.2065 21.6348 12.2607 21.6241 12.3154 21.6242Z" fill="#657786"/>
<path d="M16 20C13.7944 20 12 18.2056 12 16C12 13.7944 13.7944 12 16 12C18.2056 12 20 13.7944 20 16C20 18.2056 18.206 20 16 20ZM16 12.8C14.2356 12.8 12.8 14.2356 12.8 16C12.8 17.7644 14.2356 19.2 16 19.2C17.7644 19.2 19.2 17.7644 19.2 16C19.2 14.2356 17.7648 12.8 16 12.8Z" fill="#657786"/>
</svg>



// NavItems array
const navItems: NavItem[] = [
  { id: 1, text: 'Team', icon: TeamSVG },
  { id: 2, text: 'Client', icon: ClientSVG },
  { id: 3, text: 'Billing', icon: BillingSVG },
  { id: 4, text: 'Invite', icon: InvitesSVG },
  { id: 5, text: 'Profile', icon: ProfileSVG },
  { id: 6, text: 'Notifications', icon: NotificationsSVG, additionalIcon : NotificatioNumberSVG },
  { id: 7, text: 'Preferences', icon: PreferencesSVG },
];

const DashBoardNav = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(1); // Default active item is id: 1

  const handleClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <Container>
      {navItems.map((item) => (
        <NavContainer
          key={item.id}
          isActive={item.id === activeItemId}
          onClick={() => handleClick(item.id)}
        >
          {item.additionalIcon ? (
            <FlexWrapper>
              <MainContent>
                <Icon>{item.icon}</Icon>
                <Text>{item.text}</Text>
              </MainContent>
              <AdditionalIcon>{item.additionalIcon}</AdditionalIcon>
            </FlexWrapper>
          ) : (
            <>
              <Icon>{item.icon}</Icon>
              <Text>{item.text}</Text>
            </>
          )}
        </NavContainer>
      ))}
    </Container>
  );
};

export default DashBoardNav;















