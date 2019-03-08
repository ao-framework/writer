import Writer from "../../src";
export function getLinesInstance() {
    let writer = new Writer();
    expect(writer.getLinesInstance()).toBe(writer["lines"]);
}
