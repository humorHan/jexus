<div id="main-content">
  <div class="crumb mt40 mb30 font16">
    查看学生 > 学生详情
  </div>
  <div class="line"></div>

  <div class="detail font14">
    <div class="triangle-bg"></div>
    <div class="user-info-detail">
      <div class="user-detail-bg"></div>
      <div class="font12 mt12">
        账号：<i class="black">{{StuAccount}}</i>
      </div>
      <div class="font12 mt12">
        到期日期：<i class="black">{{ExpireTime | dateFormat: "yyyy-MM-dd"}}</i>
      </div>
    </div>
    <div class="detail-content">
      <div class="item">
        <span>
          姓名：<i class="black">{{StuName}}</i>
        </span>
        <span class="status-active ml20">{{ShowIsEnable}}</span>
        
      </div>
      <div class="item">
        <span>
          性别：<i class="black">{{Sex | sextran}}</i>
        </span>
        <span class="ml20">
          生日：<i class="black">{{BirthDay | dateFormat: "yyyy-MM-dd"}}</i>
        </span>
      </div>
      <div class="item">
        <span>
          角色：<i class="black">学生</i>
        </span>
        <span class="ml20">
          学制：<i class="black">{{EduType | edutypetran}}</i>
        </span>
      </div>
      <div class="item">
        <span>
          手机号码：<i class="black">{{Phone}}</i>
        </span>
        <span class="ml20">
          QQ：<i class="black">{{Qq}}</i>
        </span>
      </div>
      <div class="item">
        <span>
          所在学校：<i class="black">{{OldSchoolName}}</i>
        </span>
        <span class="ml20">
          所在班级：<i class="black">{{OldClass}}</i>
        </span>
      </div>
      <div class="item">
        <span>
          邮箱地址：<i class="black">{{Email}}</i>
        </span>
      </div>
      <div class="item">
        <span>
          家庭住址：<i class="black">{{FamAddress}}</i>
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
            {{each AlreadySubjects}}
            <tr>
              <td>{{$value.Subject | getSubjectName}}</td>
              <td>{{$value.ClassType}}</td>
              <td>{{$value.TeachName}}</td>
              <td>{{$value.ClassHour}}</td>
              <td>{{$value.ContactTime | dateFormat: "yyyy-MM-dd"}}</td>
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
            {{each ParentsData}}
            <tr>
              <td>{{$value.RelationShip}}</td>
              <td>{{$value.Name}}</td>
              <td>{{$value.WorkInfo}}</td>
              <td>{{$value.Phone}}</td>
            </tr>
            {{/each}}
          </tbody>
        </table>
      </div>
      <div class="item">
        <div class="mb15">入学前主要学科成绩：</div>
        <table class="small-table">
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

              <td>{{OldScores.TMathScore}}</td>
              <td>{{OldScores.TChinScore}}</td>
              <td>{{OldScores.TEngScore}}</td>
              <td>{{OldScores.TPhyScore}}</td>
              <td>{{OldScores.TCheScore}}</td>
              <td>{{OldScores.TGeoScore}}</td>
              <td>{{OldScores.THisScore}}</td>
              <td>{{OldScores.TPolScore}}</td>
              <td>{{OldScores.TBioScore}}</td>


            </tr>
            <tr>
              <td>成绩</td>
              <td class="red">{{OldScores.MathScore}}</td>
              <td  class="red">{{OldScores.ChinScore}}</td>
              <td class="red">{{OldScores.EngScore}}</td>
              <td class="red">{{OldScores.PhyScore}}</td>
              <td class="red">{{OldScores.CheScore}}</td>
              <td class="red">{{OldScores.GeoScore}}</td>
              <td class="red">{{OldScores.HisScore}}</td>
              <td class="red">{{OldScores.PolScore}}</td>
              <td class="red">{{OldScores.BioScore}}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="content-bottom"></div>
</div>

