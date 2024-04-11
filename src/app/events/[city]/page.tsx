import { getMockJson } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const { events_categories: data } = await getMockJson("/src/data/data.json");
  return data.map((ev: any) => ({
    city: ev.id.toString(),
  }));
}
export const dynamicParams = false;

export default async function EventsPerCityPage({
  params,
}: {
  params: { city: string };
}) {
  const { allEvents } = await getMockJson("/src/data/data.json");
  const data = allEvents.filter((ev: any) => ev.city === params.city);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Events in {params.city}</h1>
      {data.map((ev: any) => (
        <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id} passHref>
          <Image src={ev.image} alt={ev.title} width={300} height={300} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
}
