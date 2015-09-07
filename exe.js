for (var i = 2; i <= 300; i++) {
	var id1 = "MyDataGrid__ctl" + i + "_cp1_2";
	var id2 = "MyDataGrid__ctl" + i + "_cp2_2";
	var id3 = "MyDataGrid__ctl" + i + "_cp3_2";
	var id4 = "MyDataGrid__ctl" + i + "_cp4_2";
	var id5 = "MyDataGrid__ctl" + i + "_cp5_2";
	var id6 = "MyDataGrid__ctl" + i + "_cp6_2";
	var m1 = document.getElementById(id1);
	if(m1){
	m1.value = 6;
	document.getElementById(id2).value = 6;
	document.getElementById(id3).value = 6;
	document.getElementById(id4).value = 6;
	document.getElementById(id5).value = 6;
	document.getElementById(id6).value = 5;
	}
}