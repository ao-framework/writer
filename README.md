<p align="center">
<img width="150" src="https://ao-framework.github.io/website/ao.logo.svg"><br>
<b>Writer</b>
</p>

**Writer** is a library that was created to assist in developing multi-line strings for such things as code generation, documentation and error handling with custom templates.

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

let writer = new Writer()
writer.align("left")
writer.indent(2)
writer.line("I should be right against edge.")
writer.line("So should I.", () => {
    writer.line("I should be indented 2 spaces", () => {
        writer.line("I should be indented 4 spaces")
    })
})

console.log(writer.getString())
```

Outputs
```txt
I should be right against edge.
So should I.
  I should be indented 2 spaces
    I should be indented 4 spaces
```
