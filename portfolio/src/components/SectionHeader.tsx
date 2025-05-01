export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            {eyebrow}
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-center mt-6">
          {title}
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 maw-w-md max-auto ">
          {description}
        </p>
      </div>
    </>
  );
};
