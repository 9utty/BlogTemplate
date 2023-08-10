import React from "react";

interface Props {
  content: any;
}

export default function Content({ content }: Props) {
  return <div>{content}</div>;
}
