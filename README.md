# Portafolio Personal - React + Vite (Atomic Design)

Portafolio web personal desarrollado como proyecto evaluado. La aplicacion presenta informacion profesional, formacion academica, experiencia laboral, proyectos relevantes y un formulario de contacto, implementado bajo la arquitectura Atomic Design (atoms, molecules, organisms, layouts).

---

## Tecnologias Utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS3
* React Icons
* Vitest y React Testing Library

---

## Requisitos Previos

Antes de ejecutar este proyecto en un entorno local, asegurate de tener instalado:

* Node.js (Version 18 o superior recomendada)
* npm (Incluido con la instalacion de Node.js)

---

## Instrucciones para Instalar Dependencias y Levantar el Proyecto

Sigue estos pasos en la terminal de tu equipo para ejecutar la aplicacion en local:

### 1. Clonar el repositorio
git clone https://github.com/vicentezepeda/portafolio.git
cd portafolio

### Nota importante para usuarios de Windows (Error de PowerShell)
Si al ejecutar comandos de npm te aparece el error de scripts deshabilitados en PowerShell, puedes cambiar la terminal a Command Prompt (CMD) o ejecutar el siguiente comando para habilitar permisos:

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

### 2. Instalar dependencias
Instala los paquetes necesarios definidos en el archivo package.json:
npm install

### 3. Levantar el entorno de desarrollo
Inicia el servidor local de desarrollo con Vite:
npm run dev

Una vez ejecutado el comando, abre tu navegador e ingresa a la direccion indicada en la consola (por defecto: http://localhost:5173/).

### 4. Ejecutar Pruebas Automatizadas (Testing)
Para correr las pruebas unitarias creadas con Vitest:
npm run test

---

## Autor

* Vicente Ignacio Zepeda Duarte
* Estudiante de Analista Programador Computacional - Duoc UC Sede Maipu
* Email: vichozepedaduarte2005@gmail.com
* GitHub: https://github.com/vicentezepeda