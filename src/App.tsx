import { Container } from './components/Container';
import { Logo } from './components/Logo';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>Menu</Container>
      <Container>Form</Container>
      <Container>Footer</Container>
    </>
  );
}
