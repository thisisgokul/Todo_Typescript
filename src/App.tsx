import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";
import {type Items } from "./Types/utils";


const App = () => {
  const [item, setItem] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue == "") {
      alert("need to input");
      return;
    }
    setItem((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };


  return (
    <div className=" flex flex-col items-center gap-9 mt-16 justify-center ">
      <h1 className="text-4xl text-white font-bold text-center ">
        REACT + TYPESCRIPT TODO
      </h1>
      <div className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue} />

          <Button
            className="w-full bg-slate-400 mt-4 rounded-md text-lg p-2 hover:transition-transform 
           hover:scale-105"
          >
            ADD
          </Button>
        </form>
        <div className="h-64 overflow-y-auto">
         <ItemList item={item} setItem={setItem}/>
        </div>
      </div>
    </div>
  );
};

export default App;
