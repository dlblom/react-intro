import { ProduceItem } from "../produceData";

interface ProduceListProps {
  produceData: ProduceItem[];
  inStockOnly: boolean;
}

export function ProduceList({ produceData, inStockOnly }: ProduceListProps) {
  const productListItems = produceData.map((item) => {
    if (inStockOnly && !item.stocked) {
      return;
    } else {
      return (
        <li key={item.name}>
          {item.name} {item.price}
        </li>
      );
    }
  });

  return <ul>{productListItems}</ul>;
}
