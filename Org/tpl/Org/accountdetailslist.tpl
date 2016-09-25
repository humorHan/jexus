{{each BatchListModel}}
	<tr>
		<td>{{$value.BatchID}}</td>
		{{if $value.AccountType == 1}}
			<td>老师账号</td>
		{{/if}}
		{{if $value.AccountType == 2}}
			<td>咨询师账号</td>
		{{/if}}
		{{if $value.AccountType == 3}}
			<td>学生账号</td>
		{{/if}}
		<td>{{$value.BatchSurplusCount}}</td>
		<td>{{$value.BatchSurplusDays}}</td>
		<td>{{$value.CreateDate}}</td>
	</tr>
{{/each}}