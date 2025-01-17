import { useState } from "react";
import { Button } from "./ui/button";
import { CommandDialog, CommandInput } from "./ui/command";

const CitySearch = () => {
  const [open, setOpen] = useState(second);
  const [query, setQuery] = useState("");
  return (
    <>
      <Button>Search cities....</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput />
      </CommandDialog>
    </>
  );
};

export default CitySearch;
