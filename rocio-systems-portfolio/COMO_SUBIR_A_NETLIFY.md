# Cómo publicar el portfolio en Netlify

Este paquete contiene el portfolio completo: código, imágenes, animaciones,
versión responsive y selector ES/EN.

## Opción recomendada: importar el ZIP como proyecto

1. Descomprimí el archivo ZIP.
2. Guardá la carpeta `rocio-systems-portfolio` en GitHub.
3. En Netlify elegí **Add new project → Import an existing project**.
4. Conectá el repositorio.
5. Netlify leerá automáticamente `netlify.toml` y ejecutará:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node: `22`
6. Presioná **Deploy**.

## Importante

No uses el ZIP directamente en el área de arrastrar sitios estáticos: este es
un proyecto Next.js y debe construirse para conservar todas sus funciones.

Cuando Netlify asigne la URL definitiva, podés cambiar el nombre del sitio en:
**Site configuration → General → Site details → Change site name**.

