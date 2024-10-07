# Marishop - Plataforma de Gestión de Inventarios

**Marishop** es una solución completa para la gestión de inventarios, construida con **Node.js**, **Express**, y **MongoDB**. Esta plataforma facilita la organización eficiente de productos, la autenticación segura de usuarios, y el manejo de imágenes. Su interfaz es totalmente adaptable y está diseñada para brindar una experiencia óptima en dispositivos móviles, utilizando **TailwindCSS**.


VIDEO EXPLICATIVO EN YOUTUBE: https://youtu.be/WPLsLgbU1cU 
INFORME DEL TRABAJO: https://drive.google.com/file/d/1G6N_1QfsaIFnda-7LbMdBB1te6dCGpdR/view?usp=sharing

## Principales Funcionalidades

- **Control de Productos**: Posibilidad de añadir, actualizar y eliminar productos junto con sus imágenes.
- **Autenticación Segura**: Implementación de **JWT** y **bcryptjs** para asegurar la protección de la información del usuario.
- **Manejo de Archivos**: Uso de **multer** para cargar y gestionar imágenes de los productos.
- **Interfaz Adaptativa**: Diseño responsivo con **TailwindCSS**, optimizado para smartphones y tabletas.
- **Base de Datos NoSQL**: Almacenamiento eficiente de datos utilizando **MongoDB** y **Mongoose**.

## Requisitos Previos

Antes de comenzar a utilizar **Marishop**, asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- **Node.js** (versión 14 o superior)
- **MongoDB** (versión 4.0 o superior)

## Instalación

Para comenzar, clona el repositorio de Marishop:

`git clone https://github.com/usuario/marishop`

Dirígete a la carpeta del proyecto:

`cd marishop`

Instala las dependencias necesarias con el siguiente comando:

`npm install`

Compila los estilos con **TailwindCSS**:

`npm run build:css`

## Uso

Para ejecutar el servidor, utiliza el siguiente comando:

`node app.js`

Una vez iniciado, la aplicación estará disponible en **http://localhost:3000**.

Accede a la aplicación y visualiza su funcionamiento en tu editor de código preferido como **Visual Studio Code**.

## Comandos Disponibles

- `npm run build:css`: Compila los estilos con **TailwindCSS**.
- `npm start`: Ejecuta la aplicación en modo producción.

## Principales Dependencias

- **Express**: Framework web rápido para Node.js.
- **MongoDB**: Base de datos NoSQL para gestionar la información.
- **Mongoose**: Herramienta para interactuar con MongoDB.
- **JWT**: Sistema de autenticación con **JSON Web Tokens**.
- **Bcryptjs**: Para el cifrado de contraseñas.
- **Multer**: Gestión de archivos para cargar imágenes.
- **TailwindCSS**: Framework CSS para diseños adaptativos.

Este sistema ofrece todo lo necesario para gestionar eficientemente tu inventario, asegurando seguridad y una experiencia de usuario intuitiva.
