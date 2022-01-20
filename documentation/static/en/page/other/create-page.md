## Create your mod page

### Adding page content

Before we start writing your mod page, we need to learn about Markdown format.
You can goto [this page](https://www.markdownguide.org/getting-started/) to learn what is Markdown.
And [this page](https://www.markdownguide.org/basic-syntax/) to learn basic markdown syntax.

After learning about Markdown format, you can start writing your pages.

1. Create your folder inside `./static-pages/mods/list/` folder.
2. Create your `some_file_name.md` file inside your folder.
3. Write your page content in `some_file_name.md` file.

### Creating routes for your pages

Before we start creating routes for your pages, we need to learn about JSON format.

I recommend you to read this pages:

1. [JSON format documentation](https://www.json.org/json-en.html) - Website has many translations, choose the one you need to learn
2. [Short description about the JSON format](https://www.w3schools.com/whatis/whatis_json.asp)

After you will learn about JSON format, you can start creating your pages.

### To create page routes

1. Goto `pagesconfig.json`
2. Find `Mods` group inside `groups`
3. Find Mod List
4. Create your `child page` from [Page template](#page-template)
5. Add your `child page` to `Mod List`.`children` like `pagesconfig.json` example

***Important!*** All folders and files must have relative path to `./static-pages/mods/list` folder.

#### `pagesconfig.json`

```json
{
    "groups": [
        // ... Apps ...
        // ... Guides ...
        { // Mods group
            "title": "Mods", // Group title
            "source": "./static-pages/mods", // Source directory, path: ./static-pages/mods/
            "output": "./mods", // Output directory, result path: ./out/pages/mods
            "pages": [
                // ... About mod documentation ...
                {
                    // Mod list
                    "title": "Mod List", // Page title
                    "source": "./index.md", // Page file source, path: ./static-pages/mods/index.md
                    "output": "./list", // Output directory, result path: ./out/pages/mods/list
                    "children": [
                        { // Child page: start
                            "title": "IndustrialCraft2", // Children page title
                            "source": "./list/industrialCraft2", // Children directory, path: ./static-pages/mods/list/industrialCraft2
                            "output": "./industrialCraft2", // Output directory, result path: ./out/pages/mods/list/industrialCraft2
                            "groups": [
                                {
                                    "title": "IC2 Documentation", // Group title for mod
                                    "output": "./", // Output directory for pages, result path: ./out/pages/mods/list/industrialCraft2
                                    "pages": [
                                        {
                                            "title": "IC2 child page 1", // Mod child page
                                            "source": "./page1.md" // Page file, any_name.md, path: ./out/pages/mods/list/industrialCraft2/page1.md
                                        },
                                        {
                                            "title": "IC2 child page 2", // Mod child page
                                            "source": "./page2.md" // Page file, any_name.md, path: ./out/pages/mods/list/industrialCraft2/page2.md
                                        }
                                    ]
                                }
                            ]
                        } // Child page: end
                        // ... Other mods ...
                    ]
                }
            ]
        }
        // ... Libraries ...
    ]
    // ... other configs ...
}
```

### Page template

```json
{ // Child page: start
    "title": "IndustrialCraft2", // Children page title
    "source": "./list/industrialCraft2", // Children directory, path: ./static-pages/mods/list/industrialCraft2
    "output": "./industrialCraft2", // Output directory, result path: ./out/pages/mods/list/industrialCraft2
    "groups": [
        {
            "title": "IC2 Documentation", // Group title for mod
            "output": "./", // Output directory for pages, result path: ./out/pages/mods/list/industrialCraft2
            "pages": [
                {
                    "title": "IC2 child page 1", // Mod child page
                    "source": "./page1.md" // Page file, any_name.md, path: ./out/pages/mods/list/industrialCraft2/page1.md
                },
                {
                    "title": "IC2 child page 2", // Mod child page
                    "source": "./page2.md" // Page file, any_name.md, path: ./out/pages/mods/list/industrialCraft2/page2.md
                }
            ]
        }
    ]
} // Child page: end
```
