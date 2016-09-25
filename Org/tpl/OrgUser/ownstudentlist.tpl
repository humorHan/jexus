<thead>
	<tr>
    <th>
      <input type="checkbox" name="all" class="middle ml20" />全选
    </th>
		<th>姓名</th>
		<th>账号</th>
		<th>
			<select class="select" id="selectClassType">
        <option value="-1">类型</option>
        <option value="1">1对1</option>
        <option value="0">班课</option>
      </select>
		</th>
    <th>
      <select class="select" id="selectBigGrade">
        <option value="0">学段</option>
        <option value="x">小学</option>
        <option value="c">初中</option>
        <option value="g">高中</option>
      </select>
    </th>
    <th>学科</th>
    <th>老师/班级</th>
    <th>
      <select class="select" id="selectActiveStatus">
        <option value="-1">激活状态</option>
        <option value="1">已激活</option>
        <option value="0">未激活</option>
      </select>
    </th>
    <th>
      <select class="select" id="selectExpireDays">
        <option value="-1">到期时间</option>
        <option value="15">剩15天到期</option>
        <option value="30">剩30天到期</option>
        <option value="0">已到期</option>
      </select>
    </th>
		<th>操作</th>
	</tr>
</thead>
<tbody>
	{{each StudentList}}
		<tr>
      <td>
        <input type="checkbox" name="ckCheckUser" class="middle ml20" userId="{{$value.StudentID}}" userName="{{$value.StudentName}}" userAccount="{{$value.StudentAccount}}" />
      </td>
			<td>{{$value.StudentName}}</td>
			<td>{{$value.StudentAccount}}</td>
      <td>{{$value.ClassTypeDesc}}</td>
      <td>{{$value.BigGradeDesc}}</td>
      <td>{{$value.SubjectDesc}}</td>
      <td>{{$value.TeacherDesc}}</td>
			<td>{{$value.ActiveStatusDesc}}</td>
			<td>{{$value.ExpireTime}}</td>
			<td>
        {{if $value.TeacherDesc != ""}}
        <span class="see-btn mr5 w68" name="spSetStuTeacher" studentId="{{$value.StudentID}}">管理</span>
				{{else}}
					<span class="see-btn mr5 w68" name="spSetStuTeacher" studentId="{{$value.StudentID}}">分配</span>
				{{/if}}
        <span class="see-btn" name="btnViewStuDetails" studentId="{{$value.StudentID}}">查看</span>
			</td>
		</tr>
	{{/each}}
</tbody>
