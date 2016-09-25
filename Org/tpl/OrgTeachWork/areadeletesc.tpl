
{{each Data}}
 <span class="schname" id="s{{$value.SchoolId}}">
                                <i class="schlogo"></i>
                                <em class="normal">{{$value.SchoolName.substring(0, 6)}}</em>
                                <i class="deletesch" id="{{$value.SchoolId}}"></i>
                            </span>
{{/each}}
