# CRUD USUARIOS
#### - Backend (Laravel) 
#### - Frontend (Angular)

### API REST LARAVEL (api)

Para la ejecución del api es necesario:
+ Tener instalado el sistema gestor de base de datos(SGBD) **MySQL**
+ Ejecutar el comando **composer install** dentro de la capeta *api*
+ Crear una base de datos en el SGBD MySQL con el nombre **api_users**
+ Crear y configurar los parametros necesarios en el archivo *.env* con los datos de acceso al SGBD
+ Tener instalado **composer** para poder ejecutar el comando de migración - ***php artisan migrate***
+ Por ultimo, para ejecutar el servidor, ejecutar el comando ***php artisan serve***

### CLIENTE ANGULAR (client)

Solamente es necesario ejecutar un servidor con la carpeta **dist**, para generarla es necesario tener Angular instalado de forma global con todos los requisitos
necesarios:
+ Ejecutar el comando **npm install**
+ Despues ejecutar el comando **ng build --prod=true**
##### Directorio
* client
  - **dist**
