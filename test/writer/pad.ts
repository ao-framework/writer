import Writer from "../../src";
export function pad() {
    let writer = new Writer();
    writer["offset"] = 4;
    let text = writer["pad"]("something");
    expect(text).toBe("    something");

    let writer2 = new Writer();
    writer2["offset"] = 4
    writer2.align("right");
    let text2 = writer2["pad"]("something");
    expect(text2).toBe("something    ");
}
