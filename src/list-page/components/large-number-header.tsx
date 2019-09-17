import React from 'react';
import styled from 'styled-components';
import { Status, fillColors } from '../../../shared/constants/statuses';
import { DARK_GRAY } from '../../style-guide/colors.const';

const SVG_PX = 25;

const Number = styled.svg`
  position: relative;
  top: 5px;
  left: 10px;
  display: inline-block;
`;

export default function LargeNumberHeader({
  listNumber,
  status
}: {
  listNumber: number;
  status: Status;
}) {
  // TODO: actually, the large number header will always be grey, it's just the small number subheader that will have a color
  const fillColor = fillColors[status];

  return (
    <Number
      width={SVG_PX}
      height={SVG_PX}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 0H0V12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0Z"
        fill={fillColor}
      />
      <text x="30%" y="75%" font-family="Roboto, sans-serif" font-size="18px" fill={DARK_GRAY}>
        {listNumber}
      </text>
    </Number>
  );
}
