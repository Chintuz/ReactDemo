import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').height < Dimensions.get('window').width
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;