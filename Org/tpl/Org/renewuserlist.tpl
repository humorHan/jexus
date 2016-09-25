{{each UserListModel}}
<li>
	{{$value.UserName}} ({{$value.UserAccount}})
	<span class="teacher-bg ml20 middle" name="spRenewDeleteUser" userId="{{$value.UserId}}"></span>
</li>
{{/each}}