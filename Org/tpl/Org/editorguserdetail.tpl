<div class="triangle-bg"></div>
<div class="user-info-detail">
  <div class="user-detail-bg"></div>
  <div class="font12 mt12">
    账号：<i class="black">{{UserAccount}}</i>
  </div>
  <div></div>
</div>
<div class="detail-content">
  <div class="item">
    <span>
      姓名：
      <input class="name input-small black" placeholder="请输入姓名" type="text" text="{{UserAccount}}" id="txtDetailsUserName"/>
    </span>
    <span class="sex ml20">
      性别：
      {{if UserSex == "男"}}
      <label>
        <input class="black middle" name="sex" type="radio" value="1" checked="" />
        <i class="black"> 男 </i>
        <input class="black middle ml10" name="sex" type="radio" value="0"/>
        <i class="black"> 女 </i>
      </label>
      {{else}}
      <label>
        <input class="black middle ml10" name="sex" type="radio"  value="1"/>
        <i class="black"> 男 </i>
        <input class="black middle " name="sex" type="radio" value="0" checked=""/>
        <i class="black"> 女 </i>
      </label>
      {{/if}}
    </span>
  </div>
  {{if IsTeacher == 1}}
  <div class="item">
    <span>
      角色：<i class="black">{{RoleName}}</i>
    </span>
    <span class="sex ml20">
      所属：<i class="black">{{OrgDesc}}</i>
    </span>
  </div>
  {{else}}
  <div class="item">
    <span>
      角色：<i class="black">{{RoleName}}</i>
    </span>
  </div>
  <div class="item">
    <span class="sex ml20">
      所属：<i class="black">{{OrgDesc}}</i>
    </span>
  </div>
  {{/if}}
  <div class="item">
    <span>
      到期时间：<i class="black">2016-10-1</i>
    </span>
  </div>
  {{if IsTeacher == 1}}
  <div class="item">
    <span>
      教龄：<i class="black">{{TeachSubjectDesc}}</i>
    </span>
    <span class="sex ml20">
      入职时间：
      <input class="number1 input-small black middle" placeholder="请选择入职时间" type="text" text="{{EntryTime}}" id="txtDetailsEntryTime"/>
    </span>
  </div>
  {{/if}}
  {{if IsTeacher == 1}}
  <div class="item">
    <span>
      所授学科：<i class="black">{{TeachSubjectDesc}}</i>
    </span>
  </div>
  {{/if}}
  <div>
    <span>
      QQ：
      <input class="qq input-small black" placeholder="请输入QQ账号" type="text" text="{{QQNum}}" id="txtDetailsQQNum"/>
    </span>
    <span class="sex ml20">
      身份证号：
      <input class="number1 input-small black middle" placeholder="411325" type="text" text="{{IDCardNumSub1}}"  id="txtDetailsIDCardNumSub1"/>
      <input class="number2 input-small black middle" placeholder="19961212" type="text" text="{{IDCardNumSub2}}" id="txtDetailsIDCardNumSub2"/>
      <input class="number3 input-small black middle" placeholder="8888" type="text" text="{{IDCardNumSub3}}" id="txtDetailsIDCardNumSub3"/>
    </span>
  </div>
  <div class="tips" id="divDetailsQQTipArea">
    <span class="qq-tip error-tip left">您输入的信息有误!</span>
  </div>
  <div class="tips" id="divDetailsIdCardTipArea">
    <span class="number-tip error-tip right">您输入的信息有误</span>
  </div>
  <div>
    <span>
      手机号码：
      <input class="phone input-small black middle" placeholder="请输入手机号码" type="text" text="{{PhoneNum}}" id="txtDetailsPhoneNum"/>
    </span>
    <span class="ml20">
      邮箱：
      <input class="email input-small black middle" placeholder="请输入邮箱地址" type="text" text="{{EmailAddr}}" id="txtDetailsEmailAddr"/>
    </span>
  </div>
  <div class="tips" id="divDetailsPhoneTipArea">
    <span class="phone-tip error-tip left" style="display:none;">您输入的信息有误!</span>
  </div>
  <div class="tips" id="divDetailsEmailTipArea">
    <span class="email-tip error-tip right" style="display:none;">您输入的信息有误</span>
  </div>
</div>
<div class="handle">
  <span class="submit" id="spSaveEditedDetailsInfo">保存</span>
  <span class="cancel ml40" id="spCancelEditedDetailsInfo">取消</span>
</div>