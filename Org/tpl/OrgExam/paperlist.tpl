{{each ExamList}}
<tr>
     <td>{{$value.ExamCode}}</td>
     <td>
      <div class="ellipsis w110" title="{{$value.ExamName}}">{{$value.ExamName}}</div>
     </td>
     <td>{{$value.SourceID}}</td>
    <td>{{$value.LastUpdateTime}}</td>
    <td>
       <span class="see-btn mr20 w68" data-opt="test" data-value="{{$value.ExamID}}">开始测试</span>
       <span class="see-btn mr20" data-opt="view" data-value="{{$value.ExamID}}">查看</span>
	   
	   {{if $value.IsSelf ==1 }}
	   <span class="see-btn mr20"  data-opt="edit" data-value="{{$value.ExamID}}">编辑</span>
       <span class="see-btn mr20" data-opt="del" data-value="{{$value.ExamID}}"> 删除</span>
		{{/if}}
   
      </td>
 </tr>
{{/each}}