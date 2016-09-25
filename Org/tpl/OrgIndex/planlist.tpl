
{{each}}
<tr class="font12">
    <td>{{$value.f_titlename}}</td>
    <td>{{$value.f_createby}}</td>
    <td>{{$value.f_readnumber}}</td>
    <td>{{$value.f_applyrange}}</td>  
    <td>{{$value.f_lastupdatetime | dateFormat: "yyyy/MM/dd"}}</td>

    
</tr>
{{/each}}
