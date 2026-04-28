# Parcial MISW-4104

Evaluación Práctica Angular MISW-4104. 
Consulta usuarios y repositorios desde los JSON remotos:

Usuarios: https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/users.json
Repositorios: https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json


## Funcionalidades

- Modulo de usuarios con modelo `User`, servicio HTTP, listado y detalle maestro-detalle por componentes.
- Modulo de repositorios con modelo `Repository`, servicio HTTP, listado y detalle por URL, sin componentes.

## Ejecucion

en la raiz del proyecto ejecutar:
```sh
npm install
ng serve
```
o

```sh
npm install
npm start
```

La app queda disponible en `http://localhost:4200/`.

## Verificacion pruebas unitarias

```sh
npm run build
npm test -- --watch=false
```
