import styled, { useTheme } from "styled-components";
import { FaGear } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { Avatar } from "components";
import { Link, useLocation } from "react-router-dom";
import { routes } from "utils";
import { useMemo } from "react";

export const Navbar = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const items = useMemo(
    () => [
      {
        name: "chats",
        path: routes.root,
        icon: <IoChatboxEllipses size={theme.typography.fontSize.xxlarge} />,
        isActive: pathname === routes.root,
      },
      {
        name: "settings",
        path: routes.settings,
        icon: <FaGear size={theme.typography.fontSize.xxlarge} />,
        isActive: pathname === routes.settings,
      },
    ],
    [pathname, theme]
  );

  return (
    <Container>
      <AvatarContainer>
        <Link to="/">
          <Avatar size={60} imgSrc="./avatar.jpg" />
        </Link>
      </AvatarContainer>
      {items.map((item) => {
        return (
          <NavbarItem $isActive={item.isActive} to={item.path} key={item.name}>
            {item.icon}
          </NavbarItem>
        );
      })}
    </Container>
  );
};

const NavbarItem = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primaryDark : theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  height: 50px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const AvatarContainer = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
