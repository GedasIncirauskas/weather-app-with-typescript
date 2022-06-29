export interface ForecastTableProps {
  symbol: string;
  time: Date;
  temperature: number;
  windSpeed: number;
}
[];

export interface CurrentWeatherProps {
  data: {
    symbol: string;
    symbolPhrase: string;
    temperature: number;
    windSpeed: number;
    cloudiness: number;
    pressure: number;
    time: string;
  }[];
}

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  color?: string;
  handleClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface DropdownProps {
  data: {
    id: number;
    description: string;
  }[];
}

export interface AccordionProps {
  data: {
    id: number;
    title: string;
    about: {
      id: number;
      description: string;
    }[];
  }[];
}

export interface InputProps {
  isError: boolean;
  labelName: string;
  labelTitle: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  errorMessage?: string;
}

export interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RouteProps {
  path: string;
  Component?: React.ComponentType<any>;
  isExact: boolean;
  title: string;
}

export interface SearchBarProps {
  results: {
    adminArea: string;
    country: string;
    id: number;
    lat: number;
    lon: number;
    name: string;
    timezone: string;
  }[];
  onClick: (event: any) => void; // should be changed
}

export interface TooltipProps {
  children: React.ReactNode;
  text: string;
  tooltip: boolean;
}

export interface WeatherCardProps {
  data: {
    symbol: string;
    maxTemp: number;
    maxWindSpeed: number;
    date: string;
  }[];
}

export interface ReviewProps {
  emailValue: string;
  rating: number | null;
  reviewValue: string;
  userName: string;
}
[];

export interface SelectedCityProps {
  id?: any; // should be changed
  name?: string;
}
