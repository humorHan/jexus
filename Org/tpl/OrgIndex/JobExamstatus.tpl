
{{each}}
<tr class="font12">
    <td>{{$value.workname}}</td>
    <td>{{$value.createtime | dateFormat: "MM月dd日 hh:mm"}}</td>
    <td>{{$value.endtime | dateFormat: "MM月dd日 hh:mm"}}</td>
    <td>{{$value.postnum}}/{{$value.usernum}}</td>
   {{if $value.state==0}}
    <td>待提交</td>
    {{else}}
        {{if $value.state==1}}
          <td>待批改</td>
        {{else}}
          <td>已批改</td>
        {{/if}}
    {{/if}}   
    <td><span class="see-btn look black">分析</span></td>
</tr>
{{/each}}
