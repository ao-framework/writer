import Writer from "../../src";
export function factor() {
    let writer = new Writer();
    expect(writer["factor"]).toBe(4);
}
