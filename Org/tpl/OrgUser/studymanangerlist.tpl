{{each StudyManagerListModel}}
<li>
	<label>
		<input class="mr5 middle" type="radio" name="department-item" managerId="{{$value.SManagerID}}">
		<span>{{$value.SManagerName}}</span>
		<span>
			(<i class="red">{{$value.StudentCount}}</i>名学生)
		</span>
	</label>
</li>
{{/each}}
