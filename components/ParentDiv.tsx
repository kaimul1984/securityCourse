type Props = {
  children: React.ReactNode;
};

export default function ParentDiv({ children }: Props) {
  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center mb-[100px]">
      {children}
    </div>
  );
}
