# Desafío Fullstack Entry / Jr 2025
### Isidora Ulloa

- [Presentación](#presentación)
- [Cómo correr](#cómo-correr)
- [Preguntas](#preguntas)
- [Conclusión](#conclusión)

## Presentación
El siguiente documento y repositorio corresponden a mi entrega para el desafío Full Stack Jr. para postular a Bloom Reuse. Gracias nuevamente por la oportunidad y la disposición durante el proceso.

## Cómo correr
Abrir dos consolas en las carpetas `/frontend` y `/backend` en cada una correr los siguientes comandos:

```
npm install
npm run dev
```

**Nota**: La aplicación funciona para la versión 22 o anterior de Node, asegurarse de tener acceso a esta.


## Preguntas

   ### ¿Qué archivos/componentes creaste y qué hacen?
Además de los provistos por el template, se crearon los siguientes componentes:
* Backend:
  * Completar `src/data/brands.ts` con el resto de las marcas.
  * Diseñar y completar la base de datos para especificaciones de cada marca en `src/data/brands-settings.ts`.
  * Crear y diseñar la base de datos para respuestas al FAQ en `src/data/faq.ts`. Esto último fue hecho para que cada respuesta en el FAQ sea lo más parametrizable posible.
    * Junto con esto, crear los modelos, api y servicios correspondientes, con el fin de acceder a los datos desde el frontend. Se crea el endpoint `/faq`, el cual retorna una lista de todas las preguntas y posibles respuestas.
* Frontend:
  * Mover el bloque html con el logo desde `src/app/home.tsx` hasta `src/app/layout.tsx`, para que éste sea visible desde todas las páginas de la aplicación.
    * De la misma forma, se agrega un bloque de html al layout con los datos personales de la postulante.
  * Completar la página de inicio de la aplicación:
    * Se optó por poblar la lista de marcas de forma iterativa, con el fin de poder agregar más marcas a futuro sin complicaciones.
    * Junto con el nombre de cada marca, se agregó el logo de cada una, el cual quedó guardado en el frontend junto al logo de Bloom. Tanto el nombre de cada marca como el logo son clickeables.
  * Crear la página del faq.
    * Se utiliza la jerarquía de Node para crear la url final, la cual consiste en /faq/[marca]. El endpoint /faq/ es de transición y no tiene contenido.
    * Para obtener el `id` de la marca, se hace uso del método `usePathname`, ya que el método `useRouter` está deprecado.
    * Con el `id` de la marca, se hace una query a la api por la información individual de la marca utilizando el endpoint `/brand/:id` del backend. De forma similar, se llama a lista completa de respuestas posibles en el faq llamando al endpoint `/faq`.
    * La página cuenta con secciones "hardcodeadas" tales como las preguntas y las respuestas estándares. Las respuestas no comunes, tales como el manejo del envío, el pago y uso de cupones, se generan basado en la configuración de cada marca.
  * Mejoras estéticas varias a través de CSS.
   
   ### ¿Qué te gustó y qué mejorarías?
   Lo que más me gustó de mi implementación fueron los procesos parametrizados. Siempre es importante asegurarse que la comunicación entre Frontend y Backend sea transparente, de forma que al momento de agregar marcas nuevas, el Frontend no se vea afectado. De la misma forma, con el modelo actual es posible hacer mejoras estéticas al Frontend sin preocuparse de afectar a los datos. Me siento especialmente orgullosa de la parametrización de respuestas para el FAQ, ya que las opciones disponible para cada empresa también están parametrizadas y es posible mostrar las pequeñas diferencias entre una marca y otra.

   De las cosas que mejoraría, sin duda está el manejo de respuestas del FAQ. En un principio opté por llamar al FAQ completo, ya que el número de respuestas posibles no estan grande, y de esa forma no tener que hacer llamadas a la API. Sin embargo, tener que hacer operaciones de consulta dentro de la misma página no es óptimo, y para volúmenes más grandes de datos, esto puede conllevar a problemas de tiempo. También mejoraría la forma en la que se escriben las preguntas del FAQ en la página. Actualmente están hardcodeadas, y las preguntas que sólo están presentes para ciertas marcas (como la política de cupones) se manejan con un if. En una futura ocasión, manejaría las preguntas en sí de la misma forma que la lista de marcas en el Home, con una lista iterativa.

   ### ¿Qué harías distinto para escalar mejor?
   Lo principal, las imágenes de los logos de las marcas. En esta ocasión las dejé en el frontend por temas de tiempo, pero sin duda implementaría una forma de llamarlas desde el backend en una próxima ocasión.

   Además de ello, lo mencionado en el punto anterior respecto a la parametrización del FAQ.

   ### Extra: Video DEMO:

   Se adjunta en el correo enviado un vídeo de demostración de la aplicación. Debido a los límites del software de grabación, la sección del fondo con mis datos de contacto no se muestra en pantalla, sin embargo pueden verla al compilar la aplicación. El video también tiene un par de errores en la población del FAQ con respuestas parametrizadas. Esto ha sido corregido en la aplicación que ustedes tienen ahora.


## Conclusión

Gracias nuevamente por dejarme se parte de este proceso. Estoy atenta a cualquier duda a través de mi correo, teléfono o Telegram.

Isidora Ulloa
isidora.ulloa@ug.uchile.cl
+56 9 8712 7469
@shisidora
