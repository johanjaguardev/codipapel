# Codipapel - Reciclaje y Destrucción de Documentos

Sitio web corporativo de Codipapel, empresa líder en reciclaje de papel y destrucción segura de documentos con más de 30 años de experiencia.

## 📋 Descripción

Aplicación web desarrollada con React, TypeScript y Vite que presenta los servicios de Codipapel, incluyendo:

- ♻️ Reciclaje de papel y cartón
- 🔒 Destrucción segura de archivos confidenciales
- 🚛 Recolección a domicilio
- 🌱 Consultoría ambiental
- 🏭 Gestión integral de residuos sólidos

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **SCSS** - Preprocesador CSS con módulos
- **React Icons** - Iconografía

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Previsualizar build
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores de ESLint
npm run lint:css     # Ejecutar Stylelint
npm run lint:css:fix # Corregir errores de Stylelint
npm run format       # Formatear código con Prettier
npm run deploy       # Desplegar a GitHub Pages
```

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes de React
│   ├── Header/        # Barra de navegación
│   ├── Hero/          # Sección principal
│   ├── Services/      # Servicios ofrecidos
│   ├── Materials/     # Materiales aceptados
│   ├── About/         # Información de la empresa
│   ├── Clients/       # Clientes destacados
│   ├── Contact/       # Formulario de contacto
│   ├── Footer/        # Pie de página
│   └── FloatingButtons/ # Botones flotantes de contacto
├── styles/            # Estilos globales SCSS
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _global.scss
│   └── main.scss
└── assets/            # Imágenes y recursos
```

## 🎨 Características

- ✅ Diseño responsive
- ✅ Navegación suave entre secciones
- ✅ Botones flotantes de WhatsApp y llamada
- ✅ Optimizado para SEO
- ✅ Módulos CSS para estilos encapsulados
- ✅ Configuración de linting estricta

## 📞 Secciones

1. **Hero** - Presentación con características principales
2. **Servicios** - Descripción detallada de servicios
3. **Materiales** - Tipos de materiales reciclables
4. **Nosotros** - Historia y valores de la empresa
5. **Clientes** - Empresas que confían en Codipapel
6. **Contacto** - Formulario y datos de contacto

## 🔧 Configuración de Desarrollo

El proyecto incluye configuraciones para:

- **ESLint** - Linting de JavaScript/TypeScript
- **Stylelint** - Linting de SCSS
- **Prettier** - Formateo de código
- **TypeScript** - Configuración estricta
- **Vite** - Optimización y build

## 📄 Licencia

Este proyecto es privado y pertenece a Codipapel.

---

## 📝 Changelog

### [0.1.0] - 2024-12-10

#### Añadido
- ✨ Componente Header con navegación sticky
- ✨ Sección Hero con características principales (30+ años, recolección, tecnología, confidencialidad)
- ✨ Componente Services con 6 servicios principales
- ✨ Componente Materials mostrando materiales reciclables
- ✨ Sección About con historia y valores corporativos
- ✨ Componente Clients para mostrar clientes destacados
- ✨ Formulario de contacto funcional
- ✨ Footer con información de contacto y enlaces
- ✨ Botones flotantes de WhatsApp y llamada telefónica
- 🎨 Sistema de estilos SCSS modular con variables y mixins
- 📱 Diseño responsive para todos los dispositivos
- ⚙️ Configuración completa de linting (ESLint + Stylelint)
- 🚀 Script de despliegue a GitHub Pages

#### Técnico
- ⚡ Configuración inicial de Vite + React + TypeScript
- 📦 Integración de React Icons para iconografía
- 🎨 Sistema de módulos SCSS para estilos encapsulados
- 🔧 Configuración de ESLint con reglas estrictas
- 🔧 Configuración de Stylelint para SCSS
- 💅 Integración de Prettier para formateo consistente
