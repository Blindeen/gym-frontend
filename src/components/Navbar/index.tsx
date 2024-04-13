interface NavbarProps {
    items: string[];
}

const Navbar = ({ items }: NavbarProps) => {
    const itemElements = items.map((item, idx) => (
        <a className="text-white font-bold" key={idx}>
            {item}
        </a>
    ));

    return (
        <header className="flex justify-center items-center gap-[5vw] pt-[35px] text-lg">
            <img
                className="w-[100px] h-[100px]"
                src="/src/assets/img/logo.png"
                alt="logo"
            />
            {itemElements}
        </header>
    );
};

export default Navbar;
