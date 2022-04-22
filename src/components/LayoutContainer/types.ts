import { RouteColorName } from '@theme/system/colors.types';

export type InnerLayoutWrapperProps = {
	bg: RouteColorName;
	home: boolean;
};

export type OuterLayoutWrapperProps = InnerLayoutWrapperProps & {};
