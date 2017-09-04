import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { IProduct } from '../models/product'


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() notifyEvent: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.notifyRating();
    }
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    private notifyRating(): void {
        this.notifyEvent.emit(`The rating ${this.rating} was clicked`);
    }
}