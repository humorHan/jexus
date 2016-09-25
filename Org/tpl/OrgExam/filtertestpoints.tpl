 ﻿{{each P as P1 i}}
  {{if P1.PPointName==null }}
   <dl class="mt20">
   <dt class="on_open click">{{P1.PointName}}</dt>
      <div class="second_tree">
   {{each P}} 
     {{if P1.PointName == $value.PPointName}}
 	    
 		  {{ if ($index)==1 }}
 		 <dd class="clickTree" data-did="{{$value.ExamKnowID}}" data-id="{{$value.PointID}}" data-secid="{{$value.SecID}}">{{$value.PointName}}</dd>
 		 {{else}}
 		  <dd data-did="{{$value.ExamKnowID}}" data-id="{{$value.PointID}}" data-secid="{{$value.SecID}}">{{$value.PointName}}</dd>
 		 {{/if}}
 		
 	{{/if}}  
   {{/each}}
    </div>
   </dl>
 {{/if}}
{{/each}}