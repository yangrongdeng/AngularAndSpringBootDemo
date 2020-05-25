package com.lsn.controller;

import com.lsn.dao.UserMapper;
import com.lsn.dto.User;
import com.lsn.enums.CodeMsgEnum;
import com.lsn.utils.Result;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * 关于用户操作的模块
 */
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping(value = "login")
public class UserController {


    @Autowired
    UserMapper userMapper;

    /**
     * 登陆
     * @param userNumber 用户名
     * @param password 密码
     * @return 返回前台用户信息
     */
    @RequestMapping("/check")
    public Result<User> login(String userNumber, String password) {
        return Result.success(userMapper.login(userNumber, password));
    }

    /**
     * 修改密码
     * @param oldPassword 旧密码
     * @param newPassword 新密码
     * @param userNumber 用户账户
     * @return 是否成功信息
     */
    @RequestMapping("/changePassword")
    public Result<String> changePassword(String oldPassword, String newPassword, String userNumber) {
        // 判断账户、旧密码查询用户是否存在
        User user = userMapper.login(userNumber, oldPassword);
        if (user == null) {
            return Result.error(CodeMsgEnum.OLD_PASSWORD_ERROR);
        }
        // 更改密码
        int result = userMapper.changePassword(userNumber, newPassword);
        return Result.success("修改成功");
    }

    /**
     * 获取包含所有用户信息的列表
     * @return
     */
    @RequestMapping("/userList")
    public Result<List<User>> userList() {
        List<User> list = userMapper.userList();
        return Result.success(list);
    }


    /**
     * 删除用户
     * @param id 用户对应的id
     */
    @RequestMapping("/deleteUser")
    public void deleteUser(@RequestParam("id") int id) {
        userMapper.deleteUser(id);
    }

    /**
     * 添加用户
     * @param user 用户信息
     */
    @RequestMapping("/add")
    public void add(@RequestBody User user) {
        user.setCreateTime(new Date());
        userMapper.add(user);
    }
    /**
     * 修改用户
     * @param user 用户信息
     */
    @RequestMapping("/edit")
    public void edit(@RequestBody User user) {
        userMapper.edit(user);
    }
}
