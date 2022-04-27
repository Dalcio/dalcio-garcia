import { RouteColorName } from '@theme/system/colors.types';

export type MenuContentProps = {
	// home: boolean;
	current: RouteColorName;
};

export type MenuItemProps = {
	current: RouteColorName;
	name: RouteColorName;
};
