import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return <h1>Tela de produtos: {JSON.stringify(query)}</h1>;
}
