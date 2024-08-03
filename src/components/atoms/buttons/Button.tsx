import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

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

const primaryStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
`;
const secondaryStyles = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
const discreetStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
`;
const buttonStyles = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  discreet: discreetStyles,
};

const StyledButton = styled.button<{ variant: string }>`
  ${({ variant }) => buttonStyles[variant as keyof typeof buttonStyles]}

  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borders.radius.small};
`;
