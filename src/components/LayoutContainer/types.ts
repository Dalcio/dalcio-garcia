import { RouteColorName } from '@theme/system/colors.types';

export type InnerLayoutWrapperProps = {
	bg: RouteColorName;
};

export type OuterLayoutWrapperProps = InnerLayoutWrapperProps & {
	home: boolean;
};
