<div class="mb15" id="divClassTypeChoose">
  <span>类别：</span>
  <label class="mr10 cursor">
    <input type="radio" class="mr5" name="type-choose" value="1"/> 一对一
  </label>
  <label class="cursor">
    <input type="radio"  class="mr5" name="type-choose" value="0"/> 班课
  </label>
</div>
<div class="teacher per45 left">
  <span>学段：</span>
  <select class="selet-text" id="selectAddLessonBigGrade">
    <option value="-1" selected="selected">选择学段</option>
    <option value="x">小学</option>
    <option value="c">初中</option>
    <option value="g">高中</option>
  </select>
</div>
<div class="sign-up per45 right">
  <span>学科：</span>
  <select class="selet-text" id="selectAddLessonSubject">
    <option value="-1" selected="selected">选择学科</option>
    {{each SubjectList}}
    <option value="{{$value.SubjectId}}">{{$value.SubjectDesc}}</option>
    {{/each}}
  </select>
</div>
<div class="mb15 overflow">
  <div class="teacher per45 left">
    <span id="divTitle">{{TitleName}}：</span>
    <select class="selet-teacher" id="selectTeacherOrClass">
      <option value="-1">选择{{TitleName}}</option>
    </select>
  </div>
  <div class="sign-up per45 right">
    <span>签约：</span>
    <input type="text" class="input-time" id="txtAddClassHour" text="{{SurplusClassHour}}"/>课时
  </div>
</div>
<button class="ok-btn right" id="btnAddLessonInfo" lessonId="{{UserClassStudyId}}">确定</button>