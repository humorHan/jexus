{{each UserListModel}}
<li>
	学生：<span>{{$value.UserName}} ({{$value.UserAccount}})</span>
	<i class="dele-icon" name="spRenewDeleteUser" userId="{{$value.UserId}}"></i>
</li>
{{/each}}