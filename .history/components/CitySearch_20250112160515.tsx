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
import { Clock, Loader2, Search, XCircle } from "lucide-react";
import { CommandEmpty, CommandGroup } from "cmdk";
import { useLocationSearch } from "@/hooks/use-weather";

import { useRouter } from "next/navigation";
import { useSearchHistory } from "@/hooks/use-search-history";
import { format } from "date-fns";
import { useFavorite } from "@/hooks/use-favorite";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { data: locations, isLoading } = useLocationSearch(query);

  const { history, clearHistory, addToHistory } = useSearchHistory();
  const { favorites } = useFavorite();
  const router = useRouter(); // Move useNavigate to the top of the component

  const handleSelect = (cityData: string) => {
    const [lat, lon, name, country] = cityData.split("|");

    //ADD TO SEARCH HISTORY
    addToHistory.mutate({
      query,
      name,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      country,
    });
    router.push(`/city/${name}?lat=${lat}&lon=${lon}`);
    setOpen(false);
  };

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
          {favorites.length > 0 && (
            
              <CommandGroup>
                <div className="flex items-center justify-between px-2 my-2">
                  <p className="text-xs text-muted-foreground">
                    Recent Searches
                  </p>
                  <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => clearHistory.mutate()}
                  >
                    <XCircle className="h-4 w-4" />
                    Clear
                  </Button>
                </div>
                {history.map((location) => {
                  return (
                    <CommandItem
                      key={`${location.lat}-${location.lon}`}
                      value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                      onSelect={handleSelect}
                    >
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{location.name}</span>
                      {location.state && (
                        <span className="text-sm text-muted-foreground">
                          {" "}
                          , {location.state}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">
                        , {location.country}
                      </span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {format(location.searchedAt, "MMM d, h:mm a")}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </>
          )}
          {history.length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup>
                <div className="flex items-center justify-between px-2 my-2">
                  <p className="text-xs text-muted-foreground">
                    Recent Searches
                  </p>
                  <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => clearHistory.mutate()}
                  >
                    <XCircle className="h-4 w-4" />
                    Clear
                  </Button>
                </div>
                {history.map((location) => {
                  return (
                    <CommandItem
                      key={`${location.lat}-${location.lon}`}
                      value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                      onSelect={handleSelect}
                    >
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{location.name}</span>
                      {location.state && (
                        <span className="text-sm text-muted-foreground">
                          {" "}
                          , {location.state}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">
                        , {location.country}
                      </span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {format(location.searchedAt, "MMM d, h:mm a")}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </>
          )}
          <CommandSeparator />
          {locations && locations.length > 0 && (
            <CommandGroup heading="Suggestions">
              {isLoading && (
                <div>
                  <Loader2 className="animate-spin" />
                </div>
              )}
              {locations.map((location) => {
                return (
                  <CommandItem
                    key={`${location.lat}-${location.lon}`}
                    value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                    onSelect={handleSelect}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    <span>{location.name}</span>
                    {location.state && <span> , {location.state}</span>}
                    <span>, {location.country}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
