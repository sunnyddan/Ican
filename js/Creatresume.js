 // 日期插件
function dataF(id){
	$(id).datetimepicker({
	    format: "yyyy-mm-dd",
	    language: 'cn',
	    autoclose: true,     
	    todayBtn: true,
	    minView:'month'
	});
}
dataF('#brithday');
dataF('#entry_time');
dataF('#exit_time');
dataF('#graduate_time');
dataF('#start_time');
dataF('#end_time');

// 各个编辑事件
//计数变量
 var personal_sum =0;
 var work_sum=0;
 var eduction_sum = 0;
 var expect_work_sum = 0;
 var project_sum =0;
 //基本信息
$('#paper_editor').hide();
$('#exeprience_editpr').hide();
$('#eduction_editor').hide();
$('#expect_work_editor').hide();
$('#project_editor').hide();
 function baciClick(id,class1,class2,sum ){
 	$(id).click(function(){
 		sum++;
	 	if((sum % 2)==1){
	 		$(id).attr('src','../images/hide.png');
	 		$(class1).hide();
	 		$(class2).show();
	 	}else{
	 		$(id).attr('src','../images/bianji.jpg');
	 		$(class2).hide();
	 		$(class1).show();
	 	}
	 });
 }
baciClick('#baci-click1','#papers-show','#paper_editor', personal_sum);
baciClick('#baci-click2','#workexeprience' ,'#exeprience_editpr',work_sum);
baciClick('#baci-click3', '#eduction_show','#eduction_editor',eduction_sum);
baciClick('#baci-click4','#expect_work',"#expect_work_editor",expect_work_sum);
baciClick('#baci-click5', '#project_show','#project_editor',project_sum);
 $('#user_img').height( $('#user_img').width());