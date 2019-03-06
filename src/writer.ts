/**
 * Definition of the writer
 */
export default class Writer {

    /**
     * Holds the line entries
     */
    private lines: string[] = [];

    /**
     * How far from the left the
     * cursor resides
     */
    private offset: number = 0;

    /**
     * The number of spaces that will
     * prepended on each indent
     */
    private factor: number = 4;

    /**
     * Returns a text string with the current
     * number of spaces from the left for the
     * current offset
     * @param text
     */
    private pad(text) {
        let space = ""
        for (var i = 0; i < this.offset; i++) {
            space += " "
        }
        return space + text;
    }

    /**
     * Writes a line to the list of
     * lines compiled
     * @param text 
     * @param handler 
     */
    public line(text: string, handler?: Function) {
        this.lines.push(this.pad(text));
        if (typeof handler === "function") {
            this.offset += this.factor;
            handler();
            this.offset = this.offset - this.factor;
        }
    }

    /**
     * Returns the list of lines compiled
     */
    public getLines() {
        return this.lines;
    }

    /**
     * Returns the list of lines as a string
     * @param delimiter The delimiter that seperates every line
     */
    public getString(delimiter: string = "\n") {
        return this.lines.join(delimiter)
    }
}
