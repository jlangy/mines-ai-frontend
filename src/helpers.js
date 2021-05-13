
import {yellowIcon, redIcon, greenIcon} from './components/Icons'

export const getRiskIcon = risk => {
  if (risk > 0.66) return redIcon;
  if (risk > 0.33) return yellowIcon;
  return greenIcon;
}

export const getRiskColour = risk => {
  if (risk > 0.66) return 'red';
  if (risk > 0.33) return 'yellow';
  return 'green';
}

export const swapCoords = (coords) =>
  coords.map((coordPair) => [coordPair[1], coordPair[0]]);