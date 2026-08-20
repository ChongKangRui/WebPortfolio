import { DEFAULT_SECTIONS, CONTACT_LINKS } from "../content";

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20"
      id={DEFAULT_SECTIONS[5].label}
    >
      <div className="my-10 w-full text-black dark:text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          CONTACT
        </h1>
      </div>

      <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-8 sm:gap-12">
        {CONTACT_LINKS.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
            aria-label={name}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-white/60 text-black transition hover:-translate-y-1 hover:border-black/30 hover:shadow-sm sm:h-20 sm:w-20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
          >
            <Icon size={28} />
          </a>
        ))}
      </div>
    </section>
  );
}
