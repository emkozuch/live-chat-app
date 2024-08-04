import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { buttonStyles } from "./styles";

type Props = {
  variant?: "primary" | "secondary" | "discreet";
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, variant = "primary", ...props }: Props) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: string }>`
  ${({ variant }) => buttonStyles[variant as keyof typeof buttonStyles]}

  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borders.radius.small};
`;
