import Form from "../(components)/Form";
import PageWrapper from "../(components)/PageWrapper";
import Social from "../(components)/Social";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Me'
}

export default function Contact() {
  return (
    <PageWrapper>
      <main className="bg-black -mt-8 py-4">
        <section className="bg-black w-72 mx-auto h-full py-4 lg:mx-0 lg:flex lg:w-full lg:gap-10 lg:h-[90vh]">
          <Form />
          <section className="flex gap-2 justify-around items-center md:justify-center lg:flex-col lg:hidden">
            <div className="h-[1px] w-40 bg-white lg:w-[1px] lg:h-40"></div>
            <p className="text-[#DEC544] text-lg">OR</p>
            <div className="h-[1px] w-40 bg-white lg:w-[1px] lg:h-40"></div>
          </section>
          <Social />
        </section>
      </main>
    </PageWrapper>
  );
}
