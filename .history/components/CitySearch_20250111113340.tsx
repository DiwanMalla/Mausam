"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { CommandDialog, CommandInput } from "./ui/command";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <>
      <Button variant={outline}>Search cities....</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput />
      </CommandDialog>
    </>
  );
};

export default CitySearch;
