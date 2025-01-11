import { Button } from "./ui/button";
import { CommandDialog, CommandInput } from "./ui/command";

const CitySearch = () => {
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
