package com.lsn.dto;

import lombok.Data;

import java.util.Date;
/**
 * 存储用户信息的对象，作为数据流转介质：可存储前台传入的用户信息、数据库用户信息
 */
@Data
public class User {
    int id;
    String userNumber;
    String nickName;
    String userName;
    String password;
    String className;
    String concat;
    int type;
    int grade;
    int status;
    Date createTime;



}
