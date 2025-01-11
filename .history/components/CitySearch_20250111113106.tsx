import { Button } from "./ui/button";
import { CommandDialog } from "./ui/command";

const CitySearch = () => {
  return (
    <>
      <Button>Search cities....</Button>
      <CommandDialog open={open} onOpenChange={setOpen}></CommandDialog>
    </>
  );
};

export default CitySearch;
