import styled from "styled-components";
import { Avatar } from "components";

type Props = {
  imgSrc: string;
  userName: string;
  isActive: boolean;
};

export const ConversationHeader = ({ imgSrc, userName, isActive }: Props) => {
  return (
    <Container>
      <Avatar imgSrc={imgSrc} isActive={isActive} />
      <UserName>{userName}</UserName>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
  border-bottom: ${({ theme }) =>
    `${theme.borders.sizes.thin} solid ${theme.colors.border}`};
`;
const UserName = styled.h1`
  margin: 0;
`;
