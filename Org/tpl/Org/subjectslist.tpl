{{each ListModel}}
<li class="subject-item" subjectId="{{$value.SubjectId}}" bigGrade="{{$value.BigGrade}}">
	<label>
		<input class="middle" type="checkbox" subjectId="{{$value.SubjectId}}" bigGrade="{{$value.BigGrade}}"/>{{$value.SubjectDesc}}
	</label>
</li>
{{/each}}