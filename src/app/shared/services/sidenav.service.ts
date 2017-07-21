import { Injectable } from '@angular/core';

import { MdSidenav } from '@angular/material';

@Injectable()
export class SidenavService {

    private sidenav0: MdSidenav;

    set sidenav(sidenav: MdSidenav) {
        this.sidenav0 = sidenav;
    }

    open() {
        if (this.sidenav0) {
            this.sidenav0.open();
        }
    }

    close() {
        if (this.sidenav0) {
            this.sidenav0.close();
        }
    }

    toggle() {
        if (this.sidenav0) {
            this.sidenav0.toggle();
        }
    }

}
