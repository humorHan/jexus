<div class="choosebox">
  <p class="head">
    选择老师
  </p>
  <div class="chooseteacher center">
    <ul class="overflow">
      <li class="left left-content">
        <p class="head">学科</p>
        <ul class="leftnews">
          {{each ListStudentInfo}}
          {{if ($index)==0 }}
          <li class="choose-sub" data-subjectid="{{$value.SubjectID}}">{{$value.SubjectName}}</li>
          {{else}}
          <li data-subjectid="{{$value.SubjectID}}">{{$value.SubjectName}}</li>
          {{/if}}
          {{/each}}
        </ul>
      </li>
      <li class="left right-content">
        <p class="head">老师</p>
        <ul class="rightnews">
          <li>
            {{each ListUser}}
            <span class="teach-name">
              <label>
                <input type="radio" name="math" value="{{$value.UserID}}" data-subjectid="{{$value.SubjectID}}" data-username="{{$value.UserName}}" />{{$value.UserName}}
              </label>
            </span>
            {{if (($index)+1)/2==0 }}
          </li><li> {{/if}}
        </li>
      {{/each}}
    </ul>
    </li>
    </ul>
  </div>

  <p class="head">
    已选老师
  </p>
  <ul class="chosedteacher overflow">
    <li>
      <span>学科</span>
      <span>老师</span>
      <span>操作</span>
    </li>
    {{each ListCat}}
    <li>
      <span data-courseid="{{$value.CourseID}}" data-subjectid="{{$value.SubjectID}}">{{$value.SubjectName}}</span>
      <span data-userid="{{$value.UserID}}">{{$value.UserName}}</span>
      <span>
        <i class="dele cursor" data-subjectid="{{$value.SubjectID}}" data-userid="{{$value.UserID}}"></i>
      </span>
    </li>
    {{/each}}
  </ul>
  <div class="handle">
    <button class="block submit font14  auto  cursor mt13" id="BtnAllocationSubmit">确定</button>
  </div>
</div>