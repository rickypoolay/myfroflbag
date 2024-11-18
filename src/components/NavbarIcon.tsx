import { Link } from 'react-router-dom';

const NavbarIcon = ({
  padding,
  href,
  icon,
}: {
  padding: number;
  href: string;
  icon: any;
}) => {
  return (
    <a href={href} className={`p-${padding} bg-[#1d1d1d] p-2 rounded-md`}>
      {icon}
    </a>
  );
};

export default NavbarIcon;
