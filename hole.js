<script type="text/javascript">
	//修改easyui的日期框的显示格式
	$.fn.datebox.defaults.formatter = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return y+'/'+m+'/'+d;
	}
</script>