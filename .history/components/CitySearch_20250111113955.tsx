"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { CommandDialog, CommandInput, CommandList } from "./ui/command";
import { Search } from "lucide-react";
import { CommandEmpty } from "cmdk";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
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
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
