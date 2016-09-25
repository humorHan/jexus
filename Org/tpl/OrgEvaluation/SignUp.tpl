
{{each}}
 <div class="mb20">
                                <input type="checkbox" id="{{$value.BalanceId}}">
                                <span class="mr10">剩余<i class="red normal">{{$value.LeftNumber}}</i>个学生账号</span>
                                <span>剩余时间<i class="red normal">{{$value.Expday}}</i>天</span>
                            </div>

	{{/each}}