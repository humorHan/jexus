
{{each Data}}
<tr class="font12">
  <td>{{$value.AreaName}}</td>
  <td>{{$value.UserName}}</td>
  <td>{{$value.UserID}}</td>
  <td>{{$value.Campus}}</td>
  <td>
    <a href="/OrgTeachWork/Organization/OrgAreaDetail?AreaId={{$value.AreaID}}"  class="see-btn look black">查看</a>
  </td>
</tr>
{{/each}}


