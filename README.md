# ImageSearch - React App with use of the Unsplash API

## Deployment
***[ImageSearch-App](http://image-search-react-app.surge.sh/)***

ImageSearch will retrieve a list of 10 images based on stock photography using the Unsplash API. The images are displayed using a combination of React props, CSS grid, and Javascript event listening.

To run this project please run the following:
* Go into the project: `cd imageSearch`
* Install: `npm install`

Project needs an additional file you can complete with your own Unsplash account and API keys [here](https://unsplash.com/developers)
 
* Create Account
* Create demo Application
*  Find your access key for the 'Client ID ###' portion below

<br>
Once you have Unsplash Account run the following from your project directory:

`cd src/; mkdir api; cd api; touch unsplash.js`

This will create an api directory under src/ and the unsplash.js file under the new api directory.

In the unsplash.js file insert the following with your own to define your API Key Variable via `REACT_APP_Auth`.

```javascript
import axios from 'axios';

const Authorization = process.env.REACT_APP_AUTH

export default axios.create({
	baseURL: 'https://api.unsplash.com', 
	
	headers: {
		Authorization: `bearer ${Authorization}`
	}
});
```

* Create the `.env` file `touch .env`
* Navigate to `.env` file
* Define the API Key Variable here like this: `REACT_APP_AUTH=Client-ID#####################################`

When this file is in place enter `npm start` and you are done!

***

## Further Information:
### Components
* *ImageCard* 
* *ListOfImages*
* *Search Field*

### API's
* *[Unsplash](https://unsplash.com/documentation#search-photos)*


### Available Scripts:

In the project directory, you can run:

* `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

