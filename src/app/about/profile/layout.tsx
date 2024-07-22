export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>title</h1>
      <div>{children}</div>
    </>
  );
}
