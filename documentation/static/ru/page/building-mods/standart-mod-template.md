В большинстве случаев вам не потребуется импровизировать со структурой мода. Для этого тут описан шаблонный файл построения и то, какую структуру должен иметь мод с таким построением.

Здесь приведено содержимое файла build.config:

```json
{
    "defaultConfig":{
        "buildType":"develop",
        "api":"CoreEngine",
        "libraryDir":"lib/"
    },

    "resources":[
        {
            "path":"res/",
            "resourceType":"resource"
        },
        {
            "path":"gui/",
            "resourceType":"gui"
        }
    ],

    "buildDirs":[
        {
            "targetSource":"main.js",
            "dir":"dev/"
        }
    ],

    "compile":[
        {
            "path":"main.js",
            "sourceType":"mod"
        },
        {
            "path":"launcher.js",
            "sourceType":"launcher"
        }
    ]
}
```

## Структура мода

Начнем с API, он един для всего мода - это Core Engine. Основная часть дальнейшей документации будет как раз по нему, т.к. это самый распространенный и удобный вид API в большинстве случаев.

Если вам нужно подключить какие то библиотеки, вы можете создать директорию lib в директории мода и копировать их туда, после чего их можно будет подключить из любых исполняемых файлов мода.

Все ресурсы мода должны находиться в директории res, если их нет, она должна быть пустой. Аналогично для текстур интерфейса, только они должны находиться в директории gui. Как конкретно работают ресурсы вы сможете прочитать [[InnerCore/Ресурсы|здесь ]].

В директории мода должен присутствовать файл launcher.js, который по-умолчанию должен содержать только команду Launch(); Более подробная работа с лаунчером мода будет описана в другой главе.

## Исходный код мода

Так же в моде обязана присутствовать директория построения dev, в которой должен быть файл построения .includes, в нем прописаны все локальные пути файлов, которые участвуют в построении в нужном порядке, так же он может содержать комментарии (// или #) и пустые строки

Пример содержимого .includes:

```text
// Предположим, что .includes находится в директории dev/ в моде
// Этот файл должен находиться на пути dev/header.js
header.js
// Эти файлы соответсвенно должны находиться в dev/source/
source/blocks.js
source/items.js
//Все эти файлы будут собраны в файл main.js и запущены, как основной код мода.
```

## Заключение

Как говорилось в начале данная структура подходит для большинства модов и если вам не нужно ничего особенного, то оптимально использовать именно её.
