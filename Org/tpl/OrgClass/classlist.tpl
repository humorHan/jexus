{{each ListModel}}
<tr class="font12">
	<td>{{$value.ClassName}}</td>
	<td>{{$value.SubjectName}}</td>
	<td>{{if $value.SubjectCount ==0 }} 未分配 {{else}} {{$value.SubjectCount}}  {{/if}}</td>
	<td><span class="see-btn distribute mr10" data-classid="{{$value.ClassID}}">{{$value.BtnAllocationText}}</span><span class="see-btn look"  data-classid="{{$value.ClassID}}">查看</span></td>
</tr>
{{/each}}