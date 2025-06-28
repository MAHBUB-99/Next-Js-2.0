export default function Sidebar({ docs }) {
  const roots = docs.filter((doc) => !doc.parent);
  console.log(roots);

  return (
    <>
      {docs.map((doc) => {
        <div>Sidebar</div>;
      })}
    </>
  );
}
