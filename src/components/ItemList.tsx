import { Items, ReactSetState } from "../Types/utils";
import Button from "./Button"

type Itemtype={
    item:Items[];
    setItem:ReactSetState<Items[]>
}

const ItemList = ({item,setItem}:Itemtype) => {
    const handleDelete = (id: string) => {
        setItem((prev) => prev.filter((data) => data.id !== id));
      };
  return (
    item.map((data) => (
        <div
          key={data.id}
          className="flex justify-between items-center pl-2 border-2 mx-3 
      mt-2 p-1.5 border-gray-300 mb-2"
        >
          <p>{data.title}</p>

          <Button
            onClick={() => handleDelete(data.id)}
            className="hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M16,6L16,20a2,2 0 0,1-2,2H10a2,2 0 0,1-2-2L8,6" />
              <line x1="12" y1="11" x2="12" y2="17" />
              <line x1="9" y1="14" x2="15" y2="14" />
            </svg>
          </Button>
        </div>
      ))
  )
}

export default ItemList
