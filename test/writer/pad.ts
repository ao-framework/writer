import Writer from "../../src";
export function pad() {
    let writer = new Writer();
    writer["offset"] = 4;
    let text = writer["pad"]("something");
    expect(text).toBe("    something");
}
