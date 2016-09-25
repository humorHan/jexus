{{each RoleListModel}}
<li class="place-item" roleId = "{{$value.PositionID}}" leftNum="{{$value.LeftNum}}">
	<input class="middle mr5" type="checkbox" roleId="{{$value.PositionID}}"/>
	{{if $value.PositionID == 6 }}
		{{$value.PositionName}}(<span class="red">可创建咨询师账号{{$value.LeftNum}}个</span>)
	{{/if}}
	{{if $value.PositionID == 8 }}
		{{$value.PositionName}}(<span class="red">可创建老师账号{{$value.LeftNum}}个</span>)
	{{/if}}
	{{$value.PositionName}}
	<span name="spRoleDesc" class="place-bg right" roleId="{{$value.PositionID}}" roleName="{{$value.PositionName}}" roleDesc="{{$value.PositionDesc}}"></span>
</li>
{{/each}}