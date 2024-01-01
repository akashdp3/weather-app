import { Button } from "@/components/ui/button";

const SUGGESTION_CITIES = ["Mumbai", "Bangalore", "Chennai", "Pune"];

const CitySuggestions = () => {
  return (
    <div className="mt-8 gap-2 flex flex-col">
      <p className="text-lg font-medium align-middle my-auto">Other Cities</p>
      <div className="flex gap-4">
        {SUGGESTION_CITIES.map((city) => (
          <Button variant="outline">{city}</Button>
        ))}
      </div>
    </div>
  );
};

export default CitySuggestions;
