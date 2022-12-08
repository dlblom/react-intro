import { ProduceItem } from "../produceData";

interface ProduceListProps {
  produceData: ProduceItem[];
  inStockOnly: boolean;
  searchText: string;
}

export function ProduceList({
  produceData,
  inStockOnly,
  searchText,
}: ProduceListProps) {
  const productListItems = produceData.map((item) => {
    if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
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
