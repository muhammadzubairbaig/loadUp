// Importing necessary components and pages for routing
import Dashboard from "pages/Dashboard/Dashboard";
import TablesPage from "pages/Dashboard/Tables";
import BillingPage from "pages/Dashboard/Billing";
import RTLPage from "pages/Dashboard/RTL";
import ProfilePage from "pages/Dashboard/Profile";
import SignInPage from "pages/SignIn/SignInPage.js";
import SignUpPage from "pages/SignUp/SignUpPage.js";

// Importing icons for navigation items
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

// Defining the route configuration for the dashboard
var dashRoutes = [
  {
    // Route for the Dashboard page
    path: "/dashboard",
    name: "Dashboard", // Name of the route to be displayed
    icon: <HomeIcon />, // Icon for the route
    component: Dashboard, // Component to render when the route is accessed
    layout: "/admin", // The layout path this route belongs to
  },
  {
    // Route for the Tables page
    path: "/tables",
    name: "Tables", // Name of the route
    icon: <StatsIcon />, // Icon for the route
    component: TablesPage, // Component for the route
    layout: "/admin", // The layout path this route belongs to
  },
  {
    // Route for the Billing page
    path: "/billing",
    name: "Billing", // Name of the route
    icon: <CreditIcon />, // Icon for the route
    component: BillingPage, // Component for the route
    layout: "/admin", // Layout path for the route
  },
  {
    // Route for the RTL support page
    path: "/rtl-support-page",
    name: "RTL", // Name of the route
    icon: <SupportIcon />, // Icon for the route
    component: RTLPage, // Component to render when accessed
    layout: "/admin", // Layout for this route
  },
  {
    // Account-related pages, grouped together under 'ACCOUNT PAGES'
    name: "ACCOUNT PAGES", // Category name
    category: "account", // Category identifier
    state: "pageCollapse", // Initial collapse state
    views: [
      {
        // Route for the Profile page
        path: "/profile",
        name: "Profile", // Name of the route
        icon: <PersonIcon />, // Icon for the route
        component: ProfilePage, // Component to render for the route
        layout: "/admin", // Layout path for the route
      },
      {
        // Route for the Sign In page
        path: "/signin",
        name: "Sign In", // Name of the route
        icon: <DocumentIcon />, // Icon for the route
        component: SignInPage, // Component for the Sign In page
        layout: "/admin", // Layout for the route
      },
      {
        // Route for the Sign Up page
        path: "/signup",
        name: "Sign Up", // Name of the route
        icon: <RocketIcon />, // Icon for the route
        component: SignUpPage, // Component for the Sign Up page
        layout: "/admin", // Layout for this route
      },
    ],
  },
];

// Exporting the dashRoutes array so it can be used elsewhere in the project
export default dashRoutes;
