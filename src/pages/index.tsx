import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import tShirt from "../assets/img/tshirt.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tShirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={tShirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
