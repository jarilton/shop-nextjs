import { useRouter } from "next/router";
import {
  ImgContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImgContainer>minha imagem...</ImgContainer>

      <ProductDetails>
        <h1>Detalhes do produto</h1>

        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum
          optio nam explicabo eligendi unde vitae rerum ipsa. Aliquid minima sed
          praesentium illo similique, maiores sint blanditiis voluptas ex velit!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
