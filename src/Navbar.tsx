import { useState, useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { SUGGESTIONS } from "@/constants/citySuggestions.constant";

interface NavbarProps {
  city: string;
  setCity: any;
}

const Navbar = (props: NavbarProps) => {
  const { city, setCity } = props;

  const [isCommandModalOpen, setCommandModalOpen] = useState(false);
  // const [cityInput, setCityInput] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandModalOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    callbackName: "YOUR_CALLBACK_NAME",
    requestOptions: {
      types: ["(cities)"]
    },
    debounce: 300
  });
  console.log({ ready, status, value });

  const handleInput = (value: string) => {
    setValue(value);
  };

  const handleSelect = (suggestion: any) => () => {
    // When the user selects a place, we can replace the keyword without request data from API by setting the second parameter to "false"
    setCity(suggestion);
    setValue(suggestion, false);

    setCommandModalOpen(false);
    setValue("");
    clearSuggestions();

    getGeocode({ address: suggestion }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      console.log({ lat, lng });
    });
  };

  return (
    <div className="flex flex-direction justify-between">
      <p className="text-xl font-medium align-middle my-auto">{city}</p>
      <div className="flex gap-1 justify-center items-center">
        <Button
          variant={"outline"}
          onClick={() => setCommandModalOpen(true)}
          className="h-9 w-full whitespace-nowrap px-4"
        >
          <p className="text-sm text-muted-foreground text-gray-500">
            Search city...{" "}
            <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary md:ml-28">
              <span className="text-xs">⌘</span>K
            </kbd>
          </p>
        </Button>
      </div>
      <CommandDialog
        open={isCommandModalOpen}
        onOpenChange={setCommandModalOpen}
      >
        <CommandInput
          placeholder="Search city..."
          value={value}
          onValueChange={handleInput}
          // disabled={!ready}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <>
              {SUGGESTIONS.map((suggestion, i) => (
                <CommandItem key={i} onSelect={handleSelect(suggestion)}>
                  {suggestion}
                </CommandItem>
              ))}
            </>
            {status === "OK" &&
              data.map((suggestion) => (
                <CommandItem
                  key={suggestion.place_id}
                  onSelect={handleSelect(suggestion)}
                >
                  {suggestion.description}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Navbar;
