import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Modimo\'s Dashboard',
  description: 'Dashboard page where I monitor my private stuffs.'
}

export default function Dashboard() {
  return (
    <main>
      <h1 className="text-center text-3xl font-bold text-white">
        Modimo's Dashboard
      </h1>
    </main>
  );
}
