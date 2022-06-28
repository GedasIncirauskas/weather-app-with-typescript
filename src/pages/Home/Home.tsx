import React = require('react');
import { CurrentWeather, Clock } from '../../components';
import { publicApiInstance, getAccessTokenFromAPI } from '../../utils/api';
import { Cookie } from '../../services/cookie';
import { translations } from '../../utils/translations';
import endpoints from '../../config/endpoints';
import * as S from './Home.styles';

const Home = () => {
  const [data, setData] = React.useState([]);
  const [location, setLocation] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };

  const showPosition = (position: any) => {
    setLocation({ lon: position.coords.longitude, lat: position.coords.latitude });
  };

  const getWeatherData = async () => {
    if (!location) return;
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_CURRENT_LOCATION(location));
      setData([data.current]);
    } catch (error) {
      setErrorMessage(translations.msg_server_error);
    }
  };

  const tokenHandler = async () => {
    if (!Cookie.getToken()) {
      const res = await getAccessTokenFromAPI();
      return Cookie.setToken(res);
    }
  };

  React.useEffect(() => {
    tokenHandler();
    getLocation();
  }, []);

  React.useEffect(() => {
    getWeatherData();
  }, [location]);

  if (!location) {
    return <S.Message>{translations.msg_page_home_location_error}</S.Message>;
  }

  if (errorMessage) {
    return <S.ErrorMessage>{errorMessage}</S.ErrorMessage>;
  }

  return (
    <S.Container>
      <CurrentWeather data={data} />
      <Clock />
    </S.Container>
  );
};

export default Home;
