import { FaTasks } from "react-icons/fa";
import { FiHome, FiSettings } from "react-icons/fi";

interface NavItem {
    id: string;
    label: string;
    path: string;
    icon?: React.ReactNode;
}

const iconClassName = "size-10"

const NavBar = () => {
    const navItems: NavItem[] = [
        { id: 'home', label: 'Home', path: '/', icon: <FiHome className={iconClassName} /> },
        { id: 'tasks', label: 'Tasks', path: '/tasks', icon: <FaTasks className={iconClassName} /> },
        { id: 'settings', label: 'Settings', path: '/settings', icon: <FiSettings className={iconClassName} /> },
    ];

    return (
        <section className="z-10 flex items-center gap-6 max-w-7xl rounded-[2rem] border border-white/5 bg-primary/80 p-5 shadow-[10px_10px_20px_#1b1c1f,_-8px_-8px_18px_#2f3237] backdrop-blur">
            {navItems.map((item) => item.icon)}
        </section>
    )
}

export default NavBar