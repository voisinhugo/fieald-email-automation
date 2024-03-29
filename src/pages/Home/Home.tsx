import { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchArtistInfo } from "api/sheets/fetchArtistInfo";
import { Button } from "components/Button";
import { Header, HEADER_HEIGHT } from "components/Header";

import { EmailForm } from "./EmailForm";
import { useAuthContext } from "modules/auth/AuthContext";

export const Home = () => {
  const [artistOptions, setArtistOptions] = useState<ArtistInfo[]>();
  const { accessToken, isLoggedIn, logoutWithGoogle } = useAuthContext();

  useEffect(() => {
    const fetch = async () => {
      if (accessToken) {
        const artistInfo = await fetchArtistInfo(accessToken);
        setArtistOptions(artistInfo);
      }
    };
    fetch();
  }, [accessToken]);

  return (
    <Container>
      <Header>
        <HeaderTitle>{"Envoi automatisé d'email"}</HeaderTitle>
        {isLoggedIn ? (
          <Button onClick={logoutWithGoogle}>Se déconnecter</Button>
        ) : null}
      </Header>
      <BodyContainer>
        <EmailForm artistOptions={artistOptions} />
      </BodyContainer>
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  height: "100%",
  backgroundColor: theme.color.secondary,
}));

const HeaderTitle = styled.h1(({ theme }) => ({
  color: theme.color.black,
}));

const BodyContainer = styled.div(({ theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  marginTop: HEADER_HEIGHT,
  marginLeft: "20%",
  marginRight: "20%",
  "@media (max-width: 768px)": {
    marginLeft: theme.margin.x2,
    marginRight: theme.margin.x2,
  },
  justifyContent: "space-between",
}));
