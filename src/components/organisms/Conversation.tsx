import { ConversationHeader, MessageBubble, TextInput } from "components";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

export type Message = {
  date: string;
  content: string;
  type: "incoming" | "outgoing";
  status?: string;
};

type Props = {
  messages: Message[];
};

export const Conversation = ({ messages }: Props) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <ConversationHeader isActive imgSrc="./avatar.jpg" userName="John Doe" />

      <MessagesContainer ref={messagesContainerRef}>
        {messages.map((msg, index) => {
          return (
            <MessageBubble
              key={`bubble-${msg.date}${index}`}
              showDeliveryInfo={index === messages.length - 1}
              content={msg.content}
              status={msg?.status}
              type={msg.type as any}
            />
          );
        })}
      </MessagesContainer>
      <TextInput />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  overflow: auto;
  gap: 2px;
`;
