import { centeredFlex } from "theme";
import { IconButton } from "components/atoms/buttons/IconButton";
import { ChangeEvent } from "react";
import { CiSquarePlus } from "react-icons/ci";
import styled from "styled-components";
import { SearchInput } from "components/atoms/inputs/SearchInput";
import { useTranslation } from "react-i18next";

type Props = {
  value: string;
  setValue: (val: string) => void;
};

export const SearchConv = ({ value, setValue }: Props) => {
  const { t } = useTranslation();

  const handleReset = () => {
    setValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <SearchInput
        placeholder={t("conversations.inputs.search.placeholder")}
        value={value}
        onChange={handleChange}
        onClear={handleReset}
      />
      <IconButton icon={<CiSquarePlus />} />
    </Container>
  );
};

const Container = styled.div`
  ${centeredFlex}
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm};
`;
