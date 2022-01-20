## Структура модов

Mod on Inner Core is a directory with build.config file, also can be several additional files, such as description file and default configuration file. Last one will be created automatically.

Если вы не хотите вдаваться в подробности построения модов, вы можете использовать стандартный шаблон мода, который описан [здесь](/ru/page/inner-core/standart-mod-template).

en: If you don't want to dive into the details of the build of mods, you can use the standard mod template, which is described [here](/ru/page/inner-core/standart-mod-template).

## Конфиг и описание

Файл конфига - config.json - задается в формате JSON и генерируется, либо исправляется автоматически. Всегда будет присутствовать значение enabled, которое включает/выключает весь мод. Содержимое этого файла будет визуализировано в меню мода, которое открывается через меню Inner Core. Работа с этим файлом производистся целиком из кода.

Файл информации - mod.info - задается в формате JSON и может не пристуствовать, однако тогда информации о моде в меню Inner Core не будет, название мода будет по имени директории и т.д.

Формат файла mod.info:

```javascript
{
"name":"Имя мода",
"author":"Автор мода",
"version":"Версия мода в любом формате",
"description":"Краткое описание мода"
}
```

Также директория мода может содержать файл mod_icon.png, который будет являться иконкой мода в меню Inner Core. Важен только формат - png - размер может быть любым.

## Основные параметры

Файл построения задается в формате JSON и имеет несколько разделов, в которых описываются различные настройки и элементы мода. Первый раздел - defaultConfig - является обязательным и описывает основные параметры построения мода. С ним содержимое файла построения будет выглядеть следующим образом (комментарии, помеченные символом #, присутствовать не должны):

```javascript
{
  "defaultConfig": {
    "api":"CoreEngine", #API, которое будет использовано для всех выполняемых файлов по-умолчанию, варианты API будут перечислены далее
    "buildType":"develop", #Этот параметр при разработке должен быть develop, далее он будет изменяться с помощью Inner Core
    "libraryDir":"lib/", #Необязательный параметр, который задает стандартную директорию, откуда будут загружаться библиотеки.
  }
}
```

API задает абсолютное большинство методов, которые могут использовать исполняемые файлы мода. Однако есть набор базовых методов, которые доступны для конкретных типов выполняемых файлов. Виды API:
*CoreEngine - Основной и самый объемный API для разработки модов. В основном вам нужно будет использовать его, остальные варианты более ситуативны и не нужны в большинстве случаев.
*AdaptedScript - Реализует основные возможности, однако не имеет различных реализаций, сильно упрощающих разработку, таких как Tile Entity.

## Исполняемые файлы

Исполняемые файлы содержат исходный код мода, написаный под нужный вариант API на JavaScript, которые будут выполняться в различные моменты, зависящие от их типа. Так же их можно строить из отдельных директорий и компилировать в байт-код из меню Inner Core для быстродействия и лучшего дебага (релизные версии мода).

Исполняемые файлы описываются в разделе compile, который является массивом. Их может быть сколько угодно много:

```javascript
{
  "defaultConfig": {
    //...
  },
  ...
  "compile": [
    {
      "path":"Локальный путь к файлу, к примеру main.js, source/logger.js",
      "sourceType":"Тип исполняемого файла, они будут перечислены далее",
      "sourceName":"Имя, необязательный параметр, будет использовано при выводе ошибок",
      "api":"Тип API, если вы хотите выбрать не тот тип, который вы указали в defaultConfig конкретно для этого файла, иначе этот параметр не нужен"
    },
    //...
  ]
}
```

Типы исполняемых файлов:

- mod - В этом типе файлов находится основной исходный код модов, задающий их контент.
- launcher - Должен присутствовать только один файл этого типа. В нем осуществляется запуск мода в определенный момент (Например если мод использует API другого мода, он должен запуститься только после его загрузки и т.п.). Если никаких дополнительных условий для запуска не нужно, он просто должен содержать команду Launch();
- library - Библиотека. Может с помощью специальных методов, доступных только этому типу файлов, регистрировать новые модули API, которые используются модами, если те эту библиотеку импортируют. Этот тип файлов не надо описывать, если он находится в директории, заданной в параметре libraryDir.
- preloader - Отдельный специфический тип файла, который будет выполняться до загрузки MCPE после загрузки ресурсов и требуется для их создания и изменения. На момент написания данной документации, использует отдельный тип API, который еще плохо реализован.
- custom - Выполняется только с помощью специального метода - runCustomSource(), вызванного из остальных типов исполняемых файлов. Может принимать параметры.

Подробнее про каждый тип файлов и их специальные методы и значения будет рассказано в [[InnerCore/Базовые_методы_и_переменные_исполняемых_файлов|отдельной главе]].

## Построение исполняемых файлов

Исполняемым файлам можно задавать построение из отдельных директорий. Построение происходит из многих файлов, которые описываются в файле построения. Этот метод позволяет разбивать код на части и группировать их, а не писать один огромный файл. Это дает не только читабельность, но так же позволяет более оптимально компилировать моды и дебажить их в продакшине.

Директории построения задаются в разделе buildDirs, который является массивом:

```javascript
{
  "defaultConfig": {
    // ...
  },
  // ...
  "buildDirs": [
    {
      "dir":"dir/to/build/", #Директория, из которой будет выполняться построение, должна заканчиваться символом /
      "targetSource":"dir/to/source/file", #Файл, в который будет выполняться построение. ВАЖНО: содержимое файла будет полностью перезаписываться при каждом построении, так что не стоит там что либо писать.
    },
    // ...
  ]
}
```

Директория построения задается следующим образом:

*Она должна содержать файлы с кодом, которые вы хотите объединить в исполняемый файл. Они могут находиться в дочерних директориях и иметь любые названия.
*Она должна содержать файл построения .includes, в нем прописаны все локальные пути файлов, которые участвуют в построении в нужном порядке, так же он может содержать комментарии (// или #) и пустые строки

Пример содержимого .includes:

> // Предположим, что .includes находится в директории dev/ в моде // Этот файл должен находиться на пути dev/header.js
> header.js // Эти файлы соответсвенно должны находиться в dev/source/
> source/blocks.js
> source/items.js

Важно понимать, что каждый из этих файлов должен быть завершенным куском кода, потому что каждый из них компилируется по отдельности. Т.е. нельзя начать блок в одном файле и закончить в следующем.

## Ресурсы

Ресурсы модов делятся на две группы - текстуры интерфейса (GUI) и остальные (блоки, предметы, текстуры для моделей и т.п.). Какие бывают типы ресурсов будет рассказано в [[InnerCore/Ресурсы|отдельной главе]].

Директории ресурсов описываются в разделе resources, их может быть сколько угодно много:

```javascript
{
  "defaultConfig": {
    // ...
  },
    // ...
  "resources": [
    {
      "path":"resource/dir/", #Директория ресурсов, должна заканчиваться символом /
      "resourceType":"resource|gui", #Тип подгрузки ресурсов: resource - внутриигровые ресурсы, gui - текстуры интерфейса
    },
    // ...
  ]
}
```

Подробно о ресурсах и их использовании будет рассказано [отдельно](/ru/page/inner-core/resources).