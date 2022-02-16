import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating : number = 4;
    cropWidth : number =75;
    @Output() ratingclicked : EventEmitter<string> = new EventEmitter<string>(); 
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
    rateme(): void{
        console.log("clicked");
        this.ratingclicked.emit(`The rating ${this.rating} was clicked`)
    }
}