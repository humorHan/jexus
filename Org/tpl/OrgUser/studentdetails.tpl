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
  <div class="item">
    <span>
      姓名：<i class="black">{{StudentName}}</i>
    </span>
    {{if ActiveStatus == 0}}
    <span class="status ml20">未激活</span>
    {{else}}
    <span class="status-active ml20">已激活</span>
    {{/if}}
  </div>
  <div class="item">
    <span>
      性别：<i class="black">{{if StudentSex==0}}女{{/if}}{{if StudentSex==1}}男{{/if}}</i>
    </span>
    <span class="ml20">
      年龄：<i class="black">{{StudentAge}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      角色：<i class="black">学生</i>
    </span>
    <span class="ml20">
      学制：<i class="black">{{EduTypeDesc}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      手机号码：<i class="black">{{PhoneNum}}</i>
    </span>
    <span class="ml20">
      QQ：<i class="black">{{QQNum}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      所在学校：<i class="black">{{SchoolName}}</i>
    </span>
    <span class="ml20">
      所在班级：<i class="black">{{ClassName}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      邮箱地址：<i class="black">{{EmailAddr}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      家庭住址：<i class="black">{{Address}}</i>
    </span>
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
    <table class="small-table">
      <thead>
        <tr>
          <th>关系</th>
          <th>姓名</th>
          <th>工作单位</th>
          <th>联系方式</th>
        </tr>
      </thead>
      <tbody>
        {{each ClassTypeList}}
        <tr>
          <td>{{$value.RelationDesc}}</td>
          <td>{{$value.ParentName}}</td>
          <td>{{$value.ParentJob}}</td>
          <td>{{$value.ParentPhone}}</td>
        </tr>
        {{/each}}
      </tbody>
    </table>
  </div>
  <div class="item">
    <div class="mb15">入学前主要学科成绩：</div>
    <table class="small-table" id="tbHistoryScoreList">
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
          <td subjectId="02">暂无</td>
          <td subjectId="01">暂无</td>
          <td subjectId="03">暂无</td>
          <td subjectId="04">暂无</td>
          <td subjectId="05">暂无</td>
          <td subjectId="06">暂无</td>
          <td subjectId="07">暂无</td>
          <td subjectId="08">暂无</td>
          <td subjectId="09">暂无</td>
        </tr>
        <tr>
          <td>成绩</td>
          <td class="red" subjectId="02">暂无</td>
          <td class="red" subjectId="01">暂无</td>
          <td class="red" subjectId="03">暂无</td>
          <td class="red" subjectId="04">暂无</td>
          <td class="red" subjectId="05">暂无</td>
          <td class="red" subjectId="06">暂无</td>
          <td class="red" subjectId="07">暂无</td>
          <td class="red" subjectId="08">暂无</td>
          <td class="red" subjectId="09">暂无</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>