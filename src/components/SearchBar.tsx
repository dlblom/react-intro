import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  inStockOnly: boolean;
  onInStockOnlyChange: Dispatch<SetStateAction<boolean>>;
}

export function SearchBar({
  inStockOnly,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    <form>
      <input type='text' placeholder='Search...' />
      <br />
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}
