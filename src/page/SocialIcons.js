import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import the Font Awesome CSS
// Make sure you have the correct path to the CSS file if it's not in the node_modules folder


function SocialIcons() {
  const iconStyle = {
    fontSize: '24px',
    color: '#cb8161', // Default font color
    transition: 'color 0.3s ease', // Transition effect for smooth color change
  };

  const handleMouseEnter = (event) => {
    event.target.style.color = '#000'; // Change color to black on hover
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = '#cb8161'; // Restore default color when mouse leaves
  };

  return (
    <div className="block block-social">
      <ul className="social-link">
        <li>
          <a href="#">
            <i
              className="fab fa-twitter"
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fab fa-instagram"
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fab fa-dribbble"
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fab fa-behance"
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
