# Portfolio Personal - Mariano López

Un portfolio profesional moderno y responsivo construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- **Moderno y Responsivo**: Diseño completamente responsivo que se adapta a todos los dispositivos
- **Dark Mode**: Toggle para modo oscuro con persistencia en localStorage
- **Animaciones Suaves**: Transiciones y animaciones fluidas con Framer Motion
- **SEO Optimizado**: Metadata completa y optimización para motores de búsqueda
- **Formulario de Contacto**: API route funcional para envío de mensajes
- **TypeScript**: Tipado completo para mejor mantenibilidad
- **Tailwind CSS**: Estilos modernos y consistentes

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── api/               # API routes
│   │   └── contact/       # Endpoint para formulario de contacto
│   ├── about/             # Página "Sobre Mí"
│   ├── contact/           # Página de contacto
│   ├── projects/          # Página de proyectos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   └── Footer.tsx         # Pie de página
├── lib/                   # Utilidades y datos
│   ├── data.ts           # Datos de proyectos, habilidades, etc.
│   └── utils.ts          # Funciones utilitarias
└── types/                # Definiciones de TypeScript
    └── index.ts          # Tipos principales
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos modernos
- **ESLint** - Linting de código

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portfolio-personal
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📝 Personalización

### Datos Personales

Edita el archivo `src/lib/data.ts` para personalizar:

- **Proyectos**: Agrega, modifica o elimina proyectos
- **Habilidades**: Actualiza tu stack tecnológico
- **Experiencia**: Modifica tu historial laboral
- **Enlaces Sociales**: Actualiza tus perfiles sociales

### Información de Contacto

1. **Email**: Cambia `contact@example.com` en:
   - `src/lib/data.ts`
   - `src/components/Footer.tsx`
   - `src/app/contact/page.tsx`

2. **Enlaces Sociales**: Actualiza las URLs en:
   - `src/lib/data.ts`
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`

### Imágenes

1. **Foto de Perfil**: Reemplaza las URLs de imagen en:
   - `src/app/page.tsx` (página principal)
   - `src/app/about/page.tsx` (página sobre mí)

2. **Imágenes de Proyectos**: Actualiza las URLs en `src/lib/data.ts`

### Colores y Estilos

Modifica `tailwind.config.js` para personalizar:
- Colores principales
- Fuentes
- Espaciado
- Animaciones

## 🔧 Configuración del Formulario de Contacto

El formulario de contacto está configurado para funcionar con la API route en `src/app/api/contact/route.ts`.

### Para producción, considera integrar:

1. **Servicio de Email** (SendGrid, Nodemailer, etc.)
2. **Base de Datos** para almacenar mensajes
3. **Validación adicional** del lado del servidor
4. **Rate limiting** para prevenir spam

### Ejemplo con SendGrid:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: 'tu-email@ejemplo.com',
  from: 'noreply@tudominio.com',
  subject: `Nuevo mensaje de ${body.name}`,
  text: body.message,
  html: `<p>De: ${body.name} (${body.email})</p><p>${body.message}</p>`,
};

await sgMail.send(msg);
```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Dark Mode

El modo oscuro se implementa con:
- Toggle en el header
- Persistencia en localStorage
- Transiciones suaves
- Colores optimizados para ambos modos

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `.next`

### Otras plataformas

```bash
npm run build
npm start
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: mariano.lopez@example.com
- **LinkedIn**: [mariano-lopez](https://linkedin.com/in/mariano-lopez)
- **GitHub**: [marianolopez](https://github.com/marianolopez)

---

¡Gracias por usar este template de portfolio! 🌟
