import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");
  const t2023 = useTranslations("Shows2023");
  const t2024 = useTranslations("Shows2024");
  const t2025 = useTranslations("Shows2025");
  const bios = useTranslations("Bios");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LanguageSwitcher />
      <div className="max-w-3xs items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/irregular_logo.svg"
          alt={t("logoAlt")}
          width={906}
          height={377}
          priority
          className="mb-8"
        />
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aBoxGnqt0e0?si=wrfp2Xm16-vq9L6H"
        title={t("videoTitle")}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <hr className="my-8" />

      <div className="container mx-auto px-4">
        <p>{t("description")}</p>
      </div>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">{t("shows")}</h3>
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
        <h3 className="text-2xl font-bold mb-4">{t("shows2023")}</h3>
        <ul>
          <li>{t2023("show1")}</li>
          <li>{t2023("show2")}</li>
          <li>{t2023("show3")}</li>
          <li>{t2023("show4")}</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4" id="2024">
        <h3 className="text-2xl font-bold mb-4">{t("shows2024")}</h3>
        <ul>
          <li>{t2024("show1")}</li>
          <li>{t2024("show2")}</li>
          <li>{t2024("show3")}</li>
          <li>{t2024("show4")}</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4" id="2025">
        <h3 className="text-2xl font-bold mb-4">{t("shows2025")}</h3>
        <ul>
          <li>{t2025("show1")}</li>
          <li>{t2025("show2")}</li>
          <li>{t2025("show3")}</li>
          <li>{t2025("show4")}</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-full my-4" id="2026">
        <h3 className="text-2xl font-bold mb-4">{t("shows2026")}</h3>
        <p>{t("tbc")}</p>
      </div>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">{t("time")}</h3>
      <p>{t("doors")}</p>
      <p>{t("showStarts")}</p>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">{t("where")}</h3>
      <p>{t("venue")}</p>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">{t("tickets")}</h3>
      <p>{t("ticketsInfo")}</p>
      <a
        href="https://www.eventbrite.de/cc/the-irregular-show-sason-3-4272873"
        className="m-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">{t("ticketsLabel")}</span>
        <Image
          className=""
          src="/eventbrite_logo.svg"
          alt="Eventbrite Logo"
          width={145}
          height={28}
          priority
        ></Image>
      </a>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">{t("whoWeAre")}</h3>
      <h2 className="text-xl font-bold mb-4 mt-8">{bios("alec.name")}</h2>
      <Image
        className="w-full md:w-1/8 mb-8"
        src="/AlecMballz.png"
        alt="Alec M ballz"
        width={540}
        height={960}
        priority
      ></Image>
      <p className="w-full md:w-1/2">
        {bios("alec.bio")}
        <a
          href="https://www.instagram.com/alecmballz/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline visited:text-purple-600"
        >
          {t("instagram")}
        </a>
      </p>
      <h2 className="text-xl font-bold mb-4 mt-8">{bios("kristian.name")}</h2>
      <Image
        className="w-full md:w-1/8 mb-8"
        src="/Kristian.png"
        alt="Kristian"
        width={540}
        height={960}
        priority
      ></Image>
      <p className="w-full md:w-1/2">
        {bios("kristian.bio")}
        <a
          href="https://www.instagram.com/artfromkristian/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline visited:text-purple-600"
        >
          {t("instagram")}
        </a>
      </p>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mb-4">{t("followUs")}</h3>

      <ul className="flex w-full justify-center align-center text-center text-sm font-medium text-gray-500">
        <li className="flex-1 flex text-center justify-center">
          <a
            href="https://www.instagram.com/the.irre.gular.show/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{t("instagram")}</span>
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
      </ul>
    </main>
  );
}
