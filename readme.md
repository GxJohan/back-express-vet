# Guía Express.js Backend

## Cómo levantar un servidor Express existente

### Pasos para ejecutar el proyecto:

1. **Navegar al directorio del proyecto**
   ```bash
   cd /ruta/del/proyecto
   ```

2. **Instalar las dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor**
   
   **Modo desarrollo (con reinicio automático):**
   ```bash
   npm run dev
   ```
   
   **Modo producción:**
   ```bash
   npm start
   ```

### Verificar que el servidor funciona
- Abrir el navegador en `http://localhost:3000`
- O usar curl: `curl http://localhost:3000`

---

## Crear un nuevo proyecto Express desde cero

### 1. Configuración inicial
```bash
# Crear directorio del proyecto
mkdir mi-proyecto-express
cd mi-proyecto-express

# Inicializar npm (crear package.json)
npm init -y
```

### 2. Instalar dependencias
```bash
# Instalar Express (framework web)
npm install express

# Instalar herramientas de desarrollo
npm install --save-dev nodemon

# Instalar dependencias útiles
npm install cors dotenv
```

### 3. Crear estructura del proyecto
```bash
# Crear archivo principal
touch app.js

# Crear carpetas organizacionales
mkdir routes controllers models middleware
```

### 4. Configurar scripts en package.json
Editar el archivo `package.json` y agregar en la sección `"scripts"`:
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

### 5. Crear archivo app.js básico
```javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
  res.json({ message: 'Servidor Express funcionando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

### 6. Ejecutar el servidor
```bash
npm run dev
```

---

## Comandos útiles

### Detener el servidor
- **Desde la terminal:** `Ctrl + C`
- **Matar proceso por puerto:**
  ```bash
  kill -9 $(lsof -t -i:3000)
  ```

### Verificar estado del servidor
```bash
# Ver qué proceso usa el puerto 3000
lsof -i :3000

# Probar endpoint
curl http://localhost:3000
```

---

## Estructura de proyecto recomendada

```
mi-proyecto-express/
├── app.js              # Archivo principal
├── package.json        # Configuración del proyecto
├── routes/             # Rutas de la API
│   └── userRoutes.js
├── controllers/        # Lógica de negocio
│   └── userController.js
├── models/            # Modelos de datos
│   └── User.js
└── middleware/        # Middlewares personalizados
    └── auth.js
```

---

## Dependencias explicadas

- **express**: Framework web para Node.js
- **cors**: Permite peticiones desde diferentes dominios
- **dotenv**: Manejo de variables de entorno
- **nodemon**: Reinicia automáticamente el servidor al detectar cambios

---

## Orden para agregar nuevas entidades

Si quieres agregar una nueva entidad (por ejemplo, Mascota), sigue este orden:

**Orden correcto:**

1. **Mascota.js** (modelo/entidad)
2. **mascotaController.js** (lógica de negocio)
3. **mascotaRoutes.js** (rutas)
4. **app.js** (registrar rutas)

**Lógica:** Primero defines la estructura de datos, luego la lógica que los manipula, después las rutas que usan esa lógica, y finalmente conectas todo en el archivo principal.

---

## Próximos pasos

1. Agregar rutas para tu API
2. Conectar a una base de datos
3. Implementar autenticación
4. Agregar validaciones
5. Manejar errores globalmente