"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Loader2, Search } from "lucide-react";
import { CommandEmpty, CommandGroup } from "cmdk";
import { useLocationSearch } from "@/hooks/use-weather";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { data: locations, isLoading } = useLocationSearch(query);

  return (
    <>
      <Button
        variant={"outline"}
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
          {query.length > 2 && <CommandEmpty>No Cities found.</CommandEmpty>}
          <CommandGroup heading="Favorites">
            <CommandItem>Chitwan</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent Searches">
            <CommandItem>Chitwan</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {locations && locations.length > 0 && (
            <CommandGroup heading="Suggestions">
              {isLoading && (
                <div>
                  <Loader2 />
                </div>
              )}
              {locations.map((location) => {
                return <CommandItem></CommandItem>;
              })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
