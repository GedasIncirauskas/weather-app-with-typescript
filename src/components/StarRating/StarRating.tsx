import React from 'react';
import { icons } from '../../utils/icons';
import { MIN_STAR_LENGTH } from '../../config/constants';
import * as S from './StarRating.styles';

interface StarRatingState {
  hoverAnimation: number;
}

interface StarRatingProps {
  value: number;
  onChange: (star: number) => void;
}

class StarRating extends React.Component<StarRatingProps, StarRatingState> {
  constructor(props: any) {
    super(props);

    this.state = {
      hoverAnimation: 0
    };
  }
  getStarRate(star: number) {
    this.props.onChange(star);
  }

  hoverRating(star: number) {
    this.setState({ hoverAnimation: star });
  }

  render() {
    const rating: number = this.props.value;
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
