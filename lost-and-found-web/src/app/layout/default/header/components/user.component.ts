import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {SettingsService} from '@delon/theme';
import {BROWSER_STORAGE} from '../../../../service/storage.service';

@Component({
  selector: 'header-user',
  template: `
      <div
              class="alain-default__nav-item d-flex align-items-center px-sm"
              nz-dropdown
              nzPlacement="bottomRight"
              [nzDropdownMenu]="userMenu"
      >
          <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
          <!--      {{ settings.user.userName }}-->
          {{userInfo.userName}}
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <div nz-menu class="width-sm">
              <div nz-menu-item (click)="logout()">
                  <i nz-icon nzType="logout" class="mr-sm"></i>
                  退出登录
              </div>
          </div>
      </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent implements OnInit {
  constructor(
    public settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    @Inject(BROWSER_STORAGE) public storage: Storage,
  ) {
  }

  userInfo: any;

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.storage.getItem('userInfo'));
  }

  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl(this.tokenService.login_url);
  }
}
