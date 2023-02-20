'app.js' es el archivo principal para ejecutar el programa.

Observer
Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events.

- Corrección Oriol: en el topic on estan suscrits els 2 usuaris, quan 1 usuari envii un missatge, el usuari 2 té que rebre una notificació conforme el primer ha enviat un missatge

Es té que enviar una notificació en quan un dels usuaris envií un missatge. Si no hi ha més usuaris suscrits a la instancia del topic, no té que enviar ningún missatge.