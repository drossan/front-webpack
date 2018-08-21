# Estructura para remplazar a webpackdesarrollo

1. Instalamos YARN (se puede seguir usando npm, pero es más lento)
2. Ejecutamos comando -> yarn install
    * Instalamos todas las dependencias necesarias
3. Ejecutamos comando -> yarn link
    * Importante: Sin este comando, no podemos crear nuevos proyectos por linea de comandos de forma simple.
3. Empezamod a trabajar!
    1. En el archivo config.js de la raíz, configuramos con que proyecto vamos a trabajar mediante la constante 'proyecto'
        - const proyecto = 'prueba';
    2. Si ya existe el proyecto:
        1. Desarrollo: yarn start
        2. Producción: yarn build
    3. Si el proyecto aún no existe, Ejecutamos el comando -> yarn new [nombre-proyecto]
        * Ejemplo: yarn new proyecto-prueba

# Configurar un nuevo proyecto

1. Ejecutar comando: yarn new nombre-proyecto
2. Dentro de src/nombre-proyecto ir a la carpeta config
    1. Archivo config.js
        1. Constante entry -> ver doc: https://webpack.js.org/configuration/entry-context/
        2. Constante output -> ver doc: https://webpack.js.org/configuration/output/
        3. Constante ga_property_id: id de Google analytics
        4. Constante yandex_property_id: id de yandex
        5. Constante options:
            1. Encontramos tres opciones (
                1. BundleAnalyzerPlugin: https://github.com/webpack-contrib/webpack-bundle-analyzer
                2. ga: Si está en true, añadirá al principio del head, el script de Google analytics
                3. yandex: Si está en true, añadirá al principio del head, el script de Yandex
    2. Archivo config.pug
        1. Variables para pug
    3. Archivo templates.json
        1. json donde añadimos todas las página que vamos creando (si la página creada no está aquí insertada, no se compilará)