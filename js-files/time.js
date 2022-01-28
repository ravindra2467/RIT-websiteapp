function gettime(){
	var hour=new Date().getHours();
	var min=new Date().getMinutes();
	var sec=new Date().getSeconds();

	if(min < 10)
	{
		min = "0" + min;
	}
	if(sec < 10)
	{
		sec = "0" + sec;
	}
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if (hour >= 12)
	{
		period = "PM";
	}
	else
	{
		period = "AM";
	}

	document.form.clock.value= hour+": "+min+": "+sec+" "+period;
	setTimeout("gettime()",100);
}