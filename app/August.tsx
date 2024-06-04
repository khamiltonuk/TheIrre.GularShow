import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/irregular_logo.svg"
          alt="The Irregular show Logo"
          width={906}
          height={377}
          priority
        />
      </div>

      <p>Show dates</p>
      <ul>
        <li>
          Thursday 13th June 2024{" "}
          <a
            href="https://www.eventbrite.de/e/the-irregular-show-tickets-903284707877?aff=erelexpmlt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 visited:text-purple-600"
          >
            Tickets
          </a>
        </li>
        <li>
          Thursday 11th July 2024{" "}
          <a
            href="https://www.eventbrite.de/e/the-irregular-show-tickets-903285620607?aff=erelexpmlt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 visited:text-purple-600"
          >
            Tickets
          </a>
        </li>
        <li>
          Thursday 8th August 2024{" "}
          <a
            href="https://www.eventbrite.de/e/the-irregular-show-tickets-903285329737?aff=erelexpmlt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 visited:text-purple-600"
          >
            Tickets
          </a>
        </li>
        <li>
          Thursday 12th September 2024{" "}
          <a
            href="https://www.eventbrite.de/e/the-irregular-show-tickets-903285430037?aff=erelexpmlt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 visited:text-purple-600"
          >
            Tickets
          </a>
        </li>
      </ul>
      <p>19:00 Doors</p>
      <p>20:00 Show starts</p>
      <p>
        Where: Nirgendwo, Helsingforser Str. 10, 10243 Berlin (Next to Berghain)
      </p>
      <a
        href="https://www.instagram.com/the.irre.gular.show/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Instagram</span>
        <Image
          className="h-8 w-8"
          src="/instagram.svg"
          alt="Instagram Logo"
          width={906}
          height={377}
          priority
        />
      </a>
    </main>
  );
}
