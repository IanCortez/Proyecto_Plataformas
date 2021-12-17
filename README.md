# Grupo tenedorcín :fork_and_knife:


## Proyecto: Just Fork


## Integrantes

* Sebastián Lizárraga @SebaU12 [github](https://github.com/SebaU12)
* Ian Cortez @IanCortez [github](https://github.com/IanCortez)



## Tema del proyecto

`Aplicación móvil para comprar productos gastronómicos y administración de restaurantes online` 



## Motivación

Al haber más aplicaciones con este formato como Rappi, Llamafood, entre otros, se desarrolla esta aplicación para darle mayor accesibilidad a los usuarios 
para acceder al servicio proporcionado por Just Fork, centrado principalmente a personas que quieren iniciar su negocio y/o facilitar al usuario poder 
adquirir productos de algún restaurante cercano a ellos.



## Funcionalidades

| Ionic Route | Backend URLs | Funcionalidad |
| ---- | ---- | ---- |
| `\home` |  `null` | Muestra un menú inicial |
| `\login` | 



## Instalación

### Base de datos

1. Abrir MySQL
2. (Opcional) si se desea no ingresar su usario y contraseña, entonces crear una cuenta en mysql con los siguientes datos:
  * Usuario: `utec`
  * Clave: `1234567890`
3. En MySQL usar el comando: `CREATE DATABASE just_fork`
4. Entrar al archivo `config.json`, ubicado en la carpeta `backend/config/`
5. En "username": Su_usuario, "password": "Su_contraseña", "database": "just_fork"
6. Ingresar el comando `npx sequelize-cli db:migrate`
7. Si se desea información más detallada de la base de datos lea `just_fork.sql` o revise dentro del backend `migrations` y `models`


### Backend

1. Ingresar a la carpeta `backend`
2. Instalar dependencias con 
```
  npm install
  npm install -g nodemon
```
  
3. Inicar el proyecto con `npm start`


### Ionic

1. Ingresar a la carpeta `justfork`
2. Instalar dependencias
  
  `npm install`
  
3. Iniciar el proyecto con `ionic serve`


