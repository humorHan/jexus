<thead>
	<tr>
		<th>姓名</th>
		<th>账号</th>
    <th>
      <select class="select" id="selectClassType">
        <option value="-1">类型</option>
        <option value="1">1对1</option>
        <option value="0">班课</option>
      </select>
    </th>
    <th>学管</th>
		<th>
      <select class="select" id="selectSchoolId">
        <option value="-1">校区</option>
        {{each SchoolList}}
          <option value="{{$value.OrgID}}">{{$value.OrgName}}</option>
        {{/each}}
      </select>
    </th>
		<th>操作</th>
	</tr>
</thead>
<tbody>
  {{each StudentInfoList}}
    <tr>
			<td>{{$value.StudentName}}</td>
			<td>{{$value.StudentAccount}}</td>
			<td>{{$value.ClassTypeDesc}}</td>
			<td>{{$value.ManagerName}}</td>
			<td>{{$value.SchoolName}}</td>
			<td>
        <span class="see-btn" name="btnViewStuDetails" studentId="{{$value.StudentID}}">查看</span>
			</td>
		</tr>
	{{/each}}
</tbody>
