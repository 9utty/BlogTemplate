import Image from "next/image";
import { getCategories } from "@/utils/posts";
import Folder from "@/components/common/folder";
import { Col, Row } from "antd";

interface props {
  categories: string[];
}

export const getServerSideProps = async () => {
  const categories = await getCategories();

  if (categories === undefined) {
    return { notFound: true };
  }
  return {
    props: {
      categories,
    },
  };
};

export default function Home({ categories }: props) {
  return (
    <section id="home">
      <div style={{ color: "white", maxHeight: "80vh" }}>
        <Row>
          {categories &&
            categories.map((cate) => {
              return <Folder key={cate} FolderName={cate} />;
            })}
        </Row>
      </div>
    </section>
  );
}
