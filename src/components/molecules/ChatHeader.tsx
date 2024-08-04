import { Avatar, MsgCount } from "components/atoms";
import { LinkWrapper } from "components/atoms/LinkWrapper";

import styled from "styled-components";

type Props = {
  name: string;
  lastMsg: string;
  lastMsgDate: string;
  isActive?: boolean;
  conversationId: string;
};

export const ChatHeader = (props: Props) => {
  return (
    <LinkWrapper to={`/conversation/${props.conversationId}`}>
      <Container>
        <Avatar imgSrc="./avatar.jpg" isActive={!!props.isActive} />
        <ConversationInfo>
          <p>{props.name}</p>
          <p>{props.lastMsg.substring(0, 8)}...</p>
        </ConversationInfo>
        <LastMsgInfo>
          <MsgDate>{props.lastMsgDate}</MsgDate>
          <MsgCount count={10} />
        </LastMsgInfo>
      </Container>
    </LinkWrapper>
  );
};

const LastMsgInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: flex-end;
`;

const MsgDate = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textDisabled};
`;

const ConversationInfo = styled.div`
  p {
    margin: 0;
  }
`;
const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 10px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    * {
      color: ${({ theme }) => theme.colors.textDark};
    }
  }
`;
