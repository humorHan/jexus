{{each StuLessonList}}
<tr lessonClassId="{{$value.UserClassStudyId}}">
	<td>{{$value.ClassTypeDesc}}</td>
	<td>{{$value.BigGradeDesc}}</td>
	<td>{{$value.SubjectDesc}}</td>
	<td>{{$value.ClassName}}</td>
	<td>{{$value.SurplusClassHour}}</td>
	<td>
	    <i class="dustbin" name="btnDeleteLesson" lessonId="{{$value.UserClassStudyId}}" courseId="{{$value.CourseID}}" classId="{{$value.ClassId}}" classType="{{$value.ClassType}}" bigGrade="{{$value.BigGrade}}" subjectId="{{$value.SubjectId}}" smallGrade="{{$value.GradeId}}"></i>
	</td>
</tr>
{{/each}}