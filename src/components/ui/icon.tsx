import { weatherIconMappings } from "../../constants/icon.constant";

interface IconComponentProps {
  weatherCode: any;
  x?: any;
  className?: string;
}

const Icon = ({ weatherCode, x, className }: IconComponentProps) => {
  const iconNameKey = x ? `${weatherCode}${x}` : weatherCode;
  const iconName = weatherIconMappings[iconNameKey];

  return (
    <div className={`relative invert-0 ${className}`}>
      <img
        alt={weatherCode}
        src={`/icons/wi-${iconName}.svg`}
        className="select-none"
      />
    </div>
  );
};

export default Icon;
