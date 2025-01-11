"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { CommandDialog, CommandInput, CommandList } from "./ui/command";
import { Search } from "lucide-react";
import { CommandEmpty, CommandGroup } from "cmdk";
import { useLocationSearch } from "@/hooks/use-weather";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const {
    data: locations,
    isLoading,
    isError,
  } = useLocationSearch(debouncedQuery);

  return (
    <>
      <Button
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search cities....
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search cities...."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {debouncedQuery.length > 2 && (
            <>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error fetching cities. Please try again.</div>}
              {!isLoading && locations?.length === 0 && (
                <CommandEmpty>No cities found.</CommandEmpty>
              )}
              <CommandGroup heading="Suggestions">
                {locations?.map((location) => (
                  <div
                    key={location.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {location.name}
                  </div>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
