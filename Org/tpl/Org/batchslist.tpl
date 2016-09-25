{{each BatchListModel}}
<li class="batch">
	<input class="middle mr5" type="checkbox" batchId="{{$value.BatchID}}" roleId="{{$value.RoleId}}" batchType="{{$value.AccountType}}"/>
	<span>剩余<i class="red">{{$value.BatchSurplusCount}}</i>个{{if $value.AccountType == 1}}老师{{/if}}{{if $value.AccountType == 2}}咨询师{{/if}}{{if $value.AccountType == 3}}学生{{/if}}账号，剩余时间<i class="red">{{$value.BatchSurplusDays}}</i>天</span>
</li>
{{/each}}