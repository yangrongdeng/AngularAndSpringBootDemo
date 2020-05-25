import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';
import {BROWSER_STORAGE} from '../../../../service/storage.service';

@Component({
  selector: 'app-check-lost',
  templateUrl: './check-lost.component.html',
  styles: [
  ]
})
export class CheckLostComponent implements OnInit {

  noCheckLoading = false;
  alreadyCheckLoading = false;
  noPassCheckLoading = false;
  noCheckList: any[] = [];
  alreadyCheckList: any[] = [];
  noPassCheckList: any[] = [];
  noCheckUrl = 'http://localhost:8888/lose/noCheck?_allow_anonymous=true';
  alreadyCheckUrl = 'http://localhost:8888/lose/alreadyCheck?_allow_anonymous=true';
  noPassCheckUrl = 'http://localhost:8888/lose/noPassCheck?_allow_anonymous=true';
  passUrl = 'http://localhost:8888/lose/pass?_allow_anonymous=true';
  noPassUrl = 'http://localhost:8888/lose/noPass?_allow_anonymous=true';

  constructor(private fb: FormBuilder,
              private http: _HttpClient,
              private msg: NzMessageService,
              @Inject(BROWSER_STORAGE) public storage: Storage) {
  }

  ngOnInit(): void {
    this.getNoCheckList();
  }


  // 获取未审核的招领列表信息
  getNoCheckList() {
    this.noCheckLoading = true;
    this.http.get(this.noCheckUrl).subscribe((res: any) => {
      this.noCheckList = res.data;
      this.noCheckLoading = false;
    });
  }

  // 获取已审核的招领列表信息
  getAlreadyCheckList() {
    this.alreadyCheckLoading = true;
    this.http.get(this.alreadyCheckUrl).subscribe((res: any) => {
      this.alreadyCheckList = res.data;
      this.alreadyCheckLoading = false;
    });
  }

  // 获取没有通过的招领列表信息
  getNoPassCheckList() {
    this.noPassCheckLoading = true;
    this.http.get(this.noPassCheckUrl).subscribe((res: any) => {
      this.noPassCheckList = res.data;
      this.noPassCheckLoading = false;
    });
  }

  // 通过审批
  pass(id: any) {
    this.http.get(this.passUrl + '&id=' + id).subscribe((res: any) => {
      this.getNoCheckList();
      this.msg.success('该招领信息已通过审批');
    });
  }

  // 不通过审批
  noPass(id: any) {
    this.http.get(this.noPassUrl + '&id=' + id).subscribe((res: any) => {
      this.getNoCheckList();
      this.msg.success('该招领信息未通过审批');
    });
  }

}
