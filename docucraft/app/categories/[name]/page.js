import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentByCategory } from "@/doc-util";
import { getDocuments } from "@/lib/doc";

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByCategory(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
