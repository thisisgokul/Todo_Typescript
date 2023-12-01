
type Button ={
    children:JSX.Element |string;
    className?: string;
    onClick?:()=> void
}

export default function Button({children,className,onClick}:Button) {
  return (
    <button type="submit"
    onClick={onClick}
    className={` ${className}`}
  >
    {children}
  </button>
  )
}
