import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { routes } from 'routes.js'; // Ensure this path is correct

// Mocking Chakra UI components and routes data
jest.mock('components/Sidebar', () => () => <div>Sidebar</div>);
jest.mock('components/Navbars/Navbar', () => () => <div>Navbar</div>);
jest.mock('components/Footer/Footer', () => () => <div>Footer</div>);

describe('Dashboard Component', () => {

    test('renders the Sidebar, Navbar, and Footer', () => {
        render(
            <ChakraProvider>
                <MemoryRouter>
                    <Dashboard routes={routes} />
                </MemoryRouter>
            </ChakraProvider>
        );

        // Check if Sidebar, Navbar, and Footer are rendered
        expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
        expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer/i)).toBeInTheDocument();
    });

    test('renders the correct active route name', () => {
        render(
            <ChakraProvider>
                <MemoryRouter initialEntries={['/admin/dashboard']}>
                    <Dashboard routes={routes} />
                </MemoryRouter>
            </ChakraProvider>
        );

        // Check if the active route text is correctly rendered
        const activeRouteText = screen.getByText(/PURITY UI DASHBOARD/i); // Adjust this according to the active route text
        expect(activeRouteText).toBeInTheDocument();
    });

    test('routes are correctly rendered based on route configuration', () => {
        render(
            <ChakraProvider>
                <MemoryRouter initialEntries={['/admin/dashboard']}>
                    <Dashboard routes={routes} />
                </MemoryRouter>
            </ChakraProvider>
        );

        // Ensure a route that matches '/admin/dashboard' renders the correct content.
        // Here you would check for a specific component that gets rendered when that route is matched.
        const routeContent = screen.getByText(/Welcome to the Dashboard/i); // Change based on the actual route's rendered output
        expect(routeContent).toBeInTheDocument();
    });

    test('does not render full-screen maps route', () => {
        render(
            <ChakraProvider>
                <MemoryRouter initialEntries={['/admin/full-screen-maps']}>
                    <Dashboard routes={routes} />
                </MemoryRouter>
            </ChakraProvider>
        );

        // Ensure full-screen maps view does not render
        const fullScreenMapsView = screen.queryByText(/Full Screen Maps View/i); // Adjust this to match the content that should NOT appear
        expect(fullScreenMapsView).not.toBeInTheDocument();
    });

    test('side panel is rendered with the correct variant', () => {
        render(
            <ChakraProvider>
                <MemoryRouter initialEntries={['/admin/dashboard']}>
                    <Dashboard routes={routes} sidebarVariant="dark" />
                </MemoryRouter>
            </ChakraProvider>
        );

        // Check if the sidebar has the correct variant applied
        const sidebar = screen.getByText(/Sidebar/i);
        expect(sidebar).toHaveClass('dark'); // Adjust based on your styling
    });

    test('Clicking on a route link updates the active route', () => {
        render(
            <ChakraProvider>
                <MemoryRouter initialEntries={['/admin/dashboard']}>
                    <Dashboard routes={routes} />
                </MemoryRouter>
            </ChakraProvider>
        );

        const link = screen.getByText(/Another Route/i); // Replace with a valid route name
        fireEvent.click(link);

        // Check if the active route text updates
        const updatedRouteText = screen.getByText(/Another Route Active/i); // Adjust based on what the active route should show
        expect(updatedRouteText).toBeInTheDocument();
    });

});

