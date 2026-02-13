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

      <p>
        <strong>Who: </strong>We are a trio based in Berlin comprised of
        Kristian (he/him), a drag queen from London with a focus on standup
        comedy, using props, outrageous outfits and telling funny short stories.
        Beware, Kristian is prone to sing and dance on stage! Alec M Ballz ˈælɪk
        ɛm Ballz (they/them), a beloved mischievous clown drag quing who plays
        with fire! They have an extensive production management going back to
        2008 and work within an art education background.
      </p>
      <p>
        <strong>What: </strong>Welcome to our IRRE (English: insane) cabaret
        style variety show including all the ingredients for a good stew: drag,
        circus, music, comedy + fire. We come together to host a monthly show
        that celebrates neurodivergency, gender expression, diversity, feminism,
        healing and laughter in hopes of developing a community from the ground
        up. Irregular identifies that mistakes in art are a made up concept in a
        wholesome and 0 bullshit tolerance environment.
      </p>
      <p>
        <strong>Why: </strong>
        In a harsh big city environment it can be hard to feel seen, understood
        or even acknowledged. We want to build community from the bottom up,
        through shared experiences, fun and harsh topics and deep as well as
        light conversations.
      </p>
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
    </main>
  );
}
