import { Component, OnInit } from '@angular/core';
import { RandomItemService } from '../random-item.service';

import { Item } from '../common/item';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    lastSort;
    items;

    constructor(private itemService: RandomItemService) { }

    ngOnInit() {
        this.randomItems();
    }

    newItem(name: string, count: number): void {
        this.items.push(new Item(name ? name : "Boodschap", count ? count : 1));
    }

    clearItems(): void {
        this.items = this.items.filter((item: Item): boolean => {
            return !item.checked;
        })
    }

    sortItemsAZ(): void {
        let sortingDirection = this.lastSort === 1 ? -1 : 1;
        this.lastSort = sortingDirection === 1 ? 1 : 0;
        this.items.sort((a: Item, b: Item): number => {
            if (a.name > b.name) {
                return 1 * sortingDirection;
            }
            if (a.name < b.name) {
                return -1 * sortingDirection;
            }

            return 0;
        })
        this.checkToBottom();
    }

    sortItemsCount(): void {
        let sortingDirection = this.lastSort === 2 ? -1 : 1;
        this.lastSort = sortingDirection === 1 ? 2 : 0;
        this.items.sort((a: Item, b: Item): number => {
            return (a.count - b.count) * sortingDirection;
        })
        this.checkToBottom();
    }

    checkToBottom():void {
        let uncheckedItems = this.items.filter((item: Item): boolean => {
            return !item.checked;
        })

        let checkItems = this.items.filter((item: Item): boolean => {
            return item.checked;
        })

        this.items = uncheckedItems.concat(checkItems);
    }

    deleteItem(eventItem) {
        this.items = this.items.filter((item: Item): boolean => {
            return item !== eventItem;
        })
    }

    randomItems(): void {
        this.items = this.itemService.getItems(12);
        this.lastSort = 0;
    }
}
