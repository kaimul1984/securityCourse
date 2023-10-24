type Props = {
  children: React.ReactNode;
  style: string;
};

export default function ParentDiv({ children, style }: Props) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${style}`}
    >
      {children}
    </div>
  );
}
