<div class="triangle-bg"></div>
<div class="user-info-detail">
  <div class="user-detail-bg"></div>
  <div class="font12 mt12">
    账号：<i class="black">{{StudentAccount}}</i>
  </div>
  <div class="font12 mt12">
    到期日期：<i class="black">{{ExpireTime}}</i>
  </div>
</div>
<div class="detail-content">
  <div>
    姓名
    <input class="input-small w88" type="text" placeholder="请输入姓名" value="{{StudentName}}" id="txtStudentName"/>
  </div>
  <div class="tips" id="divStuNameErrTip" style="display:none;">
    <div class="name-tip error-tip">输入信息有误！</div>
  </div>

  <div class="item">
    <span class="sex mr20" id="spStudentSex">
      性别：
      {{if StudentSex==0}}
      <label>
        <input class="black middle ml10" name="sex" type="radio" value="1"/>
        <i class="black"> 男 </i>
      </label>
      <label>
        <input class="black middle" name="sex" type="radio" checked="checked" value="0"/>
        <i class="black"> 女 </i>
      </label>
      {{else}}
      <label>
        <input class="black middle " name="sex" type="radio" checked="checked" value="1"/>
        <i class="black"> 男 </i>
      </label>
      <label>
        <input class="black middle ml10" name="sex" type="radio" value="0"/>
        <i class="black"> 女 </i>
      </label>
      {{/if}}
    </span>
    生日:
    <!--todo 日期插件-->
  </div>

  <div class="item">
    角色：
    <i class="black mr20">学生</i>
    学制：
    <select class="select" id="selectStudentEduType">
      <option value="0" selected="selected">六三制</option>
      <option value="0">五四制</option>
    </select>
  </div>

  <div>
    手机号码：
    <input class="w118 input-small mr20" type="text" placeholder="请输入手机号码" value="{{PhoneNum}}" id="txtStudentPhone"/>
    QQ：
    <input class="qq input-small black" placeholder="请输入QQ账号" type="text" value="{{QQNum}}" id="txtStudentQQ"/>
  </div>
  <div class="tips"  id="divStuPhoneErrTip" style="display:none;">
    <span class="phone-tip error-tip left">您输入的信息有误!</span>
    <span class="qq-tip error-tip right">您输入的信息有误</span>
  </div>

  <div>
    所在学校：
    <input class="input-small w118 mr20" type="text" placeholder="请输入学校名称"  value="{{SchoolName}}" id="txtStudentSclName"/>
    所在班级：
    <input class="input-small w118" type="text" placeholder="请输入所在班级"  value="{{ClassName}}" id="txtStudentClassName"/>
  </div>
  <div class="tips"  id="divStuSchoolErrTip" style="display:none;">
    <span class="school-tip error-tip left">您输入的信息有误!</span>
    <span class="grade-tip error-tip right">您输入的信息有误</span>
  </div>

  <div>
    邮箱地址：
    <input class="email input-small black" placeholder="请输入邮箱地址" type="text" value="{{EmailAddr}}" id="txtStudentEmail" />
  </div>
  <div class="tips" id="divStuEmailErrTip" style="display:none;">
    <span class="email-tip error-tip left">您输入的信息有误!</span>
  </div>

  <div>
    家庭住址：
    <input class="home-address input-small black" placeholder="请输入家庭住址" type="text" value="{{Address}}" id="txtStudentAddr"/>
  </div>
  <div class="tips" id="divStuAddrErrTip" style="display:none;">
    <span class="home-address-tip error-tip left">您输入的信息有误!</span>
  </div>

  <div class="item">
    <div class="mb15">已报学科：</div>
    <table class="small-table">
      <thead>
        <tr>
          <th>学科</th>
          <th>类型</th>
          <th>补课老师</th>
          <th>剩余课时</th>
          <th>报班时间</th>
        </tr>
      </thead>
      <tbody>
        {{each ClassTypeList}}
        <tr>
          <td>{{$value.BigGradeDesc}}{{$value.SubjectDesc}}</td>
          <td>{{$value.ClassTypeDesc}}</td>
          <td>{{$value.ClassName}}</td>
          <td>{{if $value.SurplusClassHour >0}}{{$value.SurplusClassHour}}课时{{else}}已结课{{/if}}</td>
          <td>{{$value.CreateClassDate}}</td>
        </tr>
        {{/each}}
      </tbody>
    </table>
  </div>

  <div class="item">
    <div class="mb15">家长信息：</div>
    <table class="small-table" id="tbParentRelationList">
      <thead>
        <tr>
          <th>关系</th>
          <th>姓名</th>
          <th>工作单位</th>
          <th>联系方式</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {{each ClassTypeList}}
        <tr relationId="{{$value.RelationId}}">
          <td>
            <input class="input-small w65" type="text" value="{{$value.RelationDesc}}" name="txtRelationDesc"/>
          </td>
          <td>
            <input class="input-small w65" type="text" value="{{$value.ParentName}}"  name="txtParentName"/>
          </td>
          <td>
            <input class="input-small w98" type="text" value="{{$value.ParentJob}}" name="txtParentJob" />
          </td>
          <td>
            <input class="input-small w118" type="text" value="{{$value.ParentPhone}}" name="txtParentPhone" />
          </td>
          <td>
            <img class="cursor" src="@BaseConfig.ImgUrl/bundle/img/add.png" id="imgAddRelationInfo"/>
          </td>
        </tr>
        {{/each}}
      </tbody>
    </table>
  </div>

  <div class="item">
    <div class="mb15">入学前主要学科成绩：</div>
    <table class="small-table" id="tbEditHistoryScoreList">
      <thead>
        <tr>
          <th>科目</th>
          <th>数学</th>
          <th>语文</th>
          <th>英语</th>
          <th>物理</th>
          <th>化学</th>
          <th>地理</th>
          <th>历史</th>
          <th>政治</th>
          <th>生物</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>满分</td>
          <td>            <input subjectId="02" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="01" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="03" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="04" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="05" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="06" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="07" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="08" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="09" scoreId="0" class="input-small" type="text" value="0" />分          </td>
        </tr>
        <tr>
          <td>成绩</td>
          <td>            <input subjectId="02" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="01" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="03" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="04" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="05" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="06" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="07" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="08" scoreId="0" class="input-small" type="text" value="0" />分          </td>
          <td>            <input subjectId="09" scoreId="0" class="input-small" type="text" value="0" />分          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="handle mb40">
  <span class="submit" id="btnSaveStudentDetails">保存</span>
  <span class="cancel ml40" id="btnCancelEditStudentDetails">取消</span>
</div>