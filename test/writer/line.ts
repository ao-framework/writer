import Writer from "../../src";
export function line() {
    let writer = new Writer();
    writer.line("hello.world", () => {
        writer.line("hello.world");
    });
    writer.line("hello.world");
    expect(Array.isArray(writer["lines"])).toBe(true);
    expect(writer["lines"].length).toBe(3);
    writer["lines"].forEach(line => {
        expect(line.includes("hello.world")).toBe(true);
    });
}
