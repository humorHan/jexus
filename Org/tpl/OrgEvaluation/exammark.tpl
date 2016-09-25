<div id="addmark">
  {{each}}
  <div class="overflow addiv" id="div{{$value.MarkID}}">
    <p>
      {{$value.Remark}}
    </p>
    <span class="font12 right">
      {{$value.CreateTime | dateFormat: "yyyy-MM-dd"}} <i class="delete-icon ml10 delete" id="{{$value.MarkID}}"></i>
    </span>
  </div>
  {{/each}}
</div>

<div class="input-box">
  <textarea placeholder="请输入内容" class="mt10" maxlength="30" id="masktext"></textarea>
  <span class="count-num" id="wordLength">
    <i class="red normal">0</i>/30
  </span>
</div>
<div class="center mb5 hidden" id="addtip">

</div>
<div class="handle font14 auto mt20">
  <span class="submit"  id="markSave">确定</span>
</div>


