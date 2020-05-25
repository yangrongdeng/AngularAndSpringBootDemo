import {Component, Inject, OnDestroy, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StartupService} from '@core';
import {ReuseTabService} from '@delon/abc/reuse-tab';
import {DA_SERVICE_TOKEN, ITokenService, SocialOpenType, SocialService} from '@delon/auth';
import {SettingsService, _HttpClient, MenuService} from '@delon/theme';
import {environment} from '@env/environment';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalService} from 'ng-zorro-antd/modal';
import {LoginService} from '../../../service/login.service';
import {BROWSER_STORAGE} from '../../../service/storage.service';


@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    modalSrv: NzModalService,
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
    private settingsService: SettingsService,
    private socialService: SocialService,
    @Optional()
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupSrv: StartupService,
    private loginService: LoginService,
    public http: _HttpClient,
    public msg: NzMessageService,
    @Inject(BROWSER_STORAGE) public storage: Storage) {

    modalSrv.closeAll();
  }

  form: FormGroup;
  error = '';
  count = 0;
  interval$: any;

  ngOnInit() {
    this.form = this.fb.group({
      userNumber: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, Validators.required],
      remember: [true],
    });
  }

  // 登陆跳转逻辑
  submit() {
    this.error = '';
    console.log(' 开始请求登陆');
    this.loginService.login(this.getFormData()).then((res: any) => {
      // 用户数据不为空说明用户存在
      if (res.data != null) {
        if (res.data.type === 0) {
          // 为0跳转用户界面
          this.setUserMenu();
        } else {
          // 为1跳转管理员界面
          this.setManagerMenu();
        }
        this.storage. setItem('userInfo', JSON.stringify(res.data));
        console.log(this.storage);
        this.msg.success('登陆成功');
        this.router.navigate(['dashboard']);
      } else {
        this.msg.error('登陆失败!账号或密码错误！');
        return;
      }

    });
  }

  getFormData() {
    return this.form.getRawValue();
  }

// 根据不同身份设置不同导航栏的方法
  setUserMenu() {
    this.menuService.add([
      {
        text: '普通用户',
        group: true,
        hideInBreadcrumb: true,
        children: [
          {
            text: '寻物中心',
            // link: '/dashboard',
            icon: {type: 'icon', value: 'rocket'},
            children: [
              {
                text: '寻物列表',
                link: '/dashboard/found',
                i18n: '寻物列表'
              },
              {
                text: '我要发布寻物信息',
                link: '/dashboard/foundPublish',
                i18n: '我要发布寻物信息'
              }
            ]
          },
          {
            text: '招领中心',
            icon: {type: 'icon', value: 'rocket'},
            children: [
              {
                text: '招领列表',
                link: '/dashboard/lose',
                i18n: '招领列表'
              },
              {
                text: '我要发布招领信息',
                link: '/dashboard/losePublish',
                i18n: '我要发布招领信息'
              }
            ]
          },
          {
            text: '个人中心',
            icon: {type: 'icon', value: 'rocket'},
            children: [
              {
                text: '我的',
                link: '/dashboard/myiInfo',
                i18n: '我的信息'
              },
              {
                text: '密码修改',
                link: '/dashboard/myloseFound',
                i18n: '密码修改'
              }
            ]
          }
        ]
      }
    ]);
  }

  setManagerMenu() {
    this.menuService.add([
      {
        text: '管理员',
        group: true,
        hideInBreadcrumb: true,
        children: [
          {
            text: '审核中心',
            // link: '/dashboard',
            icon: {type: 'icon', value: 'rocket'},
            children: [
              {
                text: '寻物信息审核',
                link: '/dashboard/checkFound',
                i18n: '寻物信息审核'
              },
              {
                text: '招领信息审核',
                link: '/dashboard/checkLost',
                i18n: '招领信息审核'
              }
            ]
          },
          {
            text: '用户管理',
            icon: {type: 'icon', value: 'rocket'},
            children: [
              {
                text: '用户信息管理',
                link: '/dashboard/userManager',
                i18n: '用户信息管理'
              }
            ]
          },
        ]
      }
    ]);
  }
}
