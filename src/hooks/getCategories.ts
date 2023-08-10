import { getCategories } from "@/utils/posts";

export async function getCategory() {
  const categories = await getCategories();

  if (!categories) {
    return [] as string[]; // 이 경우,404 페이지를 보여주게 됩니다.
  }
  return categories as string[];
}
