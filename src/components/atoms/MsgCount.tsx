import styled from "styled-components";

type Props = {
  count: number;
};

export const MsgCount = ({ count }: Props) => {
  const currentNumber = count > 99 ? 99 : count;
  return <Counter>{currentNumber}</Counter>;
};

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.radius.round};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.accent};
  width: 1.5em;
  height: 1.5em;
`;
