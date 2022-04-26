import { Timing } from '@theme/system/animations.types';
import { Colors, RouteColorName } from '@theme/system/colors.types';
import { SpaceProps } from '@theme/system/space.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type LayoutWrapperProps = {
	bg: RouteColorName;
	home: boolean;
};

type NotHomeParams = {
	space: SpaceProps;
	colors: Colors;
	bg: RouteColorName;
	home?: boolean;
	timing?: Timing;
};

export type NotHomeProps<T = FlattenSimpleInterpolation> = (
	params: NotHomeParams
) => T;
