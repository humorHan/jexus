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
		<th>操作</th>
	</tr>
</thead>
<tbody>
	{{each StudentList}}
		<tr>
			<td>{{$value.StudentName}}</td>
			<td>{{$value.StudentAccount}}</td>
			<td>{{$value.ClassTypeDesc}}</td>
			<td>{{$value.ManagerName}}</td>
			<td>
         <span class="see-btn" name="btnViewStuDetails" studentId="{{$value.StudentID}}">查看</span>
			</td>
		</tr>
	{{/each}}
</tbody>
