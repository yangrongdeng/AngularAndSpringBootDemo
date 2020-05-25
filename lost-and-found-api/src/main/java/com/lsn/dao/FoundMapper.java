package com.lsn.dao;

import com.lsn.dto.Found;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**|
 * 操作招领found表
 */
@Mapper
public interface FoundMapper {
    /**
     * 插入寻物信息
     * @param found
     */
    @Insert("INSERT into found (title,des,keyWord,userName,concat,userNumber,createTime,useGrade,grade) VALUES  (#{found.title},#{found.des},#{found.keyWord},#{found.userName},#{found.concat},#{found.userNumber},#{found.createTime},#{found.useGrade},#{found.grade})")
    public void addFound(@Param("found") Found found);

    /**
     * 查询部分寻物表信息并按照积分+时间倒序排列：未删除的即status字段=0,审核通过的即checkNumber字段！=2
     * @return
     */

    @Select("SELECT * from found where status=0 and checkNumber!=2 ORDER BY grade desc,createTime desc limit 2")
    public List<Found> foundList();

    /**
     * (点击加载更多按钮)查询所有寻物表信息并按照积分+时间倒序排列：未删除的即status字段=0,审核通过的即checkNumber字段！=2
     * @return
     */
    @Select("SELECT * from found where status=0 and checkNumber!=2 ORDER BY grade desc, createTime desc")
    public List<Found> foundListAll();

    /**
     * 积分助力，每次点击grade字段值+5
     * @param id 按照寻物id查询
     * @return
     *
     */
    @Update("update found set grade=grade+5 where id=#{id}")
    public int upGrade(@Param("id")String id);

    /**
     * 按照用户账号查询用户已发布的寻物信息并按时间倒序排列
     * @param userNumber 按照用户账号查询
     */
    @Select("SELECT * from found where userNumber=#{userNumber} ORDER BY createTime desc")
    public List<Found> myList(@Param("userNumber")String userNumber);


    /**
     * 关闭、删除我发布寻物信息:将记录的status字段设置为1（1:代表删除)
     * @param id 寻物信息的id
     * @return
     */
    @Update("update found set status=1 where id=#{id}")
    public int close(@Param("id")int  id);

    /**
     * 查询未审核的寻物信息：未删除（status=0） 未审核（checkNumber=0）
     * @return
     */
    @Select("SELECT * from found where status=0 and checkNumber=0 ORDER BY createTime desc")
    public List<Found> noCheck();

    /**
     * 查询已审核通过的寻物信息：未删除（status=0） 已审核（checkNumber=1）
     * @return
     */
    @Select("SELECT * from found where status=0  and checkNumber=1  ORDER BY createTime desc")
    public List<Found> alreadyCheck();

    /**
     * 查询未审核通过的寻物信息：未删除（status=0） 已审核（checkNumber=2）
     * @return
     */
    @Select("SELECT * from found where status=0  and checkNumber=2 ORDER BY createTime desc")
    public List<Found> noPassCheck();

    /**
     * 将寻物信息从未审核状态改变为已审核状态： 设置checkNumber=1
     * @return
     */
    @Update("update found set checkNumber=1 where id=#{id}")
    public int pass(@Param("id")int  id);

    /**
     * 将寻物信息从未审核状态改变为审核未通过状态： 设置checkNumber=2
     * @return
     */
    @Update("update found set checkNumber=2 where id=#{id}")
    public int noPass(@Param("id")int  id);
}
