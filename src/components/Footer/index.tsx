import { Link } from 'react-router-dom';

import routes from '../../routes.ts';

interface LinkItem {
    name: string;
    path: string;
}

interface FooterItem {
    header: string;
    link: LinkItem[];
}

const footerItems: FooterItem[] = [
    {
        header: 'Information',
        link: [
            {
                name: 'Trainers',
                path: routes.home,
            },
            {
                name: 'Classes',
                path: routes.home,
            },
        ],
    },
    {
        header: 'Services',
        link: [
            {
                name: 'Buy pass',
                path: routes.register,
            },
            {
                name: 'Login',
                path: routes.login,
            },
        ],
    },
    {
        header: 'Help',
        link: [
            {
                name: 'Contact',
                path: routes.home,
            },
        ],
    },
];

const Footer = () => {
    const footerElements = footerItems.map((item, idx) => {
        const linkElements = item.link.map((link, idx) => (
            <Link key={idx} to={link.path}>
                {link.name}
            </Link>
        ));

        return (
            <div key={idx} className="flex flex-col gap-[20px]">
                <h3 className="h3-primary mb-0">{item.header}</h3>
                {linkElements}
            </div>
        );
    });

    return (
        <footer className="flex flex-col py-[20px] gap-[40px] bg-darkCharcoal text-white rounded-t-large">
            <div className="flex justify-evenly">{footerElements}</div>
            <p className="p-primary text-center text-[13px]">
                © Copyright 2023 FitSphere S.A.
            </p>
        </footer>
    );
};

export default Footer;
