import {  Input, Component } from "@angular/core"

@Component({
    selector: 'tm-picture',
    templateUrl: './picture.component.html'
})
export class PictureComponent {

    @Input() description='';
    @Input() url='';

}