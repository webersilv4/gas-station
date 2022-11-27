import axios from 'axios';

require('dotenv').config();


let config = {
    headers: {
        "Access-control-allow-origin": '*'
    }
};


export default function googleMapsApi(req, res) {

    const { location } = req.query;

    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=posto+gasolina&type=gas_station|point_of_interest|establishment&location=${lat},${lng}&radius=1500&key=${process.env.GOOGLE_MAPS_API_KEY}
    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=posto+gasolina&type=gas_station|point_of_interest|establishment&location=${location}&radius=1500&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    axios.get(url, config)
        .then(response => {

            let elements = [];
            const { results } = response.data;

            results.forEach(element => {
                const { name } = element;

                elements.push({ name, location: element.geometry.location });
            });

            console.log(elements);

            return res.json(elements);
        })
        .catch(error => {
            res.json(error);
        });
}