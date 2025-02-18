import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react';
import Footer from 'components/Footer/Footer.js';
import AdminNavbar from 'components/Navbars/Navbar.js';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes.js';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from 'theme/theme.js';
import { PanelContainer, PanelContent, MainPanel } from "components/Layout/Panel"; // Adjust path accordingly

// Dashboard Component
export default function Dashboard(props) {
	const { ...rest } = props;

	// State variables for sidebar and navbar
	const [sidebarVariant, setSidebarVariant] = useState('transparent');
	const [fixed, setFixed] = useState(false);

	// Function to check if current route should display the full-screen maps view
	const getRoute = () => window.location.pathname !== '/admin/full-screen-maps';

	// Recursive function to get the active route by checking through nested routes
	const getActiveRoute = (routes) => {
		let activeRoute = 'Default Brand Text';
		for (let i = 0; i < routes?.length; i++) {
			if (routes[i].collapse) {
				// If route has subviews (collapsed), recursively check for active route
				let collapseActiveRoute = getActiveRoute(routes[i].views);
				if (collapseActiveRoute !== activeRoute) return collapseActiveRoute;
			} else if (routes[i].category) {
				// If the route belongs to a category, recursively check the category views
				let categoryActiveRoute = getActiveRoute(routes[i].views);
				if (categoryActiveRoute !== activeRoute) return categoryActiveRoute;
			} else {
				// If current route matches the URL, return the route name
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					return routes[i].name;
				}
			}
		}
		return activeRoute;
	};

	// Recursive function to determine the active navbar (secondary or not) based on the current route
	const getActiveNavbar = (routes) => {
		let activeNavbar = false;
		for (let i = 0; i < routes?.length; i++) {
			if (routes[i].category) {
				// Check recursively for category views
				let categoryActiveNavbar = getActiveNavbar(routes[i].views);
				if (categoryActiveNavbar !== activeNavbar) return categoryActiveNavbar;
			} else {
				// If current route has a secondary navbar, return it
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1 && routes[i].secondaryNavbar) {
					return routes[i].secondaryNavbar;
				}
			}
		}
		return activeNavbar;
	};

	// Function to generate routes dynamically based on the routes configuration
	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.collapse) {
				// Recursively handle collapsed routes
				return getRoutes(prop.views);
			}
			if (prop.category === 'account') {
				// If category is account, also generate nested routes
				return getRoutes(prop.views);
			}
			if (prop.layout === '/admin') {
				// Return the route for the layout '/admin'
				return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
			} else {
				return null;
			}
		});
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	document.documentElement.dir = 'ltr'; // Ensure left-to-right direction for the document

	// Chakra Color Mode provider
	return (
		<ChakraProvider theme={theme} resetCss={false}>
			{/* Sidebar component */}
			<Sidebar
				routes={routes}
				logoText={'PURITY UI DASHBOARD'}
				display='none' // Hides sidebar for certain layouts
				sidebarVariant={sidebarVariant}
				{...rest}
			/>

			{/* Main Panel component */}
			<MainPanel w={{ base: '100%', xl: 'calc(100% - 275px)' }}>
				<Portal>
					{/* Admin Navbar component */}
					<AdminNavbar
						onOpen={onOpen}
						logoText={'PURITY UI DASHBOARD'}
						brandText={getActiveRoute(routes)} // Get the active route name
						secondary={getActiveNavbar(routes)} // Determine if secondary navbar should be used
						fixed={fixed}
						{...rest}
					/>
				</Portal>

				{/* Conditional rendering of the panel content based on the current route */}
				{getRoute() ? (
					<PanelContent>
						<PanelContainer>
							<Switch>
								{/* Dynamically load routes */}
								{getRoutes(routes)}
								<Redirect from='/admin' to='/admin/dashboard' />
							</Switch>
						</PanelContainer>
					</PanelContent>
				) : null}

				{/* Footer component */}
				<Footer />
			</MainPanel>
		</ChakraProvider>
	);
}
