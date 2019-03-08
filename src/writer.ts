/**
 * Definition of the writer
 */
export default class Writer {

    /**
     * Holds the alignment orientation
     * of the document
     */
    public alignment: "left" | "right" = "left";

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
        return this.alignment === "right" ? text + space : space + text;
    }

    /**
     * Chainable method to set alignment
     * on the fly
     * @param alignment 
     */
    public align(alignment: "right" | "left") {
        this.alignment = alignment;
        return this;
    }

    /**
     * Wrap contains with a specified start-string
     * and end-string
     * @param startString 
     * @param endString 
     * @param handler 
     */
    public wrap(startString: string, endString: string, handler: Function) {
        this.line(startString)
        handler();
        this.line(endString);
        return this;
    }

    /**
     * Wrap contains with a specified start-string
     * and end-string and indents its contents
     * @param startString 
     * @param endString 
     * @param handler 
     */
    public wrapWithIndent(startString: string, endString: string, handler: Function) {
        this.line(startString, handler)
        this.line(endString)
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
        return this;
    }

    /**
     * Hijack the offset tree hiearchy and write
     * at any offset on the current line
     * @param offset 
     * @param line 
     * @param handler 
     */
    public at(offset: number, line: string, handler?: Function) {
        let oldOffset = this.offset;
        this.offset = offset;
        this.line(line, handler);
        this.offset = oldOffset;
        return this;
    }

    /**
     * Set the factor for implied indentation
     * @param factor 
     */
    public indent(factor: number) {
        this.factor = factor;
        return this;
    }

    /**
     * Add a blank line
     */
    public pressEnter() {
        this.line("");
        return this;
    }

    /**
     * Returns a list of lines compiled thus far.
     * This only return a copy and will not return
     * this actual reference
     */
    public getLines() {
        return <string[]>Array.prototype.slice.apply(this.lines, [])
    }

    /**
     * Get the actual reference to the array
     * of strings held in memory
     */
    public getLinesInstance() {
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
