import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImgContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreateCkeackout, setIsCreateCkeackout] = useState(false);

  async function habdleBuyProduct() {
    try {
      setIsCreateCkeackout(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      //Conectar com uma ferramenta de observabilidade (datadog / sentry)

      setIsCreateCkeackout(false);
      alert("Falha ao rediricionar ao checkout!");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Shop Next</title>
      </Head>
      
      <ProductContainer>
        <ImgContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImgContainer>
        <ProductDetails>
          <h1>{product.name}</h1>

          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCreateCkeackout} onClick={habdleBuyProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Mi5Dn0ObJbshxU" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
