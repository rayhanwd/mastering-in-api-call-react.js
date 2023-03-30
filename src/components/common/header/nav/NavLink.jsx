import { Link } from "../../../../utils/lib";

const NavLink = ({ path, name }) => {
  return (
    <div>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default NavLink;
