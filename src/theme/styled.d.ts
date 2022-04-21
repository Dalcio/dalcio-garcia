/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import { Colors } from './system/colors.types';
import { SpaceProps } from './system/space.types';

export type Theme = {
	colors: Colors;
	space: SpaceProps;
};

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
