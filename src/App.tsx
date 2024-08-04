import { Conversation, Message, UsersList } from "components";
import "./App.css";
import styled from "styled-components";

function App() {
  const messages: Message[] = [
    {
      date: "04.08.2024 16:00",
      content:
        "Laboris ullamco laborum aliquip adipisicing. Laboris consectetur enim sunt enim consectetur ullamco ex irure amet. Minim mollit elit ipsum magna sit. Lorem culpa voluptate magna enim.",
      type: "incoming",
    },
    {
      date: "04.08.2024 16:30",
      content:
        "Anim sit mollit duis eiusmod aliqua. Esse anim qui duis mollit minim sunt incididunt culpa anim excepteur sit fugiat. In eiusmod ullamco voluptate aliquip fugiat officia dolor est voluptate enim adipisicing in quis magna. Sit cupidatat nisi mollit exercitation ex commodo ipsum officia dolor ad. Sit proident consequat reprehenderit irure do. Lorem pariatur reprehenderit amet consectetur laborum. Mollit Lorem labore aliquip amet.",
      type: "outgoing",
      status: "delivered",
    },
    {
      date: "04.08.2024 16:00",
      content:
        "Laboris ullamco laborum aliquip adipisicing. Laboris consectetur enim sunt enim consectetur ullamco ex irure amet. Minim mollit elit ipsum magna sit. Lorem culpa voluptate magna enim.",
      type: "incoming",
    },
    {
      date: "04.08.2024 16:30",
      content:
        "Laborum quis amet et adipisicing velit nostrud magna enim incididunt sint amet. Magna eu ea fugiat proident laboris ut aliquip exercitation ea enim do. Officia culpa irure officia ea enim fugiat reprehenderit pariatur mollit aute est.",
      type: "outgoing",
      status: "pending",
    },
    {
      date: "04.08.2024 16:30",
      content: "awjndawienfiufn adnwaid ",
      type: "outgoing",
      status: "error",
    },
  ];

  return (
    <Container>
      <UsersList />
      <Conversation messages={messages} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
`;

export default App;
