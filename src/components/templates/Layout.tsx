import { Navbar } from "components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {
  return (
    <Container>
      <Navbar />
      <ChildrenContainer>
        <Outlet />
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const ChildrenContainer = styled.div`
  flex: 1;
`;
