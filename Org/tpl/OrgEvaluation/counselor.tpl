
{{each}}
 <tr class="font12">
                            <td>{{$value.TempName}}</td>
                            <td>{{$value.Phone}}</td>
                            <td>{{$value.ExamTypeN}}</td>
                            <td>{{$value.TotalHourN}}</td>
                            <td class="red">{{$value.IsFile==false?"未签约":"签约"}}</td>
                            <td>{{$value.EditTimeStr}}</td>
                            <td>{{$value.CounselorName}}</td>
							<td> <a href="/OrgZiXun/ZiXunGuanLi/SignUp?Id={{$value.TempID}}" class="operate-btn look con">报名签约</a></td>
							<td><span class="operate-btn look mask"  data-id="{{$value.TempID}}">备注</span></td>
                            <td><span class="operate-btn look show"  data-id="{{$value.TempID}}">查看</span></td>
                        </tr>
{{/each}}


