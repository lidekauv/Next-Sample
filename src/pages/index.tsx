import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { SEO } from '../components/SEO/SEO'

const Title = styled.h1`
  text-align: center;
  font-family: 'Dosis', sans-serif;
`

export default function Home() {
  return (
    <>
      <SEO title="Home" favicon="/image.svg" description="Home Page" />
      <Container>
        <Title>Welcome!</Title>
      </Container>
    </>
  )
}
