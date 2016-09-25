{{each ListModel}}
<tr class="font12">
<td>{{$value.ClassName}}</td>
<td>{{$value.SubjectName}}</td>
<td>{{if $value.SubjectCount ==0 }} 未分配 {{else}} {{$value.SubjectCount}}  {{/if}}</td>
<td>{{$value.StuctureName}}</td>
<td><span class="see-btn look black" data-classid="{{$value.ClassID}}">查看</span></td>
</tr>
{{/each}}