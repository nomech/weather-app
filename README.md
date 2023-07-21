
# Simple Weather App

This is a weather application built using React. The application fetches weather data from an external API and displays current weather conditions and a 7-day forecast for a specified location.

## Features

- Current weather conditions: displays the current weather conditions for a selected location, including temperature and weather conditions.
- 7-day forecast: shows a 7-day weather forecast for the selected location.
- Search: allows users to search for a location using a Google Autocomplete search bar.

## Installation

1. Clone the repository to your local machine using `git clone`.

```bash
git clone https://github.com/yourusername/my-weather-app.git
```

2. Navigate to the project directory.

```bash
cd my-weather-app
```

3. Install the required dependencies.

```bash
npm install
```

4. Create a `.env` file in the root directory of the project, and add your API keys:

```env
VITE_APP_WEATHER_API_KEY=your_weather_api_key
VITE_APP_WEAHTER_API_BASE_URL=https://api.weatherapi.com/v1/forecast.json?
VITE_APP_WEATHER_GOOGLE_API_KEY=your_google_api_key
```

5. Start the development server.

```bash
npm start
```

## Usage

Once you've started the server, navigate to `http://localhost:3000` (or the URL provided in the terminal) in your web browser. 

Type a location into the search bar and either select a location from the dropdown or press enter to fetch the weather data for that location.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
