import { Component,Input } from '@angular/core';
import { LoggingService } from "app/logging.service";
import { AccountService } from "app/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor (private loggingService : LoggingService, private accountService: AccountService){}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
     this.accountService.updateStatus(this.id,status);
     this.accountService.statusUpdated.emit(status);
    //console.log('A server status changed, new status: ' + status);
    //this.loggingService.logStatusChange(status);
  }
}
