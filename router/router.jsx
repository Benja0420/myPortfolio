import { createBrowserRouter } from "react-router-dom";
import Layout from '../src/layout/Layout';
import Index from '../src/pages/Index';
import Projects from '../src/pages/Projects';
import About from '../src/pages/About.jsx';
import Contact from '../src/pages/Contact.jsx';


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
        ],
    },
    {
        path: "/projects",
        element: <Layout />,
        children: [
            {
                path: "/projects",
                element: <Projects />,
            },
        ],
    },
    {
        path: "/about",
        element: <Layout />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "/contact",
        element: <Layout />,
        children: [
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    }
]);

export default router;