import {Component  } from "@angular/core";

@Component({

selector:'admindashboard',
template:'admindashboard.component.html'
})

export class AdminDashboardComponent{
    constructor(){        }

    hasWalkIn :boolean=false;
    walkInName:string = "Dot Net Walk In"


}