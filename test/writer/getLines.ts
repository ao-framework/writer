import Writer from "../../src";
export function getLines() {
    let writer = new Writer();
    writer.line("something");
    expect(Array.isArray(writer.getLines())).toBe(true);
    expect(writer.getLines().length).toBe(1);
}
