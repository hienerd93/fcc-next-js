import { getMockJson } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";

export default async function EventsPage() {
  const { events_categories: data } = await getMockJson("/src/data/data.json");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Events Page</h1>
      {data.map((event: any) => (
        <Link href={`/events/${event.id}`} key={event.id} passHref>
          <Image src={event.image} alt={event.title} width={200} height={200} />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </main>
  );
}
