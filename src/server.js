import express from 'express';
import axios from 'axios';

const app = express();
const port = 4000; // Choose a port for your proxy server

app.use(express.json());

app.all('/translate', async (req, res) => {
        
        console.log('hi');
        console.log(req.headers);
        const request = {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json',
                        'target': req.target,
                        'format': 'text'
                }
        };                                                       
        try {   
                const translationResponse = await axios.post('https://translation.googleapis.com/language/translate/v2?key=$(key)', 
                        {q: req.headers.q,
                         target: req.headers.target,
                         'Content-Type': 'application/json; charset-utf-8'}
                );
                const translationData = translationResponse.data.data.translations[0];
                res.json(translationData);
        }
                catch (error) {
                res.status(500).send('Error proxying translation request');
        }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});