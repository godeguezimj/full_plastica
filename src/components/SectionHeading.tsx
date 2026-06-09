export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold mb-3 sm:mb-4">{eyebrow}</p>
      )}
      <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl leading-[1.12] sm:leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 sm:mt-5 text-muted-foreground text-[15px] sm:text-lg leading-relaxed">{subtitle}</p>
      )}
      <div className={`divider-gold mt-6 sm:mt-8 w-24 sm:w-32 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

