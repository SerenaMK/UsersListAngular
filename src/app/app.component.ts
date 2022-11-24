import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'es2';
    users: User[] = [];

    onAddMan(user: User) {
        this.users.push(user);
    }

    onAddWoman(user: User) {
        this.users.push(user);
    }

    onAddOther(user: User) {
        this.users.push(user);
    }
}
