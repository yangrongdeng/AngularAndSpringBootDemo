import {Component, OnInit} from '@angular/core';
import {_HttpClient, SettingsService} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-lose-list',
  templateUrl: './lose-list.component.html',
  styles: []
})
export class LoseListComponent implements OnInit {
  // 最新一条招领启示
  latestLose: any;
  latestLoseMessage;
  loading = false;
  list: any[] = [];
  loseListUrl = 'http://localhost:8888/lose/list?_allow_anonymous=true';
  loseListAllUrl = 'http://localhost:8888/lose/listAll?_allow_anonymous=true';

  constructor(public settings: SettingsService,
              private http: _HttpClient,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.getLoseList();
  }

  // 获取招领信息列表
  getLoseList() {
    this.loading = true;
    this.http.get(this.loseListUrl).subscribe((res: any) => {
      console.log('res', res);
      this.list = res.data;
      this.latestLose = this.list[0];
      this.latestLoseMessage = '紧急：'.concat(this.latestLose.userName).concat('发布了一条招领启示');
      this.loading = false;
    });
  }


  getData(more = false) {
    this.loading = true;
    this.http.get(this.loseListAllUrl).subscribe((res: any) => {
      this.list = res.data;
      this.loading = false;
    });
  }
}
