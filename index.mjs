import moment from 'moment';
import data from './beers_pilsner_test1.json';
const formatted = [];
data.filter(item => Boolean(item)).forEach(item => {
	const year = moment(item.createDate).format('YYYY');
	const items = formatted.find(entry => entry.year === year);
	if (items) {
		items.beers++
	} else {
		formatted.push({
			year,
			beers: 1
		});
	}
});
console.log(formatted);

// import axios from "axios";
// import fs from "fs";

// const getIpa = async ({page}) => {
// 	return await axios
//   .get(
//     `http://api.brewerydb.com/v2/search?key=a350662bb09681320b67fe43d190defb&type=beer&q=pilsner&p=${page}`
//   ).then(resp => resp.data)  
// }

// let curPage = 1;
// let allData = [];
// let numberOfPages = 100;

// const fetchBeerData = async () => {
// 	const data = await getIpa({page: curPage});	
// 	allData = allData.concat(data.data);	
// 	curPage++;
// }

// const init = async () => {	
// 	await fetchBeerData();	
// 	while (numberOfPages > curPage) {		
// 		console.log('fetching page: ', curPage);
// 		await fetchBeerData();	
// 	} 
// 	fs.writeFileSync('./beers_pilsner_test1.json', JSON.stringify(allData, undefined, 4));		
// }

// init();



//response.data.data

// app.get("/api/genius-auth", (req, res) => {
//   let state = Math.floor(100000 + Math.random() * 900000);
//   axios
//     .post(
//       `https://api.genius.com/oauth/authorize
//     	client_id=${GENIUS_CLIENT_ID}&
// 			redirect_uri=http://localhost:${PORT}/api/geinus-auth-callback&
// 			scope=me&
// 			state=${state}&
// 			response_type=code`
//     )
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// app.get("/api/geinus-auth-callback", (req, res) => {});

// app.listen(PORT, () => console.log(`Genius API listening on port ${PORT}`));
