import React from 'react';
import styled from 'styled-components';
import { Status, fillColors } from '../../../shared/constants/statuses';
import { DARK_GRAY } from '../../style-guide/colors.const';

const SVG_PX = 15;

const Number = styled.svg`
  position: relative;
  top: 5px;
  left: 10px;
  display: inline-block;
`;

export default function SmallNumberHeader({
  listNumber,
  status
}: {
  listNumber: number;
  status: Status;
}) {
  const fillColor = fillColors[status];

  return (
    <Number
      width={SVG_PX}
      height={SVG_PX}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 15L15 15L15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
        fill={fillColor}
      />
      <text x="30%" y="75%" font-family="Roboto, sans-serif" font-size="18px" fill={DARK_GRAY}>
        {listNumber}
      </text>
    </Number>
  );
}
