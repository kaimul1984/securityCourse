type Props = {
  children: React.ReactNode;
  style: string;
};

export default function Container({ children, style }: Props) {
  return (
    <div className={`w-[95%] max-w-[1420px] m-auto ${style}`}>{children}</div>
  );
}
