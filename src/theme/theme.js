import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './basic/breakpoints';

// Card Components
import { CardComponent } from './ui-theme/card/Card';
import { CardBodyComponent } from './ui-theme/card/CardBody';
import { CardHeaderComponent } from './ui-theme/card/CardHeader';

// Layout Components
import { MainPanelComponent } from './ui-theme/layout/MainPanel';
import { PanelContentComponent } from './ui-theme/layout/PanelContent';
import { PanelContainerComponent } from './ui-theme/layout/PanelContainer';

export default extendTheme(
	{ breakpoints },
	globalStyles,
	CardComponent, 
	CardBodyComponent,
	CardHeaderComponent,
	MainPanelComponent,
	PanelContentComponent,
	PanelContainerComponent
);

