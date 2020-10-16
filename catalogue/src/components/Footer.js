// import React from "react";

// function BottomNav() {
//   return (
//     <div className="nav-wrapper">
//       <p style={{ textAlign: "center", fontSize: "18px", color: "black" }}>
//         &copy; Daniel Milano Design
//       </p>
//     </div>
//   );
// }

// export default BottomNav;

import React from "react";
import FilterLink from "../redux/containers/FilterLink";
import { VisibilityFilters } from "../redux/actions/index";
import ClassForm from "./ClassForm";

const Footer = () => (
  <div className="footer">
    {/* <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink> */}
    <p
      style={{
        textAlign: "center",
        fontSize: "18px",
        color: "black",
        position: "absolute",
        width: "100%",
      }}
    >
      &copy; Daniel Milano Design
    </p>
  </div>
);

export default Footer;
