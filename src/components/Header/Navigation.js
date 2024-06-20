import React,  { useState } from "react";
import './Navigation.css';

const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("News");
  const navItems = [
    { id: 1, title: "News", name: "LatestNews" },
    { id: 2, title: "Events", name: "UpcomingEvents" },
    { id: 3, title: "Gallery", name: "Gallery" },
    { id: 4, title: "Social", name: "Social" },
  ];

  return (
    <div className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`#${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
    );
};

export default Navigation;