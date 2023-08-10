import "highlight.js/styles/github-dark.css";
import { GetStaticPathsResult, GetStaticProps } from "next";
import { getCategories, getPostByName, getPostsMeta } from "@/utils/posts";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote";
import CustomModal from "@/components/common/customModal";
import Div from "@/components/post/Div";
import { useRouter } from "next/router";
import Spacer from "@/components/post/Spacer";
import TabTag from "@/components/post/TabTag";
import Utterances from "@/components/common/utterances";
import TextTag from "@/components/post/TextTag";
import Image from "next/image";
import NotFound from "@/pages/404";

type Props = {
  meta: Meta;
  compiledSource: MDXRemoteSerializeResult;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getPostsMeta();
  const categories = await getCategories();

  if (posts === undefined || categories === undefined) {
    return { paths: [], fallback: "blocking" };
  }

  const paths = categories.flatMap((category) =>
    posts
      .filter((post) => post.id.startsWith(category))
      .map((post) => ({
        params: { categoryId: category, postId: post.id },
      }))
  );

  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { categoryId, postId } = context.params as {
    categoryId: string;
    postId: string;
  };

  const post = await getPostByName(`${categoryId}/${postId}.mdx`);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      meta: post.meta,
      compiledSource: post.compiledSource,
    },
    revalidate: 86400,
  };
};

const Post = ({ meta, compiledSource }: Props) => {
  const route = useRouter();

  return (
    <>
      <CustomModal modalName={meta.title} width="80vw" height="70vh" left="10%">
        <div
          className="post"
          style={{ width: "100%", height: "60vh", overflowY: "scroll" }}
        >
          <span style={{ fontSize: "2rem" }}>{meta.title}</span>
          <div
            style={{
              fontSize: "1rem",
              color: "#424242",
              display: "flex",
              width: "100%",
              justifyContent: "end",
            }}
          >
            {meta.date}
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "end",
            }}
          >
            <Image
              src="https://user-images.githubusercontent.com/86397600/236613570-1475d4e4-44b7-4c02-88a3-160e4db52d99.png"
              width={30}
              height={30}
              alt="postButton"
            />
            <TextTag>{`Tag: `}</TextTag>
            {meta.tags.map((tag) => (
              <TextTag key={tag}>
                <a>{`[${tag}]`}</a>
              </TextTag>
            ))}
          </div>
          <Div />
          <article>
            <MDXRemote {...compiledSource}></MDXRemote>
          </article>
          {/* Add your related items back here */}
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Div />
          <TextTag>
            <TabTag>
              <TabTag>개인 공부 기록용 블로그입니다</TabTag>
            </TabTag>
            <TabTag>
              <TabTag>잘못된 내용이 있다면 꼭 알려주세요!</TabTag>
            </TabTag>
          </TextTag>
          <Div />
          <Utterances />
          <Div />
          <button
            onClick={() => route.back()}
            style={{ fontSize: "2rem", color: "#e058d0" }}
          >
            ← Back to List
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default Post;
