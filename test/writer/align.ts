import Writer from "../../src";
export function align() {
    let writer = new Writer();
    writer.align("right");
    expect(writer["alignment"]).toBe("right");
}
