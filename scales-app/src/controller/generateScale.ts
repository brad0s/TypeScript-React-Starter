import MajorScale from "../model/majorScale";

class GenerateScale {
    notesColl = new Map < string, number > ();
    constructor() {
        this.notesColl.set("c", 0)
            .set("db", 1)
            .set("d", 2)
            .set("eb", 3)
            .set("e", 4)
            .set("f", 5)
            .set("gb", 6)
            .set("g", 7)
            .set("ab", 8)
            .set("a", 9)
            .set("bb", 10)
            .set("b", 11);
    }

    GenerateMajorScale(note: string): MajorScale {
        //W - W - H - W - W - W - H
        const majorScale: MajorScale = new MajorScale(8);
        majorScale.addNote(note);
		note = this.wholeStep(note);
		majorScale.addNote(note);
		note = this.wholeStep(note);
		majorScale.addNote(note);
		note = this.halfStep(note);
		majorScale.addNote(note);
		note = this.wholeStep(note);
		majorScale.addNote(note);
		note = this.wholeStep(note);
		majorScale.addNote(note);
		note = this.wholeStep(note);
		majorScale.addNote(note);
		note = this.halfStep(note);
        majorScale.addNote(note);
        return majorScale;
    }

    wholeStep(note: string): string {
        var nextNote: string;
        if (this.notesColl.has(note)) {
            let currentNote: number | undefined = this.notesColl.get(note);
            if (currentNote != undefined) {
                let remainder: number = (currentNote + 2) % this.notesColl.size;
                this.notesColl.forEach((value, key, map) => {
                    if (remainder == value) {
                        nextNote = key
                    }
                });
            } else {
                console.log(`${ currentNote } is undefined `);
            }
        } else {
            console.log(`Note: ${note} does not exist`);
        }
        return nextNote!;
    }

    halfStep(note: string): string {
        var nextNote: string;
        if (this.notesColl.has(note)) {
            let currentNote: number | undefined = this.notesColl.get(note);
            if (currentNote != undefined) {
                let remainder: number = (currentNote + 1) % this.notesColl.size;
                this.notesColl.forEach((value, key, map) => {
                    if (remainder == value) {
                        nextNote = key
                    }
                });
            } else {
                console.log(`${ currentNote } is undefined `);
            }
        } else {
            console.log(`Note: ${note} does not exist`);
        }
        return nextNote!;
    }
}
export default GenerateScale