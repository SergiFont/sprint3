- 'survived_hell.js': Es el archivo principal para ejecutar el código del ejercicio. Tiene una función (turnAround) que
junta todas las demás funciones para generar el resultado.

- 'listContents.js': Función para identificar las carpetas y archivos en una dirección específica (parámetro 'inbox').
Le envía como parámetro a la siguiente función (readContent.js) todos los archivos que ha encontrado.

- 'readContent.js': Función para leer cada uno de los archivos de texto y extraer su contenido.
Le envía como parámetro a la siguiente función (saveContent.js) cada uno de los archivos, con su contenido.

- 'saveContent.js': Función para, por cada archivo con su contenido enviado, darle la vuelta al contenido de texto recibido con la función 'reverseText', y luego crear un archivo nuevo y guardarlo en la ubicación deseada (outbox). 

El código adjunto lee un archivo situado en un directorio inbox y escribe su contenido invertido en un
otro archivo en el directorio outbox. Reestructura y simplifique el código existente para evitar el denominado Callback Hell.
