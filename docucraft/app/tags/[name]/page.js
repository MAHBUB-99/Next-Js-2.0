import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentByTag } from "@/doc-util";
import { getDocuments } from "@/lib/doc";

export default function TagsPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByTag(docs, name);
  console.log(matchedDocuments);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
