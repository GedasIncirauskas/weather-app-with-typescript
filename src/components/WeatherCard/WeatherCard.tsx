import { WeatherCardProps } from '../../ts/interfaces';
import { getWeatherIcon } from '../../services/functions';
import * as S from './WeatherCard.styles';

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <S.Container>
      {data.map(({ symbol, maxTemp, maxWindSpeed, date }, index: number) => (
        <S.CardContainer key={index}>
          <S.ImageWrapper>
            <img src={getWeatherIcon(symbol)} alt={symbol} />
          </S.ImageWrapper>
          <section>
            <S.DescriptionWrapper>{maxTemp} C</S.DescriptionWrapper>
            <S.DescriptionWrapper>{maxWindSpeed} m/s</S.DescriptionWrapper>
            <S.DescriptionWrapper>{date}</S.DescriptionWrapper>
          </section>
        </S.CardContainer>
      ))}
    </S.Container>
  );
};

export default WeatherCard;
