import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

import { Item } from '../common/item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() item: Item;
    @Output() deleteRequestEvent = new EventEmitter<Item>();
    @Output() itemCheckedEvent = new EventEmitter<void>();

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.addEventListener('keyup', this.keyUp.bind(this));
    }

    keyUp(event): void {
        if (event.keyCode === 13) {
            this.item.edit = false;
        }
    }

    deleteItem(item: Item): void {
        this.deleteRequestEvent.emit(item);
    }

    checkItem(item: Item): void {
        item.checked = !item.checked;
        this.itemCheckedEvent.emit();
    }

}
