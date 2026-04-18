# Atlas Press Argentina

Sitio estatico listo para subir a GitHub, GitHub Pages o Hostinger.

## Contenido

- `index.html`
- `article.html`
- `admin.html`
- `assets/`

## Publicacion en GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido de esta carpeta a la raiz del repositorio.
3. Si queres usar GitHub Pages:
   - entra a `Settings`
   - abre `Pages`
   - en `Build and deployment`, elegi `Deploy from a branch`
   - selecciona la rama principal y la carpeta `/ (root)`

## Importante sobre el admin

Esta version usa `localStorage`.

Eso significa:

- el sitio publico se puede publicar sin problema;
- `admin.html` funciona en el navegador local de quien edita;
- los cambios no se sincronizan entre distintos navegadores o dispositivos;
- no reemplaza una base de datos real ni un CMS multiusuario.

## Uso recomendado

- usar esta version para publicacion estatica;
- usarla como base visual y editorial;
- migrar a backend real si despues queres administracion compartida online.
