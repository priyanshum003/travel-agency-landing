
# React + SCSS Landing Page

This project is a modern and responsive landing page built using React and SCSS. The goal was to create a clean and well-structured landing page with a focus on consistent styling and responsive design.


## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Components](#components)
- [SCSS Structure](#scss-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo 

You can view a live demo of the landing page [here](https://travel.priyanshumishra.tech/). 

## Features

- Responsive design for mobile, tablet, and desktop views
- Hamburger menu for mobile navigation
- Consistent styling using SCSS variables
- Clean and modern UI
- Hover effects and transitions for better user experience

## Technologies Used

- React
- SCSS
- React Icons

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshum003/travel-agency-landing
   cd travel-agency-landing
-   Install dependencies:
    
    `npm install` 
    
-   Start the development server:
    
    `npm start` 
    
-   Open your browser and navigate to `http://localhost:5173`.

## Components

### Header

-   Displays the logo and navigation links.
-   Includes a hamburger menu for mobile view.
-   Responsive styles for different screen sizes.

### MainContent

-   Main section with text and image content.
-   Responsive layout with flexbox.
-   Buttons with hover effects.

### Footer

-   Contains brand information, links, and social media icons.
-   App store badges for app downloads.
-   Responsive design for all breakpoints.

## SCSS Structure

### Variables

Defined in `_variables.scss` for consistent styling:
```
// Fonts
$font-family: 'Open Sans', sans-serif;
$heading-font: 'Volkhov', serif;

// Colors
$primary-color: #DF6951;
$secondary-color: #F1A501;
$background-color: #fff;
$background-color-light: #f9f9f9;
$text-color: #333;
$text-secondary-color: #5E6282;
$hover-color: darken($primary-color, 10%);

// Font Sizes
$font-size-small: 14px;
$font-size-medium: 16px;
$font-size-large: 24px;
$font-size-xlarge: 48px;

// Padding
$padding-small: 10px;
$padding-medium: 20px;
$padding-large: 30px;
$padding-xlarge: 50px;

// Border Radius
$border-radius: 5px;

// Transitions
$transition: 0.3s ease-in-out;

// Container
$container-max-width: 1200px;

// Media Queries
$breakpoint-mobile: 768px;
$breakpoint-tablet: 1024px;
$breakpoint-desktop: 1200px;
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1.  Fork the repository
2.  Create a new branch (`git checkout -b feature-branch`)
3.  Make your changes
4.  Commit your changes (`git commit -m 'Add some feature'`)
5.  Push to the branch (`git push origin feature-branch`)
6.  Create a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.
