# Guía de Personalización del Portfolio de Fotografía

## 🎨 Cambiar Colores del Tema

### Ubicación de los Colores
Todos los colores están definidos en `app/globals.css` usando variables CSS con el formato OKLCH para mejor precisión de color.

### Colores Principales

#### Color Primario (Cyan)
\`\`\`css
--primary: oklch(0.55 0.15 200); /* Modo claro */
--primary: oklch(0.65 0.15 200); /* Modo oscuro */
\`\`\`

#### Color Secundario (Amarillo)
\`\`\`css
--secondary: oklch(0.75 0.15 85); /* Modo claro */
--secondary: oklch(0.8 0.15 85); /* Modo oscuro */
\`\`\`

### Cómo Cambiar Colores

1. **Abre el archivo** `app/globals.css`
2. **Busca las variables** en `:root` (modo claro) y `.dark` (modo oscuro)
3. **Modifica los valores OKLCH**:
   - Primer número: Luminosidad (0-1)
   - Segundo número: Saturación (0-0.4)
   - Tercer número: Matiz (0-360)

### Ejemplos de Paletas de Colores

#### Paleta Azul/Naranja
\`\`\`css
:root {
  --primary: oklch(0.5 0.2 240); /* Azul */
  --secondary: oklch(0.7 0.15 40); /* Naranja */
}

.dark {
  --primary: oklch(0.6 0.2 240); /* Azul más claro */
  --secondary: oklch(0.75 0.15 40); /* Naranja más claro */
}
\`\`\`

#### Paleta Verde/Rosa
\`\`\`css
:root {
  --primary: oklch(0.6 0.15 140); /* Verde */
  --secondary: oklch(0.7 0.15 350); /* Rosa */
}

.dark {
  --primary: oklch(0.7 0.15 140); /* Verde más claro */
  --secondary: oklch(0.75 0.15 350); /* Rosa más claro */
}
\`\`\`

#### Paleta Monocromática (Grises)
\`\`\`css
:root {
  --primary: oklch(0.4 0 0); /* Gris oscuro */
  --secondary: oklch(0.6 0 0); /* Gris medio */
}

.dark {
  --primary: oklch(0.7 0 0); /* Gris claro */
  --secondary: oklch(0.5 0 0); /* Gris medio oscuro */
}
\`\`\`

## 🌙 Modo Oscuro

### Funcionamiento
- **Automático**: Detecta la preferencia del sistema
- **Manual**: Toggle en la navegación
- **Persistente**: Guarda la preferencia en localStorage

### Personalizar Colores del Modo Oscuro
Modifica las variables dentro de `.dark` en `app/globals.css`:

\`\`\`css
.dark {
  --background: oklch(0.08 0 0); /* Fondo muy oscuro */
  --foreground: oklch(0.98 0 0); /* Texto claro */
  --card: oklch(0.12 0 0); /* Tarjetas oscuras */
  /* ... más variables */
}
\`\`\`

## 🎯 Consejos para Elegir Colores

### Contraste
- **Texto normal**: Mínimo 4.5:1 de contraste
- **Texto grande**: Mínimo 3:1 de contraste
- Usa herramientas como [Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Armonía de Colores
- **Complementarios**: Colores opuestos (ej: azul/naranja)
- **Análogos**: Colores cercanos (ej: azul/verde)
- **Triádicos**: Tres colores equidistantes (ej: rojo/amarillo/azul)

### Herramientas Recomendadas
- [OKLCH Color Picker](https://oklch.com/)
- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Rueda de colores

## 📱 Responsive Design

El portfolio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Estructura de Archivos

\`\`\`
├── app/
│   ├── globals.css          # Variables de color y estilos
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── navigation.tsx       # Navegación con toggle
│   ├── theme-toggle.tsx     # Componente de cambio de tema
│   ├── hero.tsx             # Sección hero
│   ├── portfolio.tsx        # Galería de fotos
│   ├── about.tsx            # Sección sobre mí
│   └── contact.tsx          # Formulario de contacto
└── public/                  # Imágenes y assets
\`\`\`

## 🚀 Deployment

1. **Vercel**: Click en "Publish" en la interfaz de v0
2. **GitHub**: Push el código y conecta con Vercel
3. **Variables de entorno**: No necesarias para este proyecto

## 📞 Soporte

Si necesitas ayuda adicional:
1. Revisa la documentación de [Tailwind CSS](https://tailwindcss.com/)
2. Consulta la guía de [OKLCH colors](https://oklch.com/)
3. Abre un ticket de soporte en [vercel.com/help](https://vercel.com/help)
