import styled from 'styled-components';
import { usePhoneNumber } from "../../contexts/PhoneNumberContext";
import MultiFunctionInputComponent from '../atoms/MultiFunctionInputComponent';

const NumberComponent = styled.div`
  display: flex;
  justify-content: space-between;
  gap : 10px;
`;

const CountryCodeBlock = styled.div`
  width: 96px;
  height: 54px;
  border-radius: 4px;
  border: 1px solid #657786;
  background: #e1e8ed;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
`;

const Country = styled.div`
  width: 50px;
  height: 14px;
  color: #4c9eeb;
  position: relative;
  top: 8px;
  left: 8px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
`;

const CountryCode = styled.div`
  width: 26px;
  height: 16px;
  position: relative;
  top: 11px;
  left: 11px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;


const PhoneNumberComponent = () => {
  const { phoneNumber, setPhoneNumber } = usePhoneNumber();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value);
    
    
    let inputValue = e.target.value;
    if (/^\d{0,10}$/.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };



  return (
    <NumberComponent>
      <CountryCodeBlock>
        <Country>Country</Country>
        <CountryCode>+91</CountryCode>
      </CountryCodeBlock>
      <MultiFunctionInputComponent
      type='text'
      label='Phone Number'
      value={phoneNumber}
      onChange={handleInputChange}
      />
    </NumberComponent>
  )
}

export default PhoneNumberComponent;
