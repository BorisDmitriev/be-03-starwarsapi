# BE-Starwars-API

Schreibe eine Express-Anwendung, die einen Endpunkt "/1" bereitstellt. Beim Aufruf dieses Endpunkts soll eine GET-Anfrage über HTTPS an die URL "[https://swapi-api.hbtn.io/api/people/1/](https://swapi-api.hbtn.io/api/people/1/)" gesendet werden. Verwende dafür die `https.get`-Methode. Verarbeite die empfangenen Daten, indem du sie in einem String sammelst und dann als JSON-Objekt an den Client zurückschickst. 

Achte darauf, dass der Server auf Port 3000 lauscht und eine entsprechende Konsolenausgabe zeigt, wenn er gestartet wird. Beachte, dass du `https` statt `http` verwenden musst.

**Bonus:**

Wenn du möchtest kannst du unter anderen Endpunkten ausprobieren, ob es mit node-fetch oder axios auch funktioniert.
