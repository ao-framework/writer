import Writer from "../../src";
export function at() {
    let writer = new Writer();
    writer.at(2, "hello");
    expect(writer.getString()).toBe(`  hello`);
}
