interface Props {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: Props) {
  return (
    <div className="mb-12 mt-10 w-full max-w-6xl px-4 sm:px-12">
      <span className="mb-4 inline-block bg-neutral-700 px-2.5 py-1 font-montserrat text-xs font-semibold uppercase leading-8 opacity-70">
        {title}
      </span>
      <h1>{description}</h1>
    </div>
  );
}
