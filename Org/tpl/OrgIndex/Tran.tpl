
{{each}}
<tr class="font12">
    <td>第{{$value.num}}名</td>
    <td>{{$value.UserName}}</td>
    <td>{{$value.score}}</td>
    <td><input type="button" name="workid" id="f_{{$value.userid}}" data-userid="{{$value.userid}}" data-workid="{{$value.workid}}" data-isopen="1" data-isset="0" value="展开详情" /> </td>      
</tr>
<tr id="tr_{{$value.userid}}" style="display:none">
    <td id="td_{{$value.userid}}" colspan="4"></td>
</tr>
{{/each}}
