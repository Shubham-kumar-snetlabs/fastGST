import styled from "styled-components";
import {
  ArrowSVG,
  ChatIconSVG,
  crossSVG,
  LunchSVG,
  MeetingSVG,
  SickSVG,
  TravellingSVG,
  VacationingSVG,
} from "../../svg/svg";
import MultiFunctionInputComponent from "../../components/atoms/MultiFunctionInputComponent";
import { useState } from "react";
import DropdownComponent from "../../components/atoms/DropdownComponent";
import MultiFunctionButtonComponent from "../../components/atoms/MultiFunctionButtonComponent";
import { useNavigate } from "react-router-dom";
import { label } from "framer-motion/client";
import EmojiPicker from "emoji-picker-react";

const Container = styled.div``;

const TitleContainer = styled.div`
  width: 335px;
  height: 38px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  box-sizing: border-box;
  background: #e4f4ff;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #657786;
`;

const StatusInputAndButtonDiv = styled.div`
  width: 335px;
  height: 216px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StatusInputDiv = styled.div`
  width: 303px;
  height: 124px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StatusDropdownDiv = styled.div`
  width: 303px;
  height: 54px;
  display: flex;
  gap: 10px;
`;

const SquareStatusIconDiv = styled.div`
  height: 54px;
  width: 54px;
  border-radius: 4px;
  border: 1px solid #657786;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  top : 300px;
  right : 500px;
  z-index: 100;
`;

const SuggestionBlock = styled.div`
  height: 36px;
  width: 335px;
  padding: 10px 16px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  background: #e1e8ed;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: #657786;
`;

const SuggestionsDiv = styled.div`
  width: 335px;
  height: 168px;
  padding: 4px 0 4px 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InnerSuggestionsDiv = styled.div`
  height: 160px;
  width: 319px;
  display: flex;
  flex-direction: column;
`;

const InnerSuggestionsItems = styled.div`
  width: 319px;
  height: 32px;
  padding: 8px;
  display: flex;
  gap: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: #b9dcf7;
  }
`;

const SuggestionItemsTitle = styled.div`
  width: auto;
  height: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #14171a;
`;

const Arrow = styled.div`
  height: 14px;
  width: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #657786;
`;

const Duration = styled.div`
  width: auto;
  height: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #657786;
`;

interface StatusItems {
  id: number;
  icon: JSX.Element;
  title: string;
  duration: string;
}

const statusItems: StatusItems[] = [
  {
    id: 1,
    icon: TravellingSVG,
    title: "Travelling",
    duration: "30 minutes",
  },
  {
    id: 2,
    icon: LunchSVG,
    title: "Lunch",
    duration: "1 hour",
  },
  {
    id: 3,
    icon: MeetingSVG,
    title: "In Meeting",
    duration: "1+ hours",
  },
  {
    id: 4,
    icon: SickSVG,
    title: "Out Sick",
    duration: "Today",
  },
  {
    id: 5,
    icon: VacationingSVG,
    title: "Vacationing",
    duration: "Don’t clear",
  },
];

const SetStatus = () => {
  const [titleValue, setTitleValue] = useState("");
  const [durationValue, setDurationValue] = useState("");

  const [emojiPicker, setEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<React.ReactElement>();

  const navigate = useNavigate();

  const handleEmojiClick = (emojiObject: any) => {
    setSelectedEmoji(emojiObject.emoji);
    setEmojiPicker(false);
  };

  const handleSuggestionsClicked = (item: any) => {
    setTitleValue(item.title);
    setDurationValue(item.duration);
    setSelectedEmoji(item.icon);
  };

  const handleButtonClicked = () => {
    if (titleValue) {
      navigate("your-status", {
        state: {
          statusText: titleValue,
          duration: durationValue || "Custom Duration",
        },
      });
    }
  };

  return (
    <Container>
      <TitleContainer>
        Set a Status
        {crossSVG}
      </TitleContainer>
      <StatusInputAndButtonDiv>
        <StatusInputDiv>
          <MultiFunctionInputComponent
            placeholder="What’s your status?"
            label="Status"
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
          <StatusDropdownDiv>
            <SquareStatusIconDiv onClick={() => setEmojiPicker(!emojiPicker)}>
              {selectedEmoji || ChatIconSVG}
              {emojiPicker && (
                <EmojiPickerContainer onClick={(e) => e.stopPropagation()}>
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </EmojiPickerContainer>
              )}
            </SquareStatusIconDiv>
            <DropdownComponent
              text={durationValue ? durationValue : "Clear Until"}
              height="54px"
              width="239px"
              borderRadius="4px"
              justifyContent="space-between"
              options={statusItems.map((item) => ({
                value: item ? item.duration : durationValue,
                label: item ? item.duration : durationValue,
              }))}
              onChange={(e) => setDurationValue(e.target.value)}
            />
          </StatusDropdownDiv>
        </StatusInputDiv>
        <MultiFunctionButtonComponent
          text="Save"
          background={titleValue ? "#1DA1F2" : "#B9DCF7"}
          width="303px"
          height="36px"
          borderRadius="1000px"
          padding="10px 16px"
          onClick={() => handleButtonClicked()}
        />
      </StatusInputAndButtonDiv>
      <SuggestionBlock>Suggestions</SuggestionBlock>
      <SuggestionsDiv>
        <InnerSuggestionsDiv>
          {statusItems.map((item) => (
            <InnerSuggestionsItems
              key={item.id}
              onClick={() => handleSuggestionsClicked(item)}
            >
              {item.icon}
              <SuggestionItemsTitle>{item.title}</SuggestionItemsTitle>
              <Arrow>{ArrowSVG}</Arrow>
              <Duration>{item.duration}</Duration>
            </InnerSuggestionsItems>
          ))}
        </InnerSuggestionsDiv>
      </SuggestionsDiv>
    </Container>
  );
};

export default SetStatus;
