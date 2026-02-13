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

      <h3 className="text-2xl font-bold mb-4">The Irregular Show</h3>
      <p>
        620 The Irre.Gular Show is a monthly cabaret-style variety show
        (May-September) that combines drag, circus, music, comedy, and fire
        performances. 2026 marks its fourth season at the venue Nirgendwo in
        Friedrichshain. The project aims to continue creating a safe, inclusive
        space where queer and neurodivergent people are visible, understood, and
        celebrated. Each show explores a chosen theme, features two guest
        performers, consists of two performances per half, an intermission, and
        a closing fire act, and celebrates mistakes as a natural part of the
        creative process.
      </p>

      <h3 className="text-2xl font-bold mb-4">Shows</h3>
      <ul>
        <li>2023</li>
        <li>2024</li>
        <li>2025</li>
        <li className="font-bold active">2026</li>
      </ul>
      <div className="border-t border-gray-300 w-full my-4">
        <h3 className="text-2xl font-bold mb-4">Shows 2023</h3>
      </div>
      <div className="border-t border-gray-300 w-full my-4">
        <h3 className="text-2xl font-bold mb-4">Shows 2024</h3>
      </div>
      <div className="border-t border-gray-300 w-full my-4">
        <h3 className="text-2xl font-bold mb-4">Shows 2025</h3>
        <ul>
          <li>
            Thursday 22nd May 2025 (Theme: Mushroom)
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
            Thursday 11th June 2025{" "}
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
            Thursday 24th July 2025{" "}
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
            Thursday 18th August 2025{" "}
            <a
              href="https://www.eventbrite.de/e/the-irregular-show-tickets-903285620607?aff=erelexpmlt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 visited:text-purple-600"
            >
              Tickets
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4">
        <p>Shows 2026(TBC)</p>
      </div>

      <h3 className="text-2xl font-bold mb-4">Time:</h3>
      <p>19:00 Doors</p>
      <p>20:00 Show starts</p>

      <h3 className="text-2xl font-bold mb-4">Where:</h3>
      <p>Nirgendwo, Helsingforser Str. 10, 10243 Berlin (Next to Berghain)</p>
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
