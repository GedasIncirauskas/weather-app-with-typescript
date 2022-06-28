import { getWeatherIcon, formatDate } from '../../services/functions';
import { translations } from '../../utils/translations';
import { ForecastTableProps } from '../../ts/interfaces';
import * as S from './ForecastTable.styles';

const ForecastTable: React.FC<ForecastTableProps> = ({ symbol, time, temperature, windSpeed }) => {
  return (
    <S.TableContainer>
      <tbody>
        <tr>
          <td>
            <img src={getWeatherIcon(symbol)} alt={symbol} />
          </td>
          <td>
            <S.Container>
              <S.Date>{formatDate(time)}</S.Date>
              <S.Description>
                {`${translations.msg_table_temperature_title} ${temperature}`} C
              </S.Description>
              <S.Description>
                {`${translations.msg_table_wind_title} ${windSpeed}`} m/s
              </S.Description>
            </S.Container>
          </td>
        </tr>
      </tbody>
    </S.TableContainer>
  );
};

export default ForecastTable;
