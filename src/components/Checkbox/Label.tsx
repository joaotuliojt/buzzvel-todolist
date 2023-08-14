interface LabelProps {
  text: string;
}

export function Label({ text }: LabelProps) {
  return <p className="dark:text-white cursor-pointer">{text}</p>;
}
