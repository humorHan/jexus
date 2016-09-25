 
 {{each}}
  {{if $value.StrDefault==0}}
 <span class="level-name " id="{{$value.DimID}}" data-is="{{$value.StrDefault}}">{{$value.DimName}}</span>
 {{else}}
  <span class="level-on" id="{{$value.DimID}}" data-is="{{$value.StrDefault}}">{{$value.DimName}}</span>
   </div>
{{/if}}

 {{/each}}
