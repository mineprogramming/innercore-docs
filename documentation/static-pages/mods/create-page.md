## Create your mod page

Before we start writing your mod page, we need to learn about JSON format.

You can goto [JSON format documentation](https://www.json.org/json-en.html) to learn more about it.

Or [this page](https://www.w3schools.com/whatis/whatis_json.asp) for more information.

After you will learn about JSON format, you can start writing your mod page.

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
            "source": "./static-pages/mods", // Source directory
            "output": "./mods", // Output directory
            "pages": [
                // ... About mod documentation ...
                {
                    // Mod list
                    "title": "Mod List", // Page title
                    "source": "./index.md", // Page file
                    "output": "./list", // Output directory
                    "children": [
                        { // Child page: start
                            "title": "IndustrialCraft2", // Children page title
                            "source": "./list/industrialCraft2", // Children directory
                            "output": "./industrialCraft2", // Output directory
                            "groups": [
                                {
                                    "title": "IC2 Documentation", // Group title for mod
                                    "output": "./", // Output directory
                                    "pages": [
                                        {
                                            "title": "IC2 child page 1", // Mod child page
                                            "source": "./page1.md" // Page file, any_name.md
                                        },
                                        {
                                            "title": "IC2 child page 2", // Mod child page
                                            "source": "./page2.md" // Page file, any_name.md
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
    "source": "./list/industrialCraft2", // Children directory
    "output": "./industrialCraft2", // Output directory
    "groups": [
        {
            "title": "IC2 Documentation", // Group title for mod
            "output": "./", // Output directory
            "pages": [
                {
                    "title": "IC2 child page 1", // Mod child page
                    "source": "./page1.md" // Page file, any_name.md
                },
                {
                    "title": "IC2 child page 2", // Mod child page
                    "source": "./page2.md" // Page file, any_name.md
                }
            ]
        }
    ]
} // Child page: end
```
