<thead>
	<tr>
		<th>姓名</th>
		<th>账号</th>
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
		<th>创建时间</th>
		<th>操作</th>
	</tr>
</thead>
<tbody>
	{{each StudentList}}
		<tr>
			<td>{{$value.StudentName}}</td>
			<td>{{$value.StudentAccount}}</td>
			<td>{{$value.ActiveStatusDesc}}</td>
			<td>{{$value.ExpireTime}}</td>
			<td>{{$value.CreateTime}}</td>
			<td>
				{{if $value.ManagerId > 0}}
					<span class="see-btn mr5 w68" name="spSetStuManager" studentId="{{$value.StudentID}}" managerId="{{$value.ManagerId}}">修改学管</span>
				{{else}}
					<span class="see-btn mr5 w68" name="spSetStuManager" studentId="{{$value.StudentID}}" managerId="0">分配学管</span>
				{{/if}}
        <span class="see-btn" name="btnViewStuDetails" studentId="{{$value.StudentID}}">查看</span>
			</td>
		</tr>
	{{/each}}
</tbody>
