import { Injectable } from '@angular/core';

import { Item } from './common/item';

@Injectable({
    providedIn: 'root'
})
export class RandomItemService {

    getItems(count: number): Item[] {
        let items = [];
        for (let i = 0; i < this.randomCountFn(count / 3, count); i++) {
            items.push(new Item(this.randomWordFn(), this.randomCountFn(1, count)));
        }
        return items;
    }

    randomWordFn(): string {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)]
    }

    randomCountFn(min: number, max: number): number {
        return Math.floor(Math.random() * max) + min
    }

    wordList = [
        "rad", "zowaar", "blazen", "joop", "mixer", "oester", "baljuw", "ticket", "vaart", "riool", "bruin", "lager", "jersey", "onheil", "manna", "rokken", "basket", "we", "nis", "bikkel", "algauw", "muiter", "kroon", "pochet", "kleef", "pa", "helft", "ballon", "kemp", "tanker", "diens", "juf", "behang", "fiets", "kokkin", "masker", "geurig", "bede", "loser", "joon", "varen", "haring", "bark", "sitar", "doerak", "vaal", "spam", "gewis", "kabaal", "slash", "halal", "direct", "griek", "muesli", "stekel", "summum", "gaas", "arend", "bios", "kooien", "zwerk", "karkas", "absurd", "barst", "rijles", "talent", "sparen", "lynx", "topfit", "gram", "nijdig", "tabel", "matter", "rondte", "hand", "hol", "farad", "etter", "kroeg", "gebukt", "malen", "brul", "fresco", "mokken", "gal", "wicket", "boeman", "stik", "boem", "sujet", "kopen", "gaal", "panter", "cape", "rader", "gipsy", "ahorn", "kuil", "tomen", "woning"
    ]
}
