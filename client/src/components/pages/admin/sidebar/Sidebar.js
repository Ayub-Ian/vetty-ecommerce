import "./sidebar.scss";
//import logo from "../../assets/vetty-logo.svg";
//import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from "@mui/icons-material/Group";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="title">ADMIN PANEL</p>

      <ul>

        <li>
          <NavLink to="/admin/products">
            <Inventory2Icon className="icon" />
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/services">
            <LocalShippingIcon className="icon" />
            <span>Services</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
