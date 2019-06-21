import Scale from "./scale";

class MajorScale implements Scale {
    numberOfNotes!: number;
    notes: string[] = new Array<string>(); 
    
    constructor(num: number) {
        this.numberOfNotes = num;
    }
    getNotes(): string[] {
        return this.notes;
    }
    setNotes(notes: string[]): void {
        this.notes = notes;
    }
    printScale(): void {
        console.log("" + this.notes)
    }
    addNote(note: string): void {
        this.notes.push(note);
    }
}
export default MajorScale