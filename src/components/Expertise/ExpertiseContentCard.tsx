import { Card } from "@/components/ui/card";

 
type ExpertiseCardContent = {
  imageSrc?: string;
  title: string;
  content: string;
  index?: number; // e.g. 4 → renders "04" in the corner
};

export default function ExpertiseContentCard({
  imageSrc = "https://avatar.vercel.sh/shadcn1",
  title,
  content,
  index,
}: ExpertiseCardContent) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-8 py-10 text-center">
      {/* illustration — contained, not full-bleed */}
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="h-32 w-auto object-contain sm:h-36"
        />
      </div>

      {/* title */}
      <h3 className="mt-8 text-lg font-bold uppercase tracking-wide leading-snug text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      {/* description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 [text-align:justify]">
        {content}
      </p>

      {/* faint index number, bottom-right */}
      {index !== undefined && (
        <span className="pointer-events-none absolute -bottom-2 right-4 select-none text-6xl font-bold text-slate-100 dark:text-slate-800">
          {String(index).padStart(2, "0")}
        </span>
      )}
    </Card>
  );
}