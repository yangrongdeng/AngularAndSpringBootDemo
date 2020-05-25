import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {SettingsService} from '@delon/theme';
import {BROWSER_STORAGE} from '../../../service/storage.service';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  constructor(public settings: SettingsService,
              @Inject(BROWSER_STORAGE) public storage: Storage) {
  }

  userInfo: any;

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.storage.getItem('userInfo'));
  }
}
