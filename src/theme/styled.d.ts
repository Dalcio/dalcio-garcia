/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import { Timing } from './system/animations.types';
import { Colors } from './system/colors.types';
import { SpaceProps } from './system/space.types';

export type Theme = {
	colors: Colors;
	space: SpaceProps;
	timing: Timing;
};

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
