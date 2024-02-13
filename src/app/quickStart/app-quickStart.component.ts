import {Component} from "@angular/core";
import {DataService} from "../app-data.service";

import * as GC  from '@mescius/spread-sheets'
window["GC"] = GC

// Licensing SpreadJS
// var SpreadJSKey = "972138875423714#B0LKsUTWlXVu";
// GC.Spread.Sheets.LicenseKey = SpreadJSKey;

@Component({
    templateUrl: './app-quickStart.component.html'
})
export class QuickStartComponent {
    spreadBackColor = 'aliceblue';
    sheetName = 'Person Address';
    hostStyle = {
        top: '100px',
        bottom: '10px'
    };
    data: any;
    autoGenerateColumns = false;

    // constructor(private dataservice: DataService) {
    //     this.data = dataservice.getPersonAddressData();
    // }
}
