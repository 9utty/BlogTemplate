import CustomModal from "@/components/common/customModal";
import PostButton from "@/components/common/postButton";
import { getPostsMeta } from "@/utils/posts";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface props {
  posts: Meta[];
}

export const getServerSideProps = async () => {
  const posts = await getPostsMeta();

  return {
    props: {
      posts,
    },
  };
};

export default function CategoryPage({ posts }: props) {
  const route = useRouter();
  const { categoryId } = route.query;

  if (categoryId === undefined) return null;

  // categoryId에 맞는 포스트만 필터링
  const filteredPosts = posts.filter((post) => {
    // post.id 값을 '/'를 기준으로 분할하여 카테고리 부분만 가져옵니다.
    const postCategory = post.id.split("/")[0];
    return postCategory === categoryId;
  });

  return (
    <>
      <CustomModal
        modalName={categoryId as string}
        width="80vw"
        height="70vh"
        left="10%"
      >
        <div style={{ height: "60vh", width: "100%", overflowY: "scroll" }}>
          {filteredPosts &&
            filteredPosts.map((post) => {
              return (
                <PostButton
                  key={post.id}
                  Header={post.title}
                  Date={post.date}
                  Tag={post.tags}
                  filePath={post.id}
                />
              );
            })}
        </div>
      </CustomModal>
    </>
  );
}
