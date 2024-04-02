import { Component, Output, EventEmitter, DoCheck, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-input",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "input.component.html"
})

export class InputComponent implements OnInit {
    @Output() eventEmitterInput = new EventEmitter
    searchValue: string = ''

    ngOnInit(): void {
        setTimeout(() => {
            this.eventKeyBoard()
        }, 5)
    }

    eventKeyBoard() {
        this.eventEmitterInput.emit(this.searchValue)
    }
}