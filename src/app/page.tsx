import Events from "@/components/events";
import { getMockJson } from "@/data/mock";

export default async function Home() {
  const { events_categories: data } = await getMockJson("/src/data/data.json");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Events data={data} />
    </main>
  );
}
