interface Scale {
    notes: string[];
    getNotes(): string[];
    setNotes(notes: string[]): void; 
    printScale(): void;
    addNote(note: string): void;
}
export default Scale
