# Complementario #2 del Segundo Parcial.
## Repartición de Rutas:
* Manuel Pincay:
   - Carros (Interfaces, models, controllers, Routers).
* Branly Yudeh:
   - Clientes y Trabajadores (Interfaces, models, controllers, Routers).
* Kelvin Muñoz:
   - Espacios y servicios (Interfaces, models, controllers, Routers).
* Ian Velez:
   - Establecimiento (Interfaces, models, controllers, Routers). 
* Jesús Reyes:
   - Reservas (Interfaces, models, controllers, Routers).

## Pasos a seguir para la implementación del programa.
1. Como pre-requisito debemos tener abierto nuestro Visual Studio Code y el Docker Desktop para que nuestro programa funcione de manera correcta.
2. Una vez tengamos abierto el Visual Studio Code, ejecutaremos una terminal (consola) en la carpeta microservicios.
3. En la consola ubicaremos el comando `Docker-compose build`.
4. Luego ubicaremos el comando `Docker-compose up`.

### *A tener cuenta*:
- En el archivo nginx irán las "rutas" de todos los microservicios requeridos.
- Asi mismo en el archivo docker-compose se detallan una serie de parametros importantes para el correcto funcionamiento del programa.
- La configuración del archvio .env es para el apartado de desarrollo.
- Y por otro lado el archivo docker-compose está más orientado al ambito de producción.