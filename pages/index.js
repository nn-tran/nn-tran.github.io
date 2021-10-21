import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import userData from "@constants/data";
import Landing from "@components/Landing";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Nguyen Tran"
    >
      <Landing/>
    </ContainerBlock>
  );
}
