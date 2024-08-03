import { useTranslation } from "react-i18next";
import styled, { css, useTheme } from "styled-components";
import { IoMdPerson } from "react-icons/io";
import { Button, TextInput, PasswordInput } from "components";
import { useLoginForm } from "hooks";

export const LoginPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { formik } = useLoginForm(() => {});

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Content>
          <h1>{t("auth.common.title")}</h1>
          <TextInput
            name="login"
            icon={<IoMdPerson size={theme.typography.fontSize.xlarge} />}
            placeholder={t("auth.inputs.login.placeholder")}
            value={formik.values.login}
            onChange={formik.handleChange}
            error={formik.errors.login}
          />
          <PasswordInput
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Button type="submit" variant="primary" text="Log in" />

          <p>
            New to Live Chat? <a href="">Join now</a>
          </p>
        </Content>
      </form>
    </Container>
  );
};

const centeredFlexContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  ${centeredFlexContainerCss}
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;
