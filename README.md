# commodity-price-report
dependencies:
npm init -y
npm i express
npm i mongodb
npm i mongoose
for testing dependency:
npm i jest

Please change mongodb local host url to your appropriate need in src/database/mongoose.js as it is set to run in localhost (Change string part after mongoose.connect)
You can also change port from 3000 to your need in src/index.js
To run the application:
  npm run start
