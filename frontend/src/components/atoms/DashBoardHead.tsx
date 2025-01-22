import styled from 'styled-components';

const InnerHeadContainer = styled.div`
  height : 52px;
  width : 100%;
  min-width : 653px;
  display : flex;
  gap: 10px;
  // align-items : flex-end;
`;

const HeadIconContainer = styled.div`
  height : 40px;
  width : 40px;
`;

const HeadTextContainer = styled.div`
  height : 52px;
  width : 100%;
  min-width : 520px;
  display : flex;
  flex-direction : column;
  gap : 12px;
`;


const HeadTitle = styled.div`
  height : 24px;
  width : 100%;
  min-width : 64px;
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
  width : 100%;
  min-width: 520px;
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

const DashBoardHead = () => {
    const headIconSVG = <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.4869 12.5524C28.0981 12.0585 28.5507 11.3675 28.7803 10.5775C29.01 9.78747 29.005 8.93877 28.7661 8.15204C28.5271 7.36531 28.0665 6.6806 27.4495 6.19528C26.8326 5.70995 26.0908 5.44872 25.3297 5.44872C24.5685 5.44872 23.8267 5.70995 23.2098 6.19528C22.5928 6.6806 22.1322 7.36531 21.8933 8.15204C21.6543 8.93877 21.6494 9.78747 21.879 10.5775C22.1086 11.3675 22.5612 12.0585 23.1724 12.5524L22.6979 12.7566C21.549 11.3567 20.0616 10.3369 18.4055 9.81361C19.3094 9.21035 20.0076 8.30223 20.3938 7.22738C20.7801 6.15253 20.8333 4.96976 20.5454 3.85894C20.2575 2.74813 19.6443 1.77007 18.7989 1.07351C17.9535 0.376945 16.9223 0 15.8621 0C14.8018 0 13.7706 0.376945 12.9252 1.07351C12.0799 1.77007 11.4666 2.74813 11.1787 3.85894C10.8908 4.96976 10.944 6.15253 11.3303 7.22738C11.7166 8.30223 12.4147 9.21035 13.3186 9.81361C11.7054 10.3222 10.2513 11.3027 9.11448 12.6485L8.84966 12.5284C9.45816 12.0327 9.90791 11.3412 10.1351 10.5517C10.3624 9.76219 10.3555 8.91487 10.1156 8.12986C9.8757 7.34484 9.41487 6.66195 8.79847 6.17801C8.18206 5.69407 7.44136 5.43364 6.68138 5.43364C5.9214 5.43364 5.1807 5.69407 4.56429 6.17801C3.94789 6.66195 3.48706 7.34484 3.24715 8.12986C3.00723 8.91487 3.0004 9.76219 3.22762 10.5517C3.45485 11.3412 3.9046 12.0327 4.5131 12.5284C3.1979 13.0205 2.05638 13.9469 1.24746 15.1784C0.438548 16.41 0.00249196 17.8854 0 19.3994C0 19.5587 0.0581279 19.7114 0.161596 19.8241C0.265065 19.9367 0.405398 20 0.551724 20H31.4483C31.5946 20 31.7349 19.9367 31.8384 19.8241C31.9419 19.7114 32 19.5587 32 19.3994C31.9929 17.8895 31.5548 16.4194 30.7462 15.1927C29.9376 13.9659 28.7986 13.0432 27.4869 12.5524ZM22.8083 9.42922C22.8083 8.88753 22.9558 8.35802 23.2323 7.90762C23.5087 7.45723 23.9016 7.10619 24.3614 6.8989C24.8211 6.69161 25.3269 6.63737 25.815 6.74305C26.303 6.84872 26.7513 7.10957 27.1031 7.4926C27.455 7.87562 27.6946 8.36363 27.7917 8.8949C27.8887 9.42618 27.8389 9.97686 27.6485 10.4773C27.4581 10.9778 27.1356 11.4055 26.7219 11.7064C26.3081 12.0074 25.8217 12.168 25.3241 12.168C24.9938 12.168 24.6666 12.0972 24.3614 11.9595C24.0561 11.8219 23.7788 11.6202 23.5452 11.3658C23.3115 11.1115 23.1262 10.8096 22.9998 10.4773C22.8734 10.145 22.8083 9.78888 22.8083 9.42922ZM25.3241 13.3692C26.7053 13.3631 28.0383 13.9212 29.0599 14.9332C30.0814 15.9451 30.7171 17.3374 30.8414 18.8348H25.0152C24.9179 17.012 24.3604 15.2537 23.4041 13.7536C24.0166 13.4954 24.6673 13.361 25.3241 13.3572V13.3692ZM12.0828 5.34505C12.0828 4.5349 12.3034 3.74295 12.7169 3.06933C13.1304 2.39572 13.718 1.8707 14.4056 1.56067C15.0931 1.25064 15.8497 1.16953 16.5796 1.32758C17.3095 1.48563 17.98 1.87575 18.5062 2.44861C19.0324 3.02147 19.3908 3.75134 19.536 4.54593C19.6812 5.34051 19.6066 6.16411 19.3219 6.91259C19.0371 7.66107 18.5548 8.3008 17.936 8.7509C17.3172 9.20099 16.5897 9.44123 15.8455 9.44123C15.3514 9.43965 14.8624 9.33214 14.4064 9.12483C13.9504 8.91752 13.5365 8.61448 13.1881 8.233C12.8397 7.85152 12.5637 7.39907 12.376 6.90149C12.1882 6.40392 12.0923 5.87096 12.0938 5.33304L12.0828 5.34505ZM6.67586 6.69042C7.17392 6.68804 7.66141 6.84665 8.07659 7.14614C8.49177 7.44563 8.81596 7.87254 9.00807 8.37278C9.20018 8.87301 9.25158 9.42407 9.15576 9.95613C9.05993 10.4882 8.82119 10.9773 8.46979 11.3615C8.11838 11.7458 7.67012 12.0078 7.18179 12.1145C6.69346 12.2211 6.18704 12.1676 5.72668 11.9607C5.26633 11.7537 4.87275 11.4027 4.59581 10.952C4.31887 10.5014 4.17104 9.97141 4.17103 9.42922C4.17103 8.70492 4.43458 8.01011 4.90401 7.49683C5.37344 6.98355 6.01053 6.6936 6.67586 6.69042ZM6.67586 13.3572C7.25208 13.3521 7.82546 13.4454 8.37517 13.6335C7.37993 15.1532 6.79859 16.9476 6.69793 18.8108H1.18069C1.30725 17.3196 1.94095 15.9337 2.95753 14.9248C3.97412 13.9159 5.30024 13.3569 6.67586 13.3572ZM12.8 18.8228H7.80138C7.93263 16.5959 8.83781 14.5068 10.333 12.9803C11.8282 11.4537 13.8011 10.6041 15.851 10.6041C17.9009 10.6041 19.8739 11.4537 21.3691 12.9803C22.8643 14.5068 23.7694 16.5959 23.9007 18.8228H12.8Z" fill="#657786"/>
    </svg>
  return (
    <InnerHeadContainer>
          <HeadIconContainer>{headIconSVG}</HeadIconContainer>
          <HeadTextContainer>
              <HeadTitle>Team</HeadTitle>
              <HeadDescription>Manage and organize your team members for efficient collaboration.</HeadDescription>
          </HeadTextContainer>
        </InnerHeadContainer>
  )
}

export default DashBoardHead