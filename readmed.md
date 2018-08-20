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
