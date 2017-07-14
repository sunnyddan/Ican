function getdata(){
	var mydata;
	var arry;
	$.ajax({
	    type:"GET",
	    url:"",
	    async:false,
	    success:datainsertion,
	    error: erryFunction(){
	    	console.log('获取数据失败');
	    }
	 });
	function datainsertion (data) {
		mydata=data.parse();
		arry[0]=mydata.ui_name;
		arry[1]=mydata.sex;
		arry[2]=mydata.birthday;
		arry[3]=mydata.address;
		arry[4]=mydata.edu;
	}
	return arry;
}

//个人基本信息
function personal(){
	var posdata = ['最高学历:','所在城市:']
	var mydata = getdata();
	mydata.each(function(index){
		if(index<3){
			$('#baic_info span').eq(index).html(mydata[index]);
		}else{
			if (mydata[index] !='') {
				$('#papers_show li').eq(index-3).html('<span>'+posdata[index-3]+'</span><p>'+mydata[index]+'</p>');
			};
		}
	});
}
personal();



//工作内容
function getdata_work(){
	var mydata;
	var arry;
	$.ajax({
	    type:"GET",
	    url:"",
	    async:false,
	    success:datainsertion,
	    error: erryFunction(){
	    	console.log('获取数据失败');
	    }
	 });
	function datainsertion (data) {
		mydata=data.parse();
		arry[0]=mydata.company_name;
		arry[1]=mydata.position;
		arry[2]=mydata.startTime;
		arry[3]=mydata.endTime;
		arry[4]=mydata.content;
	}
	return arry;
}
function work(){
	var posdata = ['公司名称：','职位:','入职时间：','离职时间：','工作内容：']
	var mydata = getdata_work();
	mydata.each(function(index){
		if (mydata[index] !='') {
			$('#papers_show li').eq(index).html('<span>'+posdata[index]+'</span><p>'+mydata[index]+'</p>');
		};
	});
}
work();

//教育信息
function getdata_edu(){
	var mydata;
	var arry;
	$.ajax({
	    type:"GET",
	    url:"",
	    async:false,
	    success:datainsertion,
	    error: erryFunction(){
	    	console.log('获取数据失败');
	    }
	 });
	function datainsertion (data) {
		mydata=data.parse();
		arry[0]=mydata.school;
		arry[1]=mydata.profession;
		arry[2]=mydata.edu_bg;
		arry[3]=mydata.graduate;
	}
	return arry;
}

function eduwork(){
	var posdata = ['学校：','专业:','本科/专科:','毕业时间:']
	var mydata = getdata_edu();//传数据
	mydata.each(function(index){
		if (mydata[index] !='') {
			$('#eduction_show li').eq(index).html('<span>'+posdata[index]+'</span><p>'+mydata[index]+'</p>');
		};
	});
}
eduwork();

//期望工作
function getdata_workexpction(){
	var mydata;
	var arry;
	$.ajax({
	    type:"GET",
	    url:"",
	    async:false,
	    success:datainsertion,
	    error: erryFunction(){
	    	console.log('获取数据失败');
	    }
	 });
	function datainsertion (data) {
		mydata=data.parse();
		arry[0]=mydata.company_name;
		arry[1]=mydata.peoperty;
		arry[2]=mydata.expect_city;
		arry[3]=mydata.expect_salary;
		arry[4]=mydata.illustrate;
	}
	return arry;
}

function expect_work(){
	var posdata = ['求职方向：','工作性质：','期望城市：','期望薪水：','补充说明：']
	var mydata = getdata_workexpction();
	mydata.each(function(index){
		if (mydata[index] !='') {
			$('#expect_work li').eq(index).html('<span>'+posdata[index]+'</span><p>'+mydata[index]+'</p>');
		};
	});
}
expect_work();

//项目经验
function getdata_workrp(){
	var mydata;
	var arry;
	$.ajax({
	    type:"GET",
	    url:"",
	    async:false,
	    success:datainsertion,
	    error: erryFunction(){
	    	console.log('获取数据失败');
	    }
	 });
	function datainsertion (data) {
		mydata=data.parse();
		arry[0]=mydata.rp_name;
		arry[1]=mydata.responsibility;
		arry[2]=mydata.expect_city;
		arry[3]=mydata.expect_salary;
		arry[4]=mydata.description;
	}
	return arry;
}

function rp_work(){
	var posdata = ['项目名称：','职责：','项目开始时间：','项目结束时间：','项目描述：']
	var mydata = getdata_workrp();
	mydata.each(function(index){
		if (mydata[index] !='') {
			$('#project_show li').eq(index).html('<span>'+posdata[index]+'</span><p>'+mydata[index]+'</p>');
		};
	});
}
rp_work();


//文件
function getdata_file(){
	var mydata;
	$.ajax({
	    type:"GET",
	    url:"",
	    async:false,
	    success:datainsertion,
	    error: erryFunction(){
	    	console.log('获取数据失败');
	    }
	 });
	function datainsertion (data) {
		mydata=data.parse();
		mydata.file;
		$('#files_show p a').eq(0).html(mydata.file);//文件名；
		$('#files_show p a').eq(0).attr('href',mydata.url);//文件地址
	}
	return arry;
}
getdata_file();
