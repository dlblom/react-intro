import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  inStockOnly: boolean;
  onInStockOnlyChange: Dispatch<SetStateAction<boolean>>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

export function SearchBar({
  inStockOnly,
  onInStockOnlyChange,
  searchText,
  setSearchText,
}: SearchBarProps) {
  return (
    <form>
      <input
        type='text'
        placeholder='Search...'
        value={searchText}
        onChange={(ev_search) => setSearchText(ev_search.target.value)}
      />
      <br />
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={(ev_danielle) =>
            onInStockOnlyChange(ev_danielle.target.checked)
          }
        />
        Only show products in stock
      </label>
    </form>
  );
}
