import Writer from "../../src";
export function wrap() {
    let writer = new Writer();
    writer.wrap("start", "end", () => {
        writer.line("hello");
    });
    let lines = writer.getLines();
    expect(lines[0] === ("start")).toBe(true);
    expect(lines[1] === ("hello")).toBe(true);
    expect(lines[2] === ("end")).toBe(true);
}
