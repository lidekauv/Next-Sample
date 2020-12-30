import styled, { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import { SEO } from "../components/SEO/SEO";
import { theme } from "../theme";
import Layout from "../components/Layouts/Layout";

const Title = styled.h1`
  text-align: center;
  font-family: "Dosis", sans-serif;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" favicon="/image.svg" description="Home Page" />
        <Container>
          <Title>Welcome!</Title>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}
