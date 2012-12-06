function showItems(e) {  
    Ti.API.info(e.rowData.itemName);
}

var rowData=[];
for(var i=1;i<=10;i++){
	var payload={
		rowId:i,
		itemName:'Test' + i
	}
	var row=Alloy.createController('row',payload).getView();
	rowData.push(row);
}
$.itemsList.data=rowData;


$.win.open();
