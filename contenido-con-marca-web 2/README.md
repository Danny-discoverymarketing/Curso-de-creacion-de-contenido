# Contenido con Marca

Landing page en español para un curso de creación de contenido y marca personal.
Incluye una presentación del curso, resultados esperados y tres semanas con
videos de YouTube embebidos.

## Videos incluidos

- Semana 1: https://youtu.be/jybf94f8zjU
- Semana 2: https://youtu.be/lm58Sie2c0Q
- Semana 3: https://youtu.be/02bNEoe0kX8

## Desarrollo local

Requiere Node.js `>=22.13.0`.

```bash
pnpm install
pnpm run dev
```

## Validación

```bash
pnpm run build
```

## Publicar en GitHub

```bash
git init
git add .
git commit -m "Crear landing del curso Contenido con Marca"
gh repo create contenido-con-marca --private --source=. --remote=origin --push
```

Cambia `--private` por `--public` si quieres que el repositorio sea público.

## Desplegar en Vercel

Después de subirlo a GitHub, importa el repositorio desde Vercel o usa:

```bash
pnpm dlx vercel --prod
```

Vercel detectará el proyecto como una app de Next.js y ejecutará `next build`.
