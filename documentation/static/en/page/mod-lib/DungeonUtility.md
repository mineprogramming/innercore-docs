# Dungeon Utility 
Dungeon Utility - мод библиотека, для создания структур и работы со структурами

+ Преимущества:
  + 1. Быстрая скорость работы 
  + 2. Поддержка различных форматов 
  + 3. Большое количество возможностей 
+ Минусы 
  + 1. Поддержка только inner core 1.16
  + 2. Необходимо делать зависимость мода от Dungeon Utility

## Создание своей структуры 
Базовые методы 
Для начала необходимо создать структуру, это можно сделать кодом или загрузить структуру из файла 

### Сохранение структуры в файл 
+ Для начала возьмите топор их креатива "Dungeon wood"
  + 1. Вылелите первую и вторую точку(нажатие по блоку)
  + 2. Выберите середину структуры(нажатие на шифте)
  + 3. Ввиде команду "/struct save name:string save_air:bool specialSeparator:bool type:string, compile:bool", если проще говоря "/struct save name false false"



+ Все поддерживаемые форматы 
  + DungeonUtility 
  + DungeonAPI
  + DungeonAPI_V2
  + DungeonCore
  + Structures


## Модуль StructureLoader
StructureLoader модуль для загрузки структур 

Регистрация загрузка структуры(Структуры загржаются во время загрузки мира, в Dungeon Utility 5.0 по возможности загружает во время загрузки модификаций)
```js
StructureLoader.load(path, name, type, compression)
```
+ path - полный путь к файлу
+ name - имя структуры под которым она будет доступна 
+ type - формат загружаемой структуры, по умолчанию DungeonUtility 
+ compression - сжатали структура, по умолчанию false 

Загружает структуру в любое время, не все форматы это поддерживают

```js
StructureLoader.loadRuntime(path, name, type, compression)
```
+ path - полный путь к файлу
+ name - имя структуры под которым она будет доступна 
+ type - формат загружаемой структуры, по умолчанию DungeonUtility 
+ compression - сжатали структура, по умолчанию false 

Проверка загружинали структура 

```js
StructureLoader.isLoad(name)
```
+ name - имя структуры 

Полученние StructurePool по имени, по умолчанию pool везде "default"
```js
StructureLoader.getStructurePoolByName(name)
```


Сохраняет структуру в выбранный формат 
```js
StructureLoader.save(path, name, type, compile)
```

## модуль StructureIntegration
Создаёт интеграцию с BonsaiPots
```js
StructureIntegration.registerTreeToBonsaiPots(sapling, stru, obj)
```
+ sapling: object
  + id - id саженца
  + data - data саженца
+ stru - имя структуры 
+ obj: object
  + move: Object - смещение 
    + x 
    + y
    + z
  + drops: array
    + id
    + data
    + chance
    + rolls 

## модуль ItemGeneration
Модуль для генерации предметов 

Создать генератор предметов 
```js
ItemGeneration.newGenerator(name)
```

Добавить генерируемый предмет
```js
ItemGeneration.addItem(name, id, random, count, data, extra)
```

Заполнить сундук 
```js
ItemGeneration.fill(name, x, y, z, random, region, packet)
```

Создать интеграцию с Recipe Viewer 
```js
ItemGeneration.registerRecipeViewer(generator, name)
```

Получить все генераторы 
```js
ItemGeneration.getAllGenerator()
```

Получить все генерируемые предметы 
```js
ItemGeneration.getItems(name)
```

Установка генерируемых предметов 
```js
ItemGeneration.setItems(name, items)
```

Проверяет существуетли генератор
```js
ItemGeneration.isGenerator(name)
```

Загрузка генератора из файла 
```js
ItemGenerationItemGeneration.importFromFile(name, path)
```

## модуль StructureUtility

```js
StructureUtility.newStructure(name, stru)
```
+ name - имя структуры 
+ stru - массив блоков, по умолчанию пустой 


Добавление блоков в структуру
```js
StructureUtility.addBlock(stru, x, y, z, state, extra, tag)
```
+ name - имя структуры 
+ x, y, z - координаты 
+ state - BlockState основного блока
+ extra - BlockState дополнительного блока, по умолчанию null
+ tag - NBT.CompoundTag блока

Возвращает размер структуры 
```js
StructureUtility.getStructureSize(name)
```

Возвращает количество блоков структуре
```js
StructureUtility.getCountBlock(stru)
```

Возвращает структуру с поворотом 
```js
StructureUtility.rotate(stru, rotate)
```
+ stru - структура
+ rotate - StructureRotation...

Создаёт структуру с поворотами
```js
StructureUtility.registerRotations(stru, rotates)
```

Генерирует сферу
```js
StructureUtility.generateShape(region, x, y, z, r, y_max, id, data, dirtId, dirtData, grassId, grassData)
```

Генерирует сферу
```js
StructureUtility.generateShapeOptimization(region, name, x, y, z, r, id, data)
```

Суёт мобов в спавнер
```js
StructureUtility.spawnEntity(region, x, y, z, ents, random)
```

Заполняет область блоками
```js
StructureUtility.fill(x1, y1, z1, x2, y2, z2, block, region)
```

Получение имени всех структур 
```js
StructureUtility.getAllStructureName()
```

## Модуль StructureRotation

**Список поворотов**
```js
StructureRotation.DEFAULT
StructureRotation.DEGREES_90
StructureRotation.DEGREES_180
StructureRotation.DEGREES_270
StructureRotation.DEFAULT_DOWN
StructureRotation.DEGREES_90_DOWN
StructureRotation.DEGREES_180_DOWN
StructureRotation.DEGREES_270_DOWN
```

Возвращает все повороты
```js
StructureRotation.getAll();
```

Возвращает все повороты, которые не меняют y
```js
StructureRotation.getAllY();
```
Возвращает все повороты, которые не меняют y
```js
StructureRotation.getAllY();
```

Возвращает все перевёрнутые повороты 
```js
StructureRotation.getAllDown();
```

Возвращает рандомный поворот 
```js
StructureRotation.getRandomName(rotates, random);
```
+ rotates - массив поворотов
+ random - java.util.Random 




## Модуль Structure 

Установка структуры в мире
```js
Structure.setStructure(name, x, y, z, region, packet)
```
+ name - имя структуры 
+ x, y, z - координаты 
+ region - BlockSource 
+ packet - по умолчанию {}, требуется для создания более сложных структур, передаётся в прототип структуры 

Тоже самое что Structure.setStructure
```js
Structure.set(name, x, y, z, region, packet)
```
Проверяет структуру на координатах 
```js
Structure.isStructure(name, x, y, z, region)
```

Тоже тоже что Structure.isStructure
```js
Structure.is(name, x, y, z, region)
```

Проверяет может ли быть структура установлена
```js
Structure.isSetStructure(name, x, y, z, region)
```

Тоже тоже что Structure.isSetStructure
```js
Structure.isSet(name, x, y, z, region)
```

Устанавливает структуру с задержкой каждого блока sleep, в милисикундах 
```js
Structure.build(name, x, y, z, sleep, region, packet)
```

Разрушает структуру 
```js
Structure.destroy(name, x, y, z, region)
```

Возвращает массив блоков структуры
```js
Structure.getStructure(name)
```

Создание прототипа структуры 
```js
Structure.setGlobalPrototype(name, obj)**
```
+ name - имя структуры 
+ obj - объект описания
  + isBlock(original_pos, data, region, packet){return true} проверка можетли блок быть установлен 
  + setBlock(original_pos, data, region, packet){} - событие установики блока
  + before(x, y, z, region, packet){} - перед установки структуры 
  + after(x, y, z, region, packet){} - после установки структуры 



Создание объекта структуры 
```js
new Structure.advanced(name)
```
+ name - имя структуры 
+ создаёт объект 
  + **setStructure(x, y, z, region, packet)**
    + x, y, z - объект структуры 
    + region - BlockSource 
    + packet - по умолчанию {}, требуется для создания более сложных структур, передаётся в прототип структуры 
  + **setProt(obj)**
    + принимает объект описания
      + isBlock(original_pos, data, region, packet){return true} проверка можетли блок быть установлен 
      + setBlock(original_pos, data, region, packet){} - событие установики блока
      + before(x, y, z, region, packet){} - перед установки структуры 
      + after(x, y, z, region, packet){} - после установки структуры 
  + **setUseGlobalPrototype(value)**
    + использовать ли глобальный прототип 



Класс PrototypeJS может использоваться место обычного прототипа, более быстрый но в некоторых ситуациях может выдовать ошибку
```js
new PrototypeJS(isBlock, setBlock, before, after)**
```
+ isBlock(original_pos, data, region, packet){return true} проверка можетли блок быть установлен 
+ setBlock(original_pos, data, region, packet){} - событие установики блока
+ before(x, y, z, region, packet){} - перед установки структуры 
+ after(x, y, z, region, packet){} - после установки структуры 

## Вид форматов и как они выглядят 
### DungeonAPI_V2
DungeonAPI_V2 - ["id.data.x.y.z"...]
### DungeonCore
DungeonCore - [[id,"data.x.y.z",state,[extra_id, extra_state]]...]
### Dungeon Utility 
DungeonUtility - [["id.extra_id.x.y.z",state, state_extra]...]

## Генерация
В Dungeon Utility 5.0 добавлены новые методы генерации StructurePiece
#### Интерфейс описания генерации структуры 
```java
public interface IGenerationDescription {
    int getChance();
    double getDistance();
    String getName();
    Structure getStructure();
    String getType();
    boolean isGeneration(Vector3 pos, Random random, int dimension, NativeBlockSource region);
    boolean isPoolStructure(Vector3 pos, Random random, int dimension, NativeBlockSource region);
    boolean isSet();
}
```

#### Интерфейс типа генерации
```java
public interface IGenerationType {
    Vector3 getPosition(int chunkX, int chunkZ, Random random, int dimension, NativeBlockSource region);
    String getType();
    boolean isGeneration(Vector3 pos, Random random, int dimension, NativeBlockSource region);
}
```

### Типы генерации в DungeonUtility 
+ OverWorld
+ Nether 

### Методы StructurePiece
Создаёт тип генерации
```js
StructurePiece.registerType(IGenerationType)
```

Возвращает экземпляр IGenerationDescription
```js
StructurePiece.getDefault(obj)
```
+ obj
  + type: string - тип генерации 
  + name: string - имя структуры под которым структура будет сохранена в списке сгенерированных структур 
  + offset: object
    + x - смещение по x
    + y - смещение по y
    + z - смещение по z
  + chance: number - шанс генерации, чем больше число тем реже
  + distance: number - минимальное расстояние между ближайшей структуры 
  + save: boolean - сохранять ли структуру в список сгенерированных структур
  + isSet: boolean - проверяет естли место для структуры 
  + dimension: number - id измерения в котором будет генерироватся структура 
  + white_list: boolean - переключатель белого/чёрного списка биомов
  + biomes: array - список биомов
  + white_list_blocks: boolean - переключатель белого/чёрного списка блоков
  + blocks: array - список блоков на которых может/не может генерироватся структура 
  + checkName: boolean - будет ли проверятся имена структуры при генерации 
  + structure: Structure.advanced 

Регистрирует генерацию структуры 
```js
StructurePiece.register(IGenerationDescription)
```

Возвращает ближайшую струкру к указыным координатам 
```js
StructurePiece.getNearestStructure(x, y, z, region)
```

Добавляет в список сгенерированных структур 
```js
StructurePiece.addStructure(name, x, y, z,  region)
```

Удаляет структуру из списка сгенерированных структур 
```js
StructurePiece.deleteStructure(x, y, z,  region)
```

```js
StructurePiece.generateStructure(IGenerationDescription, x, y, z, random, region, packet)
```

### Пример 
```js
Callback.addCallback("StructureLoadOne", function(){
 StructurePiece.register(StructurePiece.getDefault({
  type: "OverWorld",
  chance: 1,
  distance: 40,
  isSet: true,
  offset: {
  	y: 1,
  },
  structure: new Structure.advanced("aw_temple")
 }));
});
```

## StructurePool
StructurePool - класс для хранения структур, иногда возможно то что структуры из разных модов конфликтуют, чтобы этого не было был добавлен StructurePool 

```js
new StructurePool(name)
```

регистрирует загрузку структуры 
```js
<pool>.load(name, path, type, compile)
```

загружает структуру
```js
<pool>.loadRuntime(name, path, type, compile)
```

устанавливает структуру под именем 
```js
<pool>.put(name, stru)
```

полученние структуры 
```js
<pool>.get(name)
```

получение всех структур 
```js
<pool>.getAllStructure()
```

проверяет загружена ли структура 
```js
<pool>.isLoad(name)
```

удаляет структуру 
```js
<pool>.deLoad(name)
```

копирует структуру 
```js
<pool>.copy(name1, name2)
```

создаёт вариации поворота структуры 
```js
<pool>.registerRotations(stru, rotates)
```

устанавливает прототип структуры 
```js
<pool>.setGlobalPrototype(name, obj)
```

## StructureDescription 
StructureDescription - новый класс для создания структур кодом, более удобный чем старый способ
Почти все методы могут принимать место имени java описание структуры его можно получить с помощью getDescription

конструкторы:
```js
new StructureDescription()
new StructureDescription(name)
```

добавляет блок в структуру 
```js
<description>.addBlock(x, y, z, state)
```

возвращает BlockState 
```js
<description>.getBlock(x, y, z)
```

проверяет естли блок
```js
<description>.isBlock(x, y, z)
```

Сохраняет структуру под именем 
```js
<description>.save(name)
```

возвращает java описание структуры
```js
<description>.getDescription()
```

### Примеры
```js
let pool = new StructurePool("pool");
let description = new StructureDescription()
  .addBlock(0, 0, 0, new BlockState(1, 0));

pool.put(description.getDescription());
```


## Новые кэлбэки 
перед загрузки структур
```js
Callback.addCallback("StructurePreLoad", function(){
  
});
```
после загрузки структур
```js
Callback.addCallback("StructureLoad", function(){
  
});
```

после загрузки структур, но один раз
```js
Callback.addCallback("StructureLoadOne", function(){
  
});
```

# Обновление Dungeon Utility 5.0
Обновление 5.0 достаточно глобальное

+ Добавлены новые методы поворота структуры
  + Добавлен модуль StructureRotation
  + Добавлен метод StructureUtility.registerRotations

+ Изменения в системе загрузки структур 
  + StructureLoader.load будет по возможности загружать структуру во время загрузки мира 
  + Добавлен StructurePool
  + Оптимизация загрузки формата DungeonAPI_V2

+ Другие изменения 
  + Добавлен StructureDescription 
  + Добавлен StructureUtility.fill
  + Добавлены методы с сокращённым названием Structure.set Structure.is
  + Добавлена возможность создавать прослушиватель на ванильные Feature 
  + Добавлен StructurePiece 
  + Добавлен StructureIntegration 
  + Добавлен VisualStructure.AnimationOptimization

# Примеры

```js
ModAPI.addAPICallback("DungeonUtility", function(api){
  const StructureUtility = api.StructureUtility;
    
  //создание структуры 
  StructureUtility.newStructure("test");
    
  //добавляем в структуру блоки 
  for(let i = 0;i < 10;i++)
    StructureUtility.addBlock("test", 0, i, 0, new BlockState(5, 2));
  
  //генерация структуры 
  new api.Structure.GenerateType.OverworldFind({
    chance: 100,//чем больше чесло, тем реже генерируются
    stru: new api.Structure.advanced("test")
  });
});
```

```js
ModAPI.addAPICallback("DungeonUtility", function(api){
  const StructureUtility = api.StructureUtility;
  
  //создание структуры 
  StructureUtility.newStructure("test");
  
  //добавляем в структуру блоки 
  for(let i = 0;i < 10;i++)
    StructureUtility.addBlock("test", 0, i, 0, new BlockState(5, 2));
    
  Callback.addCallback("ItemUse", function(coords,item,block,isExter,player){
    //устанавливаем структуру при нажатии 
    api.Structure.setStructure("test", coords.x,coords.y,coords.z,BlockSource.getDefaultForActor(player))
  });
});
```

```js
ModAPI.addAPICallback("DungeonUtility", function(api){
  //загрузка структуры
  api.StructureLoader.load(__dir__+"/Test.struct", "test");
  let Test = new api.Structure.advanced("test");
  
  //создание прототипа структуры
  Test.setProt(new api.PrototypeJS(function(original_pos, data, region, packet){
      //с 50% шансов устанавливаем блок
      return Math.random() <= .5;
    }, function(pos, data, region, packet){
      //устанавливаем блок досок
      region.setBlock(pos.x+data.x,pos.y+data.y,pos.z+data.z, 5);
    }, function(x, y, z, region, packet){
    
    },function(x, y, z, region, packet){
      
  }));
  Callback.addCallback("ItemUse", function(coords,item,block,isExter,player){
  //устанавливаем структуру при нажатии 
    Test.setStructure(coords.x,coords.y,coords.z,BlockSource.getDefaultForActor(player))
  });
});
```
Также DungeonUtility использует Schematic, AncientWonders, Dungeon craft и Tree-Growing из сборки Sky Factory