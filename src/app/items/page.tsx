import { Divide } from "lucide-react";
import { getItems } from "../data/item"

export default async function page() {
  const items = await getItems();
  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Lists</h1>

      <div className="space-y-2">
        {items?.map(item => (
          <div key={item.id} className="border-2 p-2 rounded-lg">
            {item.name} / {item.amount}
          </div>
        ))}
      </div>
    </div>

  )
}
