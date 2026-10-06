# Practical Thinking — Web Platform & Architecture Showcase

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.7-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **Nota de confidencialidad:** Este repositorio es un *engineering showcase* del sitio comercial de **Practical Thinking**. Muestra la arquitectura del App Router de Next.js 16, el sistema de diseño oscuro de alta conversión, la capa de abstracción para el catálogo 3D y la canalización de leads sin exponer variables de entorno privadas ni secretos de infraestructura.

---

## 🔗 Sitio en Vivo

* **Plataforma Principal (Producción):** [practical.com.ar](https://practical.com.ar)
* **Entorno de Staging:** `test.practical.com.ar` *(despliegue continuo via Vercel)*

---

## 🏗️ Arquitectura del Sistema

La aplicación está construida sobre **Next.js 16 (App Router)** y estructurada para atender dos unidades de negocio independientes (Física y Digital) bajo una experiencia de usuario unificada.

```mermaid
flowchart TD
    Client([Usuario / Cliente]) --> CF[Cloudflare WAF / DNS]
    
    subgraph Vercel ["Vercel Edge Platform"]
        CF --> Edge[Edge Router]
        Edge --> AppRouter[Next.js 16 App Router]
    end

    subgraph CoreRoutes ["Routing Ecosystem (/app)"]
        AppRouter --> RootPage["/ (Hero & Ecosystem Landing)"]
        AppRouter --> Div3D["/3d (División Física & CAD)"]
        AppRouter --> DivDev["/dev (División Software & IA)"]
        
        Div3D --> Catalog["/3d/catalogo (CatalogClient)"]
        Catalog --> DynamicItem["/3d/catalogo/[id] (Dynamic Routes)"]
    end

    subgraph DataServices ["Services & Lead Engine"]
        Catalog <--> SupabaseDB[(Supabase PostgreSQL)]
        RootPage --> WAEngine["lib/whatsapp.ts (Intent Message Builder)"]
        Div3D --> WAEngine
        DivDev --> WAEngine
    end
🛠️ Stack Tecnológico & Herramientas
Core Framework: Next.js 16.3.7 (App Router, Server & Client Components).

Biblioteca UI: React 19.2.8, TypeScript 5.

Estilos & Diseño: Tailwind CSS v4, PostCSS, Google Fonts (next/font).

Backend & Persistencia: Supabase Client (@supabase/supabase-js).

Canalización Comercial: Enrutador de mensajes dinámicos vía WhatsApp (lib/whatsapp.ts).

Infraestructura: Vercel Edge Hosting + Cloudflare DNS/WAF.

💡 Aspectos Destacados de Ingeniería
Arquitectura Híbrida Bifurcada:

Navegación y diseño adaptativo diferenciando la División Física (3D) de la División Digital (Dev) con esquemas de color específicos y componentes altamente interactivos.

Generación Dinámica de Enlaces de Conversión:

Abstracción mediante utilitarios para construir URLs de WhatsApp codificadas con contexto de intención según la acción del usuario en el sitio.

Catálogo de Productos 3D Basado en Estado:

Integración de Server Components para vistas SEO e interfaces de cliente (CatalogClient.tsx) con soporte para catálogo interactivo respaldado por Supabase.

📁 Estructura del Showcase Sanitizado
Plaintext
practical-thinking-showcase/
├── app/
│   ├── layout.tsx             # Root Layout (Fonts, Metadata, Navbar, Footer)
│   ├── page.tsx               # Root Landing Page (Hero, Split Divisions, Step Workflow)
│   ├── 3d/                    # División Estudio 3D & Catálogo
│   │   ├── page.tsx
│   │   └── catalogo/
│   │       ├── page.tsx
│   │       ├── CatalogClient.tsx
│   │       └── [id]/page.tsx
│   └── dev/                   # División Software & IA
│       └── page.tsx
├── components/                # UI Components (Navbar, Footer, WhatsAppButton)
├── lib/                       # Helpers & Clients
│   ├── supabase.ts            # Cliente de Supabase sanitizado
│   ├── whatsapp.ts            # Generador de enlaces comerciales
│   └── mock-data.ts           # Mock data para testing
├── package.json               # Dependencias del proyecto
└── README.md

---

## 👤 Autor & Contacto

Desarrollado por **Franco** — *Practical Thinking Studio*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Franco-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/franco-bertotti/)
[![Sitio Web](https://img.shields.io/badge/Web-practical.com.ar-000000?style=flat-square&logo=firefox)](https://practical.com.ar)
[![Email](https://img.shields.io/badge/Email-Contacto-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:francob1997@gmail.com)