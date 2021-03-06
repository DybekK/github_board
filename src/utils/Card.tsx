import React from "react";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "6em",
  width: 1000,
  minWidth: 500
});

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}
