import {Component} from "@angular/core";
import {DataService} from "../app-data.service";

// GC.Spread.Sheets.LicenseKey = 'GrapeCity-Internal-Use-Only,E899827139672677#B1YJbe0ICRiwiI34zZx4WZBtSZphlT4xEULtiesp7bQFjeWlnaFRTYH3STpVnUvkkdyYnT5kUOzZ7LhFFWQ5UUpR7UY3GNZZWVDNmTZZHSyQTNWVWexIFcsVGZaRFMBJWT9NmaPlFbllUMvMDOwlEc68ERClVWyJDe0JXd8RDN6gldFd5RxRDdzgzRtdTYmBzYvAlMYVzKZljb5AVUiRnRaNDd6dlSOB7V8ZncKZGWvpVNUZzMyA5UBlzY5UVdrFGRwJTQzgTWKJFZSF5Zl3GaPhHT73kcrg7SuJUcQJTVOJkNrBXQYpVa9JzLPBneycHMPRmNzpHMQBHSxBHRLpUerl5S5wmUx8GbwV7UxolN9YVY7BHNPlzY9hVZolXcxkVaCZmSmRWSphzVDBXN4ondqlWM7oma4N6QtdTVWxUbCl5NlxUarJVauVTSul4VmZ6KQhmaXhTUXdEMIJjQ4RGSBdkI0IyUiwiIyYEMEZDMEdjI0ICSiwiM4cjN8QTM0IicfJye35XX3JSVBtUUiojIDJCLicTMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiI9MDOzkDMgcTMxEzMyAjMiojI4J7QiwiIw3GduMXdpN6cl5mLqwybp9yc5l6YzVWbuoCLt36YuYXZklHdpNWZwFmcn9iKs86Yu46bj9Se4l6YlBXYydmLqwCcq9ybj9Se4l6YlBXYydmLqwicr9ybj9yc5l6YzVWbuoCLwpmLzVXajNXZt9iKs46bj9Se4l6YlBXYydmLqwicr9ybj9Se4l6YlBXYydmLqwCcq9ybj9yc5l6YzVWbuoCLt36YuMXdpN6cl5mLqwyc59yc5l6YzVWbuoiI0IyctRkIsIycs36bUJXZw3GblZXZEJiOiEmTDJCLlVnc4pjIsZXRiwiI7cjNycjN9MTM7IDO9kDOiojIklkIs4XXiQXZlh6U4RnbhdkIsICdlVGaTRncvBXZSJCLiUGbiFGV43mdpBlIbpjInxmZiwSZzxWYmpjIyNHZisnOMwIb';


// import * as GC  from '@mescius/spread-sheets'
// window["GC"] = GC

// Licensing SpreadJS
// var SpreadJSKey = "972138875423714#B0LKsUTWlXVu";

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
