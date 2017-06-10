import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
 
@Injectable()
export class SettingsProvider {
 
    private theme: BehaviorSubject<String>;
 
    constructor() {
        this.theme = new BehaviorSubject('dark-theme');
    }
 
    setActiveTheme(val) {
        this.theme.next(val);
    }
 
    get activeTheme() {
        return this.theme.asObservable();
    }
}
