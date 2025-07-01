import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentByAuthor } from "@/doc-util";
import { getDocuments } from "@/lib/doc";

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByAuthor(docs, name);
  console.log(matchedDocuments)
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
