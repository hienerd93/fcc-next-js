import EventForm from "@/components/event-form";
import { getMockJson } from "@/data/mock";
import Image from "next/image";

export async function generateStaticParams() {
  const { allEvents: data } = await getMockJson("/src/data/data.json");
  return data.map((ev: any) => ({
    event: ev.id.toString(),
  }));
}
export const dynamicParams = false;

export default async function EventPage({
  params,
}: {
  params: { event: string };
}) {
  const { allEvents } = await getMockJson("/src/data/data.json");
  const data = allEvents.find((ev: any) => ev.id === params.event);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={data.image} alt={data.title} width={2048} height={2048} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <EventForm />
    </main>
  );
}
