import { PixelRatio } from 'react-native';
import { SCREEN_WIDTH } from './appConstants';

/**
 * Dimensions, will give the width and height of the device
 */
// const { width: SCREEN_WIDTH } = Dimensions.get("window");
/**
 * This will divide the screen width by 360 and it gives the scale factor
 */
const scale = SCREEN_WIDTH / 360;

/**
 * normalize, this function normalizes the width, height, paading, etc...
 */
export function normalize(size) {
  /**
   * @param {number} size - size could be padding, width, height, etc..
   */
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
