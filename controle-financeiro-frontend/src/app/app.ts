import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LancamentoListaComponent } from './components/lancamento-lista/lancamento-lista';
import { LancamentoFormComponent } from './components/lancamento-form/lancamento-form';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        LancamentoListaComponent,
        LancamentoFormComponent
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class AppComponent { }