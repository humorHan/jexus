{{each SchoolListModel}}
	{{if $value.OrgLevel ==1 }}
		<li class="department-school">
			<label>
				<input class="mr5 middle" type="radio" name="department-item" orgId="{{$value.OrgID}}" parentId = "{{$value.ParentOrgID}}" orgLevel = "{{$value.OrgLevel}}" orgName="{{$value.OrgName}}"/>
				<span class="middle">{{$value.OrgName}}</span>
			</label>
		</li>
	{{/if}}
	<li>
		<label>
			<input class="mr5 middle" type="radio" name="department-item" orgId="{{$value.OrgID}}" parentId = "{{$value.ParentOrgID}}" orgLevel = "{{$value.OrgLevel}}" orgName="{{$value.OrgName}}"/>
			<span class="middle">{{$value.OrgName}}</span>
		</label>
	</li>
{{/each}}