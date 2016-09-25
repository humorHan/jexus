<p class="center font14 headbg">
  老师<span class="red ml5" id="teacherNum"></span>名老师
</p>
<ul class="pb30 pt30 teacherbox overflow">
  <li>
    {{each ListModel}}
    <span>
      <i class="teacher"></i>{{$value.TrueName}}({{$value.SubjectName}})
    </span>
    {{/each}}
  </li>
</ul>
{{each ListStuSubjectIdAndName}}
<p class="center font14 headbg">
  {{$value.SubjectName}}<span class="red ml5">{{$value.TotalNum}}</span>名学生
</p>
<ul class="pb30 pt30 studentbox">
  <li class="mb18 overflow">
    {{each $value.StuInfo}}
	<span>
      <i class="student"></i>{{$value.UserName}}
    </span>
	{{/each}}
  </li>
</ul>
{{/each}}