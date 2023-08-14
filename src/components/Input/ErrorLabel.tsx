interface ErrorLabelProps {
  message: string;
}

export function ErrorLabel({ message }: ErrorLabelProps) {
  return <p className="text-red-600 font-thin text-sm mt-1 ml-1">{message}</p>;
}
