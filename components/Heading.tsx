type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return (
    <div className="flex items-center gap-2 mb-20">
      <span className="w-[25%] lg:w-[200px] h-3 bg-midnight" />
      <h1 className="w-[350px] text-center text-4xl lg:text-5xl font-extrabold text-midnight ">
        {title}
      </h1>
      <span className="w-[25%] lg:w-[200px] h-3 bg-midnight" />
    </div>
  );
}
