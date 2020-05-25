import {Component, OnInit} from '@angular/core';
import {_HttpClient, SettingsService} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-found-list',
  templateUrl: './found-list.component.html',
  styles: []
})
export class FoundListComponent implements OnInit {
  isMore = false;
  // 最新一条寻物启示
  latestFound: any;
  latestFoundMessage;
  loading = false;
  list: any[] = [];
  foundListhUrl = 'http://localhost:8888/found/list?_allow_anonymous=true';
  foundListAllhUrl = 'http://localhost:8888/found/listAll?_allow_anonymous=true';
  upGreadeUrl = 'http://localhost:8888/found/upGrade?_allow_anonymous=true';

  constructor(public settings: SettingsService,
              private http: _HttpClient,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.getFoundList();
  }

  // 获取寻物信息列表
  getFoundList() {
    this.loading = true;
    this.http.get(this.foundListhUrl).subscribe((res: any) => {
      console.log('res', res);
      this.list = res.data;
      this.latestFound = this.list[0];
      this.latestFoundMessage = '紧急：'.concat(this.latestFound.userName).concat('发布了一条寻物启示');
      console.log('latestFound', this.latestFound);
      console.log('latestFoundMessage', this.latestFoundMessage);

      this.loading = false;
    });
  }

  // 助力
  upGrade(foundId: any) {
    console.log(foundId);
    this.http.get(this.upGreadeUrl + '&id=' + foundId).subscribe((res: any) => {
      if (this.isMore) {
        this.getMore();
      } else {
        this.getFoundList();
      }
    });
    this.message.success('助力成功，获得助力值5！！！');
  }


  getMore() {
    this.loading = true;
    this.isMore = true;
    this.http.get(this.foundListAllhUrl).subscribe((res: any) => {
      this.list = res.data;
      this.loading = false;
    });
  }
}
