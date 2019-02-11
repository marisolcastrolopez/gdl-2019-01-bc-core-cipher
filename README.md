
# CryptMail :envelope:  :closed_lock_with_key:
Es una webapp para cifrar mensajes de correo electrónico dentro de una empresa con un correo compartido y así mantener la información confidencial entre los usuarios del correo.

## ¿Cómo ingresar?

 Ver en la siguiente liga
[Click aquí para ingresar a la app](https://marisolcastrolopez.github.io/gdl-2019-01-bc-core-cipher/src/index.html)   :link:


## Especificaciones Técnicas sobre CryptMail
**Cryptmail** está basado en el cifrado césar que es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.
 **Cryptmail** es capaz de cifrar minúsculas y mayúsculas:
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
Webapp estructurada con **HTML, CSS y JS.**

## Usuario promedio de CryptMail   :computer:
Es un trabajador de oficina promedio, que comparte su correo electrónico con más personas. El correo que usa es una cuenta compartida con muchas personas de su área. En ocasiones necesita comunicarse de manera confidencial con otras personas de la misma empresa y requiere de un servicio de cifrado en línea que le ayude a cifrar sus e-mails, ya que otros usuarios de su cuenta de correo pueden ver los mensajes que él envía. El usuario que interactúa con esta webapp, utiliza en su mayoría su computador (laptop, o computadora de escritorio) ya que hace uso de ella durante su jornada de trabajo. Usa su teléfono móvil cuando ha salido de su jornada laboral y necesita enviar correos urgentes por ese medio.

## Relación de Usuario-Interfaz
La aplicación cuenta con dos pestañas para acceder rápidamente al cifrado o descifrado del texto. Esto se pensó con el objetivo de hacer la experiencia de usuario más rápida y concisa ya que el usuario tiene el tiempo limitado en su jornada laboral. Necesita solucionar su problema de manera rápida y acceder a todas las partes de la aplicación en la misma pantalla sin re direccionamientos.

## Checklist

### Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [x] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
