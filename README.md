# Weather Web App

This is a simple weather web application built with HTML, JavaScript, Tailwind CSS, and the OpenWeather API. The app allows users to search for current weather information by city name. The weather data includes temperature, humidity, wind speed, and a brief description of the weather conditions.

## Features

* Search weather information by city name
* Display current temperature, humidity, wind speed, and weather description
* Responsive design using Tailwind CSS
* Error handling for invalid city names or network issues

## Technologies Used

* HTML
* JavaScript
* Tailwind CSS
* OpenWeather API

## Getting Started

### Prerequisites
To run this project, you need:

* A modern web browser
* An API key from OpenWeather

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/weather-web-app.git
cd weather-web-app

2. Open the index.html file in your preferred text editor and replace 'YOUR_API_KEY' in the JavaScript code with your OpenWeather API key.

### Running the App
1. Open the index.html file in your web browser.
2. Enter a city name in the search bar and click the "Search" button to view the current weather information.

## File Structure

weather-web-app/
├── index.html
├── style.css
└── script.js
* `index.html`: The main HTML file that contains the structure of the web app.
* `style.css`: The custom styles for the web app, built with Tailwind CSS.
* `script.js`: The JavaScript file that handles fetching and displaying weather data.

## Usage

### Searching for Weather Information
1. Enter the name of a city in the search input field.
2. Click the "Search" button.
3. The current weather information for the specified city will be displayed.

## Error Handling
* If the city name is invalid or there is a network issue, an error message will be displayed.

## Customization

### Tailwind CSS
This project uses Tailwind CSS for styling. To customize the styles:

1. Install Tailwind CSS via npm:
   
  npm install -D tailwindcss
  npx tailwindcss init

2. Configure your tailwind.config.js file as needed.
3. Use the Tailwind directives (@tailwind base;, @tailwind components;, @tailwind utilities;) in your CSS file.

### OpenWeather API
You can explore more features of the OpenWeather API and incorporate them into your app. Visit the [OpenWeather API documentation](https://openweathermap.org/api) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.mit.edu/~amini/LICENSE.md)file for more details.

## Acknowledgements

* [OpenWeather](https://openweathermap.org)for providing the weather data API
* [Tailwind CSS](https://tailwindcss.com)for the responsive design framework

Feel free to reach out if you have any questions or need further assistance.

Happy coding! 🌤️
