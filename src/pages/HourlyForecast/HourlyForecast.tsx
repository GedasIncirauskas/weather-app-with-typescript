import React = require('react');

import { useParams, useHistory } from 'react-router-dom';
import { Spinner, ForecastTable } from '../../components';
import endpoints from '../../config/endpoints';
import { publicApiInstance } from '../../utils/api';
import { translations } from '../../utils/translations';

const HourlyForecast: React.FC = () => {
  const [hourlyForecast, setHourlyForecast] = React.useState(null);
  const { id, city }: { id: any; city: any } = useParams();
  const { push } = useHistory();

  React.useEffect(() => {
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
        hourlyForecast.map(({ symbol, time, temperature, windSpeed }: any, index: number) => (
          <ForecastTable
            key={index}
            symbol={symbol}
            time={time}
            temperature={temperature}
            windSpeed={windSpeed}
            index={index}
          />
        ))
      )}
    </>
  );
};

export default HourlyForecast;
