import { Colors, RouteColorName } from '@theme/system/colors.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type RoleParams = (
	name: RouteColorName,
	colors: Colors,
	params: ['110%', '-110%'] | ['-110%', '110%']
) => FlattenSimpleInterpolation;
