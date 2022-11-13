import Link from "next/link";
import { SuccessContainer, SuccessImage } from "../../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <SuccessImage></SuccessImage>

      <p>Uhuul <strong>Jamal</strong>, sua <strong>camiseta destroyed silver</strong> já está a caminho da sua casa.</p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  );
}
