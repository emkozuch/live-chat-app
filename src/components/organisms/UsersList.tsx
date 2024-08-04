import styled from "styled-components";
import { ChatHeader } from "components/molecules/ChatHeader";
import { SearchConv } from "components/molecules/SearchConv";
import { useMemo, useState } from "react";

type ChatsOverviewDto = {
  name: string;
  lastMsg: string;
  lastMsgDate: string;
  isUserActive: boolean;
  id: string;
};

export const UsersList = () => {
  const [filter, setFilter] = useState("");

  const mockData: ChatsOverviewDto[] = [
    {
      id: "1",
      name: "John Doe",
      lastMsg: "some message",
      lastMsgDate: "10.02.2023",
      isUserActive: true,
    },
    {
      id: "2",
      name: "Adam Doe",
      lastMsg: "some message",
      lastMsgDate: "10.02.2023",
      isUserActive: false,
    },
    {
      id: "3",
      name: "Jane Doe",
      lastMsg: "some message",
      lastMsgDate: "10.02.2023",
      isUserActive: false,
    },
  ];

  const filteredData = useMemo(() => {
    return mockData.filter((entry) =>
      entry.name.toLowerCase().includes(filter.toLowerCase())
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Container>
      <SearchConv value={filter} setValue={setFilter} />

      {filteredData.length ? (
        filteredData.map((conv) => {
          return (
            <ChatHeader
              conversationId={conv.id}
              key={`chatHeader-${conv.id}`}
              name={conv.name}
              lastMsg={conv.lastMsg}
              lastMsgDate={conv.lastMsgDate}
              isActive={conv.isUserActive}
            />
          );
        })
      ) : (
        <NothingFoundMsg>Nothing found...</NothingFoundMsg>
      )}
    </Container>
  );
};

const NothingFoundMsg = styled.p`
  margin-left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textDisabled};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  border-right: ${({ theme }) =>
    `${theme.borders.sizes.thin} solid ${theme.colors.primaryDark}`};
  overflow: auto;
`;
