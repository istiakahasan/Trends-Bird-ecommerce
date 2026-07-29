import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Filter, X } from 'lucide-react';
import { useState } from 'react';

interface FilterOption {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  onSearch: (value: string) => void;
  filters?: FilterOption[];
  onFilterChange?: (key: string, value: string) => void;
  onClear?: () => void;
}

export const SearchFilterBar = ({
  searchPlaceholder = 'Search...',
  onSearch,
  filters = [],
  onFilterChange,
  onClear,
}: SearchFilterBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const hasFilters = filters.some((f) => f.options.length > 0);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={handleSearch}
          className="pl-9"
        />
        {searchValue && (
          <button
            onClick={() => {
              setSearchValue('');
              onSearch('');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {hasFilters && (
        <div className="flex gap-2">
          {filters.map((filter) => (
            <Select
              key={filter.key}
              onValueChange={(value: string) => onFilterChange?.(filter.key, value)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder={filter.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {filter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>
      )}

      {onClear && (
        <Button variant="ghost" size="sm" onClick={onClear}>
          <Filter className="mr-2 h-4 w-4" />
          Clear
        </Button>
      )}
    </div>
  );
};