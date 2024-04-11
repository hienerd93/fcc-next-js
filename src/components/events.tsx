import Image from "next/image";
import Link from "next/link";

export default function Events({ data }: { data: any[] }) {
  return (
    <>
      {data.map((event: any) => (
        <Link href={`/events/${event.id}`} key={event.id} passHref>
          <Image src={event.image} alt={event.title} width={200} height={200} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </>
  );
}
