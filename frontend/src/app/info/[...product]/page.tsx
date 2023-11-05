export default function InfoPage({
  params,
}: {
  params: { product: string[] };
}) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between px-60 py-24">
      <h1>Info page</h1>
      <p>{params.product[0]}</p> + <p>{params.product[1]}</p>
    </main>
  );
}
