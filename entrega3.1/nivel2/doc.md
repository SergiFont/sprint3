- 'app.js' es el archivo principal para ejecutar el programa, donde se crean los juegos y los jugadores. Esta ejecuta la función 'diceGame', el cuál es el prototipo de juego escogido para probar el ejercicio.

- La función 'diceGame' recibe tres parámetros. Los dos primeros parámetros son los jugadores, y el tercero el juego.
Se declara un contador, el cuál servirá para tener un control sobre las rondas del juego.
Añadimos los jugadores a la instancia 'Game' con su método para ello, 'addPlayer'. Mas información sobre ello en la explicación mas adelante de la clase 'Game'.

Se declara una función, 'autoPlay', que sirve para simular una partida de manera automática. Esta recibe un parámetro (el cuál deberá ser un número) para decidir el número de rondas (5 por defecto). 

Una vez comprobado que el parámetro 'rounds' es un número, y que aún no se han cumplido las rondas, se llama a la función 'playGame', la cuál recibe como parámetros los dos jugadores. Esta función ejecuta otra llamada 'throwDices' que se encarga de tirar los dados (le asigna un número aleatorio del 1 al 6 a cada jugador) y muestra por consola el resultado, retornando los valores en el dado de cada jugador. Estos valores, los usa de vuelta la función 'playGame' para calcular que jugador ha ganado la ronda mostrándolo por consola, además de actualizar el marcador en la instancia de la clase 'Scorer'.

De vuelta en la función 'diceGame', una vez obtenidos los resultados, se muestra el marcador actual por la consola, llamando al método 'showScore' de la clase 'Scorer'. La función 'autoPlay' se llama a si misma hasta que no se cumplan las rondas específicadas. Dispone de un 'setTimeout' entre rondas para simular una partida. En cuanto se cumplan dichas rondas, la función llama a un método de la instancia 'Game', el cuál, usando la instancia única de la clase 'Scorer' como referencia, muestra quien ha sido el ganador de la partida.

- La clase Player dispone de un atributo '#name', el cuál le da valor el constructor, que recibe el parámetro antes mencionado en la función diceGame. La clase también dispone de un método para acceder al valor de la propiedad '#name', ya que este es privado, del objeto creado con la instancia.

- La clase Game dispone de un atributo 'players', el cuál es un array donde se guardan los dos jugadores que participan en la partida. Dentro de la clase, encontramos varios métodos;
'addPlayer': Recibiendo el nombre de un jugador como parámetro (String), lo añade al array 'players'.
'showScore': Haciendo referencia a la instancia única de la clase 'Scorer', llama a un método de dicha clase para mostrar el marcador actual por consola.
'showWinner': Recibe los dos jugadores como parámetros. Llama a los métodos de la clase 'Scorer' para obtener el marcador individual de cada jugador, compararlos, y mostrar por consola el ganador de la partida, o el empate.

- La clase Scorer está construida basada en el patrón Singleton. Eso significa que no puede existir más de una instancia de la clase en la aplicación, y todas sus creaciones de instancias (new Scorer) harán referencia a la misma.
En su constructor se especifíca que si no existe, que se cree con sus dos atributos, los cuales son el marcador individual de cada jugador. Si ya existe, simplemente devuelve la instancia existente. La clase dispone de varios métodos;
'getScoreP1': devuelve el marcador actual del player1.
'getScoreP2': devuelve el marcador actual del player2.
'updateScoreP1': añade +1 al contador del player1.
'updateScoreP2': añade +1 al contador del player2.
'showScore': muestra por consola el marcador general.


