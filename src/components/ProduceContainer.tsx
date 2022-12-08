import { useState } from "react";
import { ProduceList } from "./ProduceList";
import { SearchBar } from "./SearchBar";
import { produceData } from "../produceData";

export function ProduceContainer() {
  const [searchText, setSearchText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ProduceList
        produceData={produceData}
        inStockOnly={inStockOnly}
        searchText={searchText}
      />
    </>
  );
}
