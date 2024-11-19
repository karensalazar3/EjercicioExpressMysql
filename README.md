## API REST con MySQL y Express
Este proyecto implementa una API REST utilizando Express y MySQL para gestionar productos y categorías. 
La API sigue el patrón MVC (Modelo-Vista-Controlador) y permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tablas Products y Categories.
## 🛠️ Tecnologías utilizadas
- Node.js: Para el entorno de ejecución.
- Express: Framework para construir la API REST.
- MySQL: Base de datos relacional.
- dotenv: Para gestionar variables de entorno.
- Postman: Para probar los endpoints.

## 🚀 Funcionalidades
CRUD de Productos:

1. Crear productos.
Leer productos (todos o por ID).
Actualizar productos.
Eliminar productos.
CRUD de Categorías:

2. Crear categorías.
Leer categorías (todas o por ID).
Actualizar categorías.
Eliminar categorías.
Relación entre Productos y Categorías:

3. Asignar productos a categorías.
Consultar productos con sus respectivas categorías.

📂 Estructura del proyecto
sql_express_api/
├── config/
│   ├── database.js            # Conexión a la base de datos
│   ├── database.example.js    # Ejemplo de configuración
├── controllers/
│   ├── ProductController.js   # Lógica para productos
│   ├── CategoryController.js  # Lógica para categorías
├── routes/
│   ├── products.js            # Rutas de productos
│   ├── categories.js          # Rutas de categorías
├── .env                       # Variables de entorno
├── .gitignore                 # Ignorar archivos sensibles
├── package.json               # Configuración de npm
├── server.js                  # Configuración del servidor

📋 Requisitos previos
Tener instalado:

- Node.js
- MySQL
  
  🔧 Configuración del proyecto

- git clone https://github.com/karensalazar3/EjercicioExpressMysql/tree/main

📖 Endpoints disponibles
- Productos
- Método	Endpoint	Descripción
- POST	/products	Crear un producto
- GET	/products	Obtener todos los productos
- GET	/products/:id	Obtener un producto por ID
- PUT	/products/:id	Actualizar un producto por ID
- DELETE	/products/:id	Eliminar un producto por ID

  🧪 Pruebas
Usa Postman para probar los endpoints

🛡️ Buenas prácticas implementadas
Separación de responsabilidades con el patrón MVC.
Uso de dotenv para gestionar variables sensibles.
Archivo .gitignore configurado para evitar subir credenciales.

📜 Licencia
Este proyecto está bajo la licencia MIT.

