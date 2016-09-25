<div class="mb15">
  <span>
    类别：<i class="normal"></i>{{ClassTypeDesc}}
  </span>
</div>
<div class="mb15 overflow">
  <span class="per45 left">
    学段：<i class="normal">{{BigGradeDesc}}</i>
  </span>
  <span class="per45 right">
    学科：<i class="normal">{{SubjectDesc}}</i>
  </span>
</div>
<div class="mb15 overflow">
  <div class="teacher per45 left">
    <span>{{TitleName}}：</span>
    <select class="selet-teacher" id="selectTeacherOrClass">
      {{each TeacherOrClassList}}
      <option value="{{$value.TeacherID}}">{{$value.TeacherName}}</option>
      {{/each}}
    </select>
  </div>
  <div class="sign-up per45 right">
    <span>签约：</span>
    <input type="text" class="input-time" id="txtUpdateClassHour" text="{{SurplusClassHour}}"/>课时
  </div>
</div>
<button class="ok-btn right" id="btnUpdateLessonInfo" lessonId="{{UserClassStudyId}}">确定</button>