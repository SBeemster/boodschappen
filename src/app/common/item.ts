export class Item {
    name: string;
    count: number;
    checked: boolean;
    edit: boolean;

    constructor(newName:string, newCount: number) {
        this.name = newName;
        this.count = newCount;
        this.checked = false;
        this.edit = false;
    }
}