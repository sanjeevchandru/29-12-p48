document.write("7. to find out if 1st January will be a Sunday between 2014 and 2050"+"<br>");

    for(let i=2014;i<=2050;i++){
        var d=new Date(i,0,1);
        if(d.getDay()==0){
            document.write("1st January is being a Sunday  "+i+"<br><br>");
        }
    }