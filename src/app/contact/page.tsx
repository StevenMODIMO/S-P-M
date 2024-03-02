import Form from "../(components)/Form";
import PageWrapper from "../(components)/PageWrapper";
import Social from "../(components)/Social";

export default function Contact() {
  return (
    <PageWrapper>
      <main className="bg-black -mt-8 py-4">
        <section className="bg-black w-72 mx-auto h-full py-4 lg:w-[1300px] lg:flex lg:gap-4 justify-center lg:h-screen">
          <Form />
          <Social />
        </section>
      </main>
    </PageWrapper>
  );
}
