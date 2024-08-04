import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  children: ReactElement;
  to: string;
};

export const LinkWrapper = ({ children, to }: Props) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
