import React = require('react');
import { icons } from '../../utils/icons';
import { MIN_STAR_LENGTH } from '../../config/constants';
import * as S from './StarRating.styles';

class StarRating extends React.Component<
  {
    hoverAnimation?: any;
    value?: any;
    onChange?: any;
  },
  { hoverAnimation: any }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      hoverAnimation: 0
    };
  }
  getStarRate(star: any) {
    this.props.onChange(star);
  }

  hoverRating(star: any) {
    this.setState({ hoverAnimation: star });
  }

  render() {
    const rating: any = this.props.value;
    const { hoverAnimation } = this.state;

    return (
      <S.RateWrapper>
        <S.StarWrapper>
          {MIN_STAR_LENGTH.map(star => (
            <S.Star
              key={star}
              onClick={() => this.getStarRate(star)}
              onMouseEnter={() => this.hoverRating(star)}
              onMouseLeave={() => this.hoverRating(0)}
            >
              {rating < star && hoverAnimation < star ? icons.deselectedIcon : icons.selectedIcon}
            </S.Star>
          ))}
        </S.StarWrapper>
      </S.RateWrapper>
    );
  }
}

export default StarRating;
