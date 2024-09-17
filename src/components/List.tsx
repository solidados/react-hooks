import { useEffect, useState } from "react";

interface ListProps {
  getItems: (incr: number) => number[];
}

export default function List({ getItems }: ListProps) {
  const [items, setItems] = useState<number[]>([]);

  useEffect((): void => {
    setItems(getItems(100));
    console.log("Updating items");
  }, [getItems]);

  return items.map((item) => (
    <h3 className="m-0" key={item}>
      {item}
    </h3>
  ));
}
