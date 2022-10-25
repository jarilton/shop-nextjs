import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoIMG from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Container>
        <Header>
          <img src={logoIMG.src} alt="Logo do projeto" />
        </Header>
      </Container>
      <Component {...pageProps} />
    </div>
  );
}
