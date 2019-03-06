import Writer from "../../src";
export function offset() {
    let writer = new Writer();
    expect(writer["offset"]).toBe(0);
}
