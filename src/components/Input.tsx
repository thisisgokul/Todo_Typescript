
import { ReactSetState } from "../Types/utils";

type Input={
    inputValue:string;
    setInputValue:ReactSetState<string>
}

export default function Input({inputValue,setInputValue}:Input) {
  return (
    <div>
      <input
        value={inputValue}
        className="w-full p-2"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
