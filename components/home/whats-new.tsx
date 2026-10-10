import Image from "next/image"

export default function WhatsNew() {
  return (
    <section aria-labelledby="whats-new-heading" className="bg-white px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <h2 id="whats-new-heading" className="mb-5 text-center text-2xl font-bold text-foreground sm:text-3xl">
          What&apos;s New
        </h2>
        <picture>
          <source media="(min-width: 768px)" srcSet="/banner-desktop.jpeg" />
          <Image
            src="/banner.jpeg"
            alt="New hydrogen breath test and gastrointestinal manometry services at Aditya Hospital & Gastro Centre"
            width={1024}
            height={1536}
            sizes="(min-width: 768px) 1152px, 100vw"
            className="h-auto w-full rounded-md"
          />
        </picture>
      </div>
    </section>
  )
}
