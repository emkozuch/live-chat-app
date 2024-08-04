import { DeliveryStatus } from "components";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  type: "incoming" | "outgoing";
  status?: string;
  content: string;
  showDeliveryInfo: boolean;
};

export const MessageBubble = ({
  type,
  status,
  content,
  showDeliveryInfo,
}: Props) => {
  const [showDelivery, setShowDelivery] = useState(showDeliveryInfo);

  return (
    <Container type={type}>
      <Bubble onClick={() => setShowDelivery((prev) => !prev)} type={type}>
        {content}{" "}
      </Bubble>
      {showDelivery && (
        <DeliveryInfo>
          <DeliveryStatus status={status} />
          <p>19:55</p>
        </DeliveryInfo>
      )}
    </Container>
  );
};

const DeliveryInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: ${({ type }) =>
    type === "incoming" ? "flex-start" : "flex-end"};
`;

const Bubble = styled.div<{ type: string }>`
  cursor: pointer;
  max-width: 25vw;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, type }) =>
    type === "incoming" ? theme.colors.background : theme.colors.primaryDark};
  border: ${({ theme }) =>
    `${theme.borders.sizes.thin} solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borders.radius.medium};
`;
