let Add=[];
let item={
    ProductName:"Tomato",
    Count:6,
    priceB:5000,
    PriceA:3000,
    Total:18000,
}
let Index=1;
function AddItem(Productname,count,priceb,Pricea,total){
        console.log("work");
        const TableName=document.getElementById("factor");
        var newRow=TableName.insertRow();
        var RowNumber=newRow.insertCell(0);
        var ProductName=newRow.insertCell(1);
        var Count=newRow.insertCell(2);
        var priceB=newRow.insertCell(3);
        var PriceA=newRow.insertCell(4);
        var Total=newRow.insertCell(5);
        RowNumber.innerHTML = Index;
        ProductName.innerHTML =Productname;
        Count.innerHTML=count;
        priceB.innerHTML=priceb;
        PriceA.innerHTML=Pricea;
        Total.innerHTML=total;
        Index+=1;
}
const Btn=document.getElementById("Add");
Btn.addEventListener("click", () => AddItem(item.ProductName,item.Count,item.priceB,item.PriceA,item.Total));
