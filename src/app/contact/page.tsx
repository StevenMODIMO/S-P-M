import Form from "../(components)/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function Contact() {
  return (
    <main className="bg-black -mt-8 py-4">
      <section className="bg-black w-72 mx-auto h-full py-4 lg:h-[90vh]">
        <Form />
      </section>
    </main>
  );
}
