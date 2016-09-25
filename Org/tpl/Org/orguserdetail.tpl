<div class="triangle-bg"></div>
<div class="user-info-detail">
  <div class="user-detail-bg"></div>
  <div class="font12 mt12">
    账号：<i class="black">{{UserAccount}}</i>
    {{if EnalbeFlags == 1}}
    <span id="spDetailsClose" class="close ml5">禁用</span>
      <span id="spDetailsOpen" class="open ml5" style="display: none">启用</span>
    {{/if}}
    {{if EnalbeFlags == 0}}
    <span id="spDetailsOpen" class="open ml5">启用</span>
    <span id="spDetailsClose" class="close ml5" style="display: none">禁用</span>
    {{/if}}
  </div>
</div>
<div class="detail-content">
  <div class="item">
    <span>
      姓名：<i class="black">{{UserName}}</i>
    </span>
    <span class="sex ml20">
      性别：<i class="black">{{UserSex}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      角色：<i class="black">{{RoleName}}</i>
    </span>
    <span class="sex ml20">
      所属：<i class="black">{{OrgDesc}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      到期时间：<i class="black">{{ExpireTime}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      入职时间：<i class="black">{{EntryTime}}</i>
    </span>
  </div>
  {{if IsTeacher == 1}}
  <div class="item">
    <span>
      所授学科：<i class="black">{{TeachSubjectDesc}}</i>
    </span>
  </div>
  {{/if}}
  <div class="item">
    <span>
      QQ：<i class="black">{{QQNum}}</i>
    </span>
    <span class="sex ml20">
      身份证号：<i class="black">{{IDCardNum}}</i>
    </span>
  </div>
  <div class="item">
    <span>
      手机号码：<i class="black">{{PhoneNum}}</i>
    </span>
    <span class="sex ml20">
      邮箱：<i class="black">{{EmailAddr}}</i>
    </span>
  </div>
</div>