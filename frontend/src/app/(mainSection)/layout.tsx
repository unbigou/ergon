import Header from "@/components/mainPage/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <Header />
      {children}
    </section>
  );
}
