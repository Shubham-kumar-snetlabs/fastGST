
import styled from 'styled-components'


const Container = styled.div`
    width: 264px;
    height: 66px;
    padding: 12px ;
    display : flex;
    gap: 10px;
    border-radius: 8px ;
    border: 1px solid #E1E8ED;
    background : #E4F4FF;
    box-sizing : border-box;
`;

const InnerContainer = styled.div`
    height : 42px;
    width : 240px;
    display : flex;
    gap : 12px;
`;

const PhotoContainer = styled.div`
    width : 42.26px;
    height : 42px;
    border-radius : 1000px;
`;



const Photo = styled.img`
    width : 42.26px;
    height : 42px;
    border-radius : 1000px;
`;

const UserDescriptor = styled.div`
    width : 185.7px;
    height : 40px;
    display : flex;
    flex-direction : column;
    gap : 8px;
`;

const Name = styled.div`
    width: 185.74px;
    height: 18px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #14171A;
`;

const Email = styled.div`
    width: 185.74px;
    height: 14px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;

const DashBoardFooter = () => {
  return (
    <Container>
        <InnerContainer>
            <PhotoContainer><Photo src='ShivangSir.png' alt='User Photo' /></PhotoContainer>
            <UserDescriptor>
                <Name>Shivang Patel</Name>
                <Email>Shivangpatel812gmail.com</Email>
            </UserDescriptor>
        </InnerContainer>
    </Container>
  )
}

export default DashBoardFooter