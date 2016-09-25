
{{each}}
 <tr class="font12">
                            <td>{{$value.TempName}}</td>
                            <td>{{$value.Phone}}</td>
                            <td>{{$value.ExamTypeN}}</td>
                            <td>{{$value.TotalHourN}}</td>
                            <td class="red">{{$value.IsFile==false?"未签约":"签约"}}</td>
                            <td>{{$value.EditTimeStr}}</td>
                            <td>{{$value.CounselorName}}</td>
                            <td><span class="see-btn look">查看</span></td>
                        </tr>
{{/each}}


