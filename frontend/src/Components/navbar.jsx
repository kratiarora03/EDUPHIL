import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../styles/navbar.css';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, ListItem, ListItemButton, ListItemText } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/Phone";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpenMenu(false);  // Close the menu after scrolling
    }
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: () => handleScrollToSection('about-us')
    },
    {
      text: "Courses",
      icon: <CommentRoundedIcon />,
      onClick: () => handleScrollToSection('courses-section')
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact"
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.link} onClick={item.onClick ? item.onClick : null}>
            {item.text}
          </Link>
        ))}
        <Link to="/login-signup">
          <button className="primary-button">Login/Signup</button>
        </Link>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={item.onClick ? item.onClick : null}>
                {item.icon}
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
