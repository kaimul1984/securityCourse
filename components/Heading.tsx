type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return (
    <div className="flex items-center justify-between space-x-5 mb-20">
      <span className="w-[200px] h-3 bg-midnight" />
      <h1 className="text-5xl font-bold text-midnight ">{title}</h1>
      <span className="w-[200px] h-3 bg-midnight" />
    </div>
  );
}
