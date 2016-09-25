 {{each Data}}
  <div class="test_outer">
                    <div class="ml40 mt20 contentdiv">
                        <div class="wrongPosition">
                            <span class="wrongspan hiddened" data-qid="{{$value.Qid}}">纠错</span>
                        </div>
                        <p class="content">
                            {{#$value.Body}}
                        </p>
                    </div>
                    <ul class="process_dif">
                        <li>[难度：<span>{{$value.DifficultyDesc}}</span>]</li>
                        <li>组卷：&nbsp;<span class="active">{{$value.CombinaNnum}}</span>&nbsp;次</li>
                        <li style="float:right" class="mr20">
                            <span class="addto_basket"></span>
                            <span class="middle mr20" data-qid="{{$value.Qid}}">加入试题蓝</span>
                            <span class="collection"></span>
                            <span class="middle" data-qid="{{$value.Qid}}">收藏试题</span>
                        </li>
                    </ul>
                    <div class="analy ml40">
                        <p class="analy_p">
                            <span class="analy_title">解析：</span>
                            第三只小猫 试题分析：根据最短路线的知识可知，两点间的线中直线是最短的，所以找出直的线即可。 解：根据分析可知第三条线
                        </p>
                    </div>
                </div>
                
				{{/each}}
