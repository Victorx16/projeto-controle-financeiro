import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet // Só precisamos do RouterOutlet
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class AppComponent { }