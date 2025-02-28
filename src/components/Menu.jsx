import Link from "./Link";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="#hot">Hot</Link>
        </li>
        <li>
          <Link to="#juicy">Juicy</Link>
        </li>
        <li>
          <Link to="#cozy">Cozy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
