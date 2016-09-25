{{each UserList}}
<tr>
	<td><input type="checkbox" name="ckCheckUser" class="middle ml20" userId="{{$value.UserID}}"></td>
	<td>{{$value.UserName}}</td>
	<td>{{$value.UserAccount}}</td>
	<td>{{$value.OrgDepartNameDesc}}</td>
	<td>{{$value.CreateDate}}</td>
	<td>{{$value.ExpairDate}}</td>
	<td>
		<span class="see-btn" name="btnShowUserDetails" userId="{{$value.UserID}}">查看</span>
	</td>
</tr>
{{/each}}