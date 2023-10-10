# BE-Starwars-API

Write an Express application that provides an endpoint "/1". When this endpoint is called, a GET request should be sent over HTTPS to the URL "[https://swapi-api.hbtn.io/api/people/1/](https://swapi-api.hbtn.io/api/people/1/)". Use the `https.get` method for this. Process the received data by collecting it into a string and then sending it back to the client as a JSON object. 

Make sure that the server is listening on port 3000 and shows appropriate console output when it is started. Note that you must use `https` instead of `http`.

**Bonus:**

If you want you can try under other endpoints if it works with node-fetch or axios too.
