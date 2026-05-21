type MenuLabelProps = { text: string };

export default function MenuLabel({ text }: MenuLabelProps) {
  return (
    <span>
      <u>{text[0]}</u>{text.slice(1)}
    </span>
  );
}
