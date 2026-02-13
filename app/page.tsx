import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-3xs items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/irregular_logo.svg"
          alt="The Irregular show Logo"
          width={906}
          height={377}
          priority
        />
      </div>

      <hr className="my-8" />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_M9WkEJisHo?si=X7Ie44X0AOJFnEPc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <hr className="my-8" />

      <div className="container mx-auto px-4">
        <p>
          The Irre.Gular Show is a monthly cabaret-style variety show
          (May-September) that combines drag, circus, music, comedy, and fire
          performances. 2026 marks its fourth season at the venue Nirgendwo in
          Friedrichshain. The project aims to continue creating a safe,
          inclusive space where queer and neurodivergent people are visible,
          understood, and celebrated. Each show explores a chosen theme,
          features two guest performers, consists of two performances per half,
          an intermission, and a closing fire act, and celebrates mistakes as a
          natural part of the creative process.
        </p>
      </div>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">Shows</h3>
      <ul className="flex w-full justify-between text-center text-sm font-medium text-gray-500">
        <li className="flex-1">
          <a href="#2023">2023</a>
        </li>
        <li className="flex-1">
          <a href="#2024">2024</a>
        </li>
        <li className="flex-1">
          <a href="#2025">2025</a>
        </li>
        <li className="flex-1 font-bold active">
          <a href="#2026">2026</a>
        </li>
      </ul>
      <div className="border-t border-gray-300 w-full my-4" id="2023">
        <h3 className="text-2xl font-bold mb-4">Shows 2023</h3>
        <ul>
          <li>Thursday 27th July 2023 (Theme: Glue)</li>
          <li>Thursday 30th August 2023 (Theme: Way back when)</li>
          <li>Thursday 28th September 2023 (Theme: Trauma)</li>
          <li>Friday 29th December 2023 (Theme: Chimbo limbo)</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4" id="2024">
        <h3 className="text-2xl font-bold mb-4">Shows 2024</h3>
        <ul>
          <li>Thursday 13nd June 2024 (Theme: Insects)</li>
          <li>Thursday 11th July 2024 (Theme: Monsters)</li>
          <li>Thursday 8th August 2024 (Theme: Medieval)</li>
          <li>Thursday 12th September 2024 (Theme: Clown takeover)</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4" id="2025">
        <h3 className="text-2xl font-bold mb-4">Shows 2025</h3>
        <ul>
          <li>Thursday 22nd May 2025 (Theme: Mushroom)</li>
          <li>Thursday 11th June 2025 (Theme: Dysmorphia/ Dysphoria)</li>
          <li>Thursday 24th July 2025 (Theme: Birthday)</li>
          <li>Thursday 18th September 2025 (Theme: Magic)</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4" id="2026">
        <h3 className="text-2xl font-bold mb-4">Shows 2026</h3>
        <p>(TBC)</p>
      </div>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">Time:</h3>
      <p>19:00 Doors</p>
      <p>20:00 Show starts</p>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">Where:</h3>
      <p>Nirgendwo, Helsingforser Str. 10, 10243 Berlin (Next to Berghain)</p>

      <hr className="my-8" />

      <ul>
        <li>
          <a
            href="https://www.instagram.com/the.irre.gular.show/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
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
        </li>
        <li>
          <a
            href="https://www.eventbrite.de/cc/the-irregular-show-sason-3-4272873"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Tickets</span>
            <Image
              className="h-8 w-8"
              src="/eventbrite_logo.svg"
              alt="Eventbrite Logo"
              width={145}
              height={28}
              priority
            ></Image>
          </a>
        </li>
      </ul>
    </main>
  );
}
