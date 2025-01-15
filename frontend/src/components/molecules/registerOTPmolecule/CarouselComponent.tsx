import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 392px;
  height : 132px;
  
  gap: 10px;
  border-radius: 4px;
  color: #FFFFFF;
  background: #FFFFFF33;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;  
`;

const Slide = styled.div<{ isActive: boolean }>`
  width: 344px;
  height: 100px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: ${({ isActive }) => (isActive ? "0" : "-100%")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: all 0.5s ease-in-out;
`;

const Comment = styled.p`
  width: 348px;
  height: 44px;
  position : relative;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #FFFFFF;
`;

const Photo = styled.img`
  width: 32px;
  height: 32px;
  gap: 0px;
  border-radius: 4px ;
  opacity: 0px;

`;

const Name = styled.h3`
  width: 83px;
  height: 16px;
  gap: 0px;
  opacity: 0px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #FFFFFF;
  margin: 0px;
`;

const Profession = styled.p`
  width: 16px;
  height: 12px;
  top: 22px;
  gap: 0px;
  opacity: 0px;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #FFFFFF;
  margin-top: 5px;
`;


const DotsContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 12px;
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 42px;
  height: 6px;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#AABBC2')};
  cursor: pointer;
`;

const CarouselComponent = () => {
    const slides = [
        {
          name: 'Apoorva K.',
          profession: 'CA',
          comment: 'Simply unbelievable! I am really satisfied with the app.',
          photo: '/image.png', 
        },
        {
          name: 'Amit K.',
          profession: 'SDE',
          comment: 'Whenever you want to make good financial decisions, use FastGST',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s', 
        },
        {
          name: 'Ram S.',
          profession: 'SDE',
          comment: 'Really helpful for gathering all information about GST',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s', 
        },
        
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval); 
    }, [currentIndex]);

    return (
        <>
        <Container>
        {slides.map((slide, index) => (
          <Slide key={index} isActive={index === currentIndex}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Comment>{slide.comment}</Comment>
              <div style={{ display: 'flex', alignContent: 'center', gap: '15px' }}>
                <Photo src={slide.photo} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Name>{slide.name}</Name>
                  <Profession>{slide.profession}</Profession>
                </div>
              </div>
            </div>
          </Slide>
        ))}
        </Container>
        <DotsContainer>
            <DotsWrapper>
            {slides.map((_, index) => (
            <Dot
                key={index}
                isActive={index === currentIndex}
            />
            ))}
            </DotsWrapper>
        </DotsContainer>
        </>
    );
};

export default CarouselComponent;
