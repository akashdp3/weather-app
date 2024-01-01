import CurrentWeather from "@/components/widgets/CityWeather";
import Forcast from "@/components/widgets/Forcast.jsx";
import CitySuggestions from "@/components/widgets/CitySuggestions.js";

const DashboardView = () => {
  return (
    <div>
      <div className="flex gap-4">
        <CurrentWeather />
        <Forcast />
      </div>
      <CitySuggestions />
    </div>
  );
};

export default DashboardView;
