<p align="center">
<img width="150" src="./assets/ao.logo.svg"><br>
<b>Writer</b>
</p>

The **writer** is a library that was created to assist in developing multi-line strings for such things as code generation, documentation and error handling with custom templates.

Installation
```bash
npm install @ao-framework/writer
```

Import
```ts
import Writer from "@ao-framework/writer";
```
Usage
```ts
import Writer from "@ao-framework/writer";

let str = new Writer()
    .align("left")
    .indent(2)
    .line("I should be right against edge.")
    .line("So should I.", () => {
        writer.line("I should be indented 2 spaces", () => {
            writer.line("I should be indented 4 spaces")
        })
    }).getString()

console.log(str)
```

Outputs
```txt
I should be right against edge.
So should I.
  I should be indented 2 spaces
    I should be indented 4 spaces
```
