import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ShowsTabs from "./components/ShowsTabs";

export default function Home() {
  const t = useTranslations("HomePage");
  const t2023 = useTranslations("Shows2023");
  const t2024 = useTranslations("Shows2024");
  const t2025 = useTranslations("Shows2025");
  const t2026 = useTranslations("Shows2026");
  const bios = useTranslations("Bios");

  return (
    <>
      {/* Fixed video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/promo-bg.mp4" type="video/mp4" />
      </video>

      {/* Hero: full-screen, video visible through it */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        <LanguageSwitcher />
        <Image
          src="/irregular_logo.svg"
          alt={t("logoAlt")}
          width={906}
          height={377}
          priority
          className="w-2/3 max-w-xl"
        />
        <a
          href="https://www.eventbrite.de/cc/the-irregular-show-4th-season-4829069?aff=odclrlmcfto"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-10 py-4 text-xl font-bold font-hanson tracking-wide text-black bg-white btn-polygon btn-polygon-hover"
        >
          {t("getTickets")}
        </a>
        {/* Scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/60 text-sm animate-bounce">
          <span>↓</span>
        </div>
      </section>

      {/* Content panel: slides up over the video as you scroll */}
      <main className="relative bg-black/90 text-white flex flex-col items-center px-8 py-16 gap-0 rounded-t-3xl">
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <div className="w-full">
            <p>{t("description")}</p>
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full">
            <ShowsTabs
              heading={t("shows")}
              shows2023={t("shows2023")}
              shows2024={t("shows2024")}
              shows2025={t("shows2025")}
              shows2026={t("shows2026")}
              shows2023Items={[
                t2023("show1"),
                t2023("show2"),
                t2023("show3"),
                t2023("show4"),
              ]}
              shows2024Items={[
                t2024("show1"),
                t2024("show2"),
                t2024("show3"),
                t2024("show4"),
              ]}
              shows2025Items={[
                t2025("show1"),
                t2025("show2"),
                t2025("show3"),
                t2025("show4"),
              ]}
              shows2026Items={[
                t2026("show1"),
                t2026("show2"),
                t2026("show3"),
                t2026("show4"),
                t2026("show5"),
              ]}
              shows2026Links={[
                "",
                "",
                "",
                "",
                "https://www.eventbrite.de/e/the-irregular-show-4th-season-tickets-1986084581447",
              ]}
            />
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full">
            <h3 className="text-2xl font-bold font-hanson mb-4">{t("time")}</h3>
            <p>{t("doors")}</p>
            <p>{t("showStarts")}</p>
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full">
            <h3 className="text-2xl font-bold font-hanson mb-4">
              {t("where")}
            </h3>
            <a href="https://maps.google.com/?q=Nirgendwo,+Helsingforser+Str.+10,+10243+Berlin" target="_blank" rel="noopener noreferrer" className="hover:underline">{t("venue")}</a>
            <p className="text-white/60 text-sm mt-2">
              <a href="https://maps.google.com/?q=Interkosmos,+Fanningerstr.+47,+10365+Berlin" target="_blank" rel="noopener noreferrer" className="hover:underline">{t("venueAlt")}</a>
            </p>
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full">
            <h3 className="text-2xl font-bold font-hanson mb-4">
              {t("tickets")}
            </h3>
            <p className="mb-4">{t("ticketsInfo")}</p>
            <a
              href="https://www.eventbrite.de/cc/the-irregular-show-4th-season-4829069?aff=odclrlmcfto"
              className="group bg-white/10 px-5 py-4 transition-colors hover:bg-white/20 btn-polygon btn-polygon-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{t("ticketsLabel")}</span>
              <Image
                src="/eventbrite_logo.svg"
                alt="Eventbrite Logo"
                width={145}
                height={28}
                priority
                className="inline-block"
              />
            </a>
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full">
            <h3 className="text-2xl font-bold font-hanson mb-8">
              {t("whoWeAre")}
            </h3>

            <h2 className="text-xl font-bold font-hanson mb-4">
              {bios("alec.name")}
            </h2>
            <Image
              className="w-full md:w-64 mb-4 rounded-lg"
              src="/AlecMballz.png"
              alt="Alec M ballz"
              width={540}
              height={960}
              loading="lazy"
            />
            <p className="w-full md:w-3/4 mb-4">{bios("alec.bio")}</p>
            <a
              href="https://www.instagram.com/alecmballz/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 group flex items-center gap-2 px-4 py-2 bg-white/10 text-sm font-semibold hover:bg-white hover:text-black transition-colors w-fit btn-polygon btn-polygon-hover"
            >
              <Image
                src="/instagram.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 invert-on-parent-hover"
              />
              {t("instagram")}
            </a>

            <h2 className="text-xl font-bold font-hanson mb-4">
              {bios("kristian.name")}
            </h2>
            <Image
              className="w-full md:w-64 mb-4 rounded-lg"
              src="/Kristian.png"
              alt="Kristian"
              width={540}
              height={960}
              loading="lazy"
            />
            <p className="w-full md:w-3/4 mb-4">{bios("kristian.bio")}</p>
            <a
              href="https://www.instagram.com/artfromkristian/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 text-sm font-semibold hover:bg-white hover:text-black transition-colors w-fit btn-polygon btn-polygon-hover"
            >
              <Image
                src="/instagram.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 invert-on-parent-hover"
              />
              {t("instagram")}
            </a>
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full">
            <h3 className="text-2xl font-bold font-hanson mb-2">
              {t("pressPhotos")}
            </h3>
            <p className="text-white/60 text-sm mb-6">{t("pressPhotosInfo")}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <a
                  key={n}
                  href={`/press/press-${n}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/press/thumbnails/press-${n}.jpg`}
                    alt={`${t("pressPhotoAlt")} ${n}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>

          <hr className="border-white/20 w-full" />

          <div className="w-full pb-8">
            <h3 className="text-2xl font-bold font-hanson mb-4">
              {t("followUs")}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/the.irre.gular.show/"
                className="group bg-white/10 px-5 py-4 transition-colors hover:bg-white btn-polygon btn-polygon-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{t("instagram")}</span>
                <Image
                  className="h-8 w-8 invert-on-parent-hover"
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://t.me/+mpmWxYB2_0c0Yzcy"
                className="group bg-white/10 px-5 py-4 transition-colors hover:bg-white btn-polygon btn-polygon-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Telegram</span>
                <Image
                  className="h-8 w-8 invert-on-parent-hover"
                  src="/telegram.svg"
                  alt="Telegram Logo"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
