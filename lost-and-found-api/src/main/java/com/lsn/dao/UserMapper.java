package com.lsn.dao;

import com.lsn.dto.Found;
import com.lsn.dto.User;
import org.apache.ibatis.annotations.*;

import java.util.List;
/**
 * 操作用户user表
 */
@Mapper
public interface UserMapper {

     // 按照用户的账户和密码查询用户是否存在
    @Select("select * from user WHERE userNumber=#{userNumber} and password=#{password} and status=0")
    public User login(@Param("userNumber") String userNumber, @Param("password") String password);

    // 更改用户密码：用账号查询相应的用户再设置新密码
    @Update("UPDATE user SET password=#{newPassword} WHERE  userNumber=#{userNumber}")
    public int changePassword(@Param("userNumber") String userNumber, @Param("newPassword") String newPassword);

    // 查询用户列表：status=0代表该用户存在，为1为已删除
    @Select("select * from user WHERE status=0")
    public List<User> userList();

    // 删除用户：设置status字段为1
    @Update("UPDATE user SET status=1 WHERE  id=#{id}")
    public void deleteUser(@Param("id") int id);

    // 向数据库插入用户
    @Insert("INSERT into user (userNumber,nickName,userName,password,className,concat,type,createTime) VALUES  (#{user.userNumber},#{user.nickName},#{user.userName},#{user.password},#{user.className},#{user.concat},#{user.type},#{user.createTime})")
    public void add(@Param("user") User user);

    // 修改用户
    @Update("update  user set nickName=#{user.nickName},password=#{user.password},className=#{user.className},concat=#{user.concat},type=#{user.type} where userNumber=#{user.userNumber}")
    public void edit(@Param("user") User user);
}
