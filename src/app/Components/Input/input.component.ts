import { Component, Output, EventEmitter, DoCheck } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-input",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "input.component.html"
})

export class InputComponent{
    @Output() eventEmitterInput = new EventEmitter
    searchValue: string = ''

    eventKeyBoard() {
        this.eventEmitterInput.emit(this.searchValue)
    }
}