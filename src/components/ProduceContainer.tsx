import { useState } from "react";
import { ProduceList } from "./ProduceList";
import { SearchBar } from "./SearchBar";
import { produceData } from "../produceData";

export function ProduceContainer() {
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProduceList produceData={produceData} inStockOnly={inStockOnly} />
    </>
  );
}
