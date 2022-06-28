import { useState, useEffect } from 'react';
import { ForecastTableProps } from '../../ts/interfaces';
import { useParams, useHistory } from 'react-router-dom';
import { Spinner, ForecastTable } from '../../components';
import endpoints from '../../config/endpoints';
import { publicApiInstance } from '../../utils/api';
import { translations } from '../../utils/translations';

const HourlyForecast: React.FC = () => {
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const { id, city }: { id: string; city: string } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getHourlyForecast();
  }, [id, city]);

  const getHourlyForecast = async () => {
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_HOURLY_FORECAST_BY_ID(id));
      setHourlyForecast(data.forecast);
    } catch (error) {
      push('/weather');
      throw new Error(error);
    }
  };

  return (
    <>
      <h2>{`${translations.msg_page_hourly_forecast_h1} ${city}`}</h2>
      {!hourlyForecast ? (
        <Spinner />
      ) : (
        hourlyForecast.map(
          ({ symbol, time, temperature, windSpeed }: ForecastTableProps, index: number) => (
            <ForecastTable
              key={index}
              symbol={symbol}
              time={time}
              temperature={temperature}
              windSpeed={windSpeed}
            />
          )
        )
      )}
    </>
  );
};

export default HourlyForecast;
