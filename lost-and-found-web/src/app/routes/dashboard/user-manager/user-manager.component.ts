import {Component, OnInit, TemplateRef} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';
import {STColumn, STPage} from '@delon/abc';
import {format} from '@delon/util';
import {UserService} from '../../../service/user.service';
import {EditUserComponent} from './edit-user/edit-user.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styles: []
})
export class UserManagerComponent implements OnInit {

  constructor(private http: _HttpClient,
              private fb: FormBuilder,
              private msg: NzMessageService,
              private modalService: NzModalService,
              private  userService: UserService) {
  }

  loading = false;
  addIsVisible = false;
  addForm: FormGroup;
  editIsVisible = false;
  editForm: FormGroup;
  userListUrl = 'http://localhost:8888/login/userList?_allow_anonymous=true';
  addUserUrl = 'http://localhost:8888/login/add?_allow_anonymous=true';
  editUserUrl = 'http://localhost:8888/login/edit?_allow_anonymous=true';
  dataSet: any[] = [];
  pageNum;
  total;
  stPage: STPage = {
    showSize: true,
    showQuickJumper: true,
    front: true,
    pageSizes: [10, 20, 30, 50]
  };
  columns: STColumn[] = [
    {title: '学生学号', index: 'userNumber'},
    {title: '学生姓名', index: 'userName'},
    {title: '昵称', index: 'nickName'},
    {title: '密码', index: 'password'},
    {title: '用户积分', index: 'grade'},
    {title: '所属班级', index: 'className'},
    {
      title: '用户类型', index: 'type', format: (item, col) => {
        return item[col.indexKey] === 0 ? '普通用户' : '管理员';
      },
    },
    {title: '联系方式', index: 'concat'},
    {
      title: '创建时间',
      index: 'createTime',
      type: 'date',
      dateFormat: 'yyyy-MM-dd HH:mm'
    },
    {
      title: '操作',
      fixed: 'right', width: '140px',
      buttons: [
        {
          text: '编辑',
          type: 'link',
          click: (e: any) => {
            this.showEditModal(e);
          },
        },
        {
          text: '删除',
          type: 'link',
          click: (e: any) => {
            this.deleterOperator(e);
          },
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.getUserList();
    this.addForm = this.fb.group({
      userNumber: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      nickName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      className: [null, [Validators.required]],
      concat: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
    this.editForm = this.fb.group({
      userNumber: [{value: null, disabled: true}, [Validators.required]],
      userName: [{value: null, disabled: true}, [Validators.required]],
      nickName: [null, [Validators.required]],
      password: [{value: null}, [Validators.required]],
      className: [null, [Validators.required]],
      concat: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  // 获取用户列表
  getUserList() {
    this.loading = true;
    this.http.get(this.userListUrl).subscribe((res: any) => {
      this.dataSet = res.data;
      this.loading = false;
    });
  }


  /**
   * 删除操作
   */
  deleterOperator(item) {
    this.modalService.confirm({
      nzTitle: '确认删除该用户吗？',
      nzOnOk: () => {
        this.delete(item.id);
      },
    });
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(res => {
      this.msg.success('删除成功');
      this.getUserList();
    });
  }


  showAddModal(): void {
    this.addForm.reset();
    this.addIsVisible = true;
  }

  addCancel(): void {
    this.addIsVisible = false;
  }


  addIsOk(): void {
    const data = this.addForm.getRawValue();
    this.http.post(this.addUserUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).subscribe((res: any) => {
      this.msg.success('用户添加成功');
      this.getUserList();
    });
    this.addIsVisible = false;
  }


  showEditModal(item: any): void {
    this.editForm.reset();
    this.editIsVisible = true;
    this.editForm.patchValue(item);
  }

  editCancel(): void {
    this.editIsVisible = false;
  }

  editIsOk(): void {
    const data = this.editForm.getRawValue();
    this.http.post(this.editUserUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).subscribe((res: any) => {
      this.msg.success('修改成功');
      this.getUserList();
    });
    this.editIsVisible = false;
  }


}
