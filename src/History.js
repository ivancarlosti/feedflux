import { thunder } from "./apis/axios";
import Content from "./components/Content";
import { ContentProvider } from "./components/ContentContext";

export default function History() {
  const getEntries = async (offset = 0) => {
    const url = `/v1/entries?order=changed_at&direction=desc&status=read&offset=${offset}`;

    return await thunder.request({ method: "get", url });
  };

  return (
    <ContentProvider>
      <Content info={{ from: "history", id: "" }} getEntries={getEntries} />
    </ContentProvider>
  );
}