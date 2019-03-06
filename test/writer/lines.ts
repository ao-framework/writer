import Writer from "../../src";
export function lines() {
    let writer = new Writer();
    expect(Array.isArray(writer["lines"])).toBe(true);
}
