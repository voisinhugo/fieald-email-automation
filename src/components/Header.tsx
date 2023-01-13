import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

export const HEADER_HEIGHT = 80;

export const Header: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => <Container>{children}</Container>;

const Container = styled.div(({ theme }) => ({
  display: "flex",
  position: "fixed",
  top: 0,
  zIndex: 1,
  height: HEADER_HEIGHT,
  width: "-webkit-fill-available",
  paddingLeft: theme.margin.x4,
  paddingRight: theme.margin.x4,
  backgroundColor: theme.color.white,
  boxShadow: "2px 2px",
  alignItems: "center",
  justifyContent: "space-between",
}));
