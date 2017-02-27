import {Component, Input, Output, EventEmitter} from '@angular/core';  

@Component ({
    selector: 'favourite',
    template: `
        <h2>favourite</h2>
        <i
            class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavourite"
            [class.glyphicon-star]="isFavourite"
            (click)="onClick()">
        </i>
        `,
    styles: [`
        .glyphicon-star {
            color: red;
        }
    `]
})

export class FavouriteComponent {
    @Input() isFavourite = false;

    @Output() change = new EventEmitter();


    onClick(){
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}