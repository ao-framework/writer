import Writer from "../../src";
export function indent() {
    let writer = new Writer();
    writer.indent(54);
    expect(writer["factor"]).toBe(54);
}
