import { FunctionComponent, useCallback, ChangeEvent } from "react";
import styled from "styled-components";

import { Card } from "./Card";

type Props = {
  title: string;
  value: string;
  setValue: (value: string) => void;
};

export const InputCard: FunctionComponent<Props> = ({
  title,
  value,
  setValue,
  ...props
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value),
    [setValue]
  );

  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Input value={value} onChange={onChange}></Input>
    </Container>
  );
};

const Container = styled(Card)(({ theme }) => ({
  marginTop: theme.margin.x2,
  marginBottom: theme.margin.x2,
  alignItems: "center",
}));

const Title = styled.h3(({ theme }) => ({
  marginRight: theme.margin.x2,
}));

const Input = styled.input({
  display: "flex",
  flexGrow: 1,
  height: 30,
});
