code="AAAAAAabc123";
url="http://gamf.nhely.hu/ajax1/";
async function read() {
  document.getElementById("code").innerHTML="code="+code;
  let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code="+code+"&op=read"
  });
  let data = await response.text();
  data = JSON.parse(data);
  let list = data.list;
  str="<H1>Táblázat</H1>";
  idnev="tablazat";
  str+="<p>Táblázat sorai: "+data.rowCount+"</p>";
  //str+="<p>Last max "+data.maxNum+" records:</p>";
  str+="<table class="+idnev+"><tr><th>id</th><th>name</th><th>city</th><th>phone</th><th>code</th></tr>";
  for(let i=0; i<list.length; i++)
    str += "<tr><td>"+list[i].id+"</td><td>"+list[i].name+"</td><td>"+list[i].city+"</td><td>"+list[i].phone+"</td><td>"+list[i].code+"</td></tr>";
  str +="</table>";
  document.getElementById("readDiv").innerHTML=str;
}

async function create(){
  nameStr = document.getElementById("name1").value;
  city = document.getElementById("city1").value;
  phone = document.getElementById("phone1").value;
  if(nameStr.length>0 && nameStr.length<=30 && city.length>0 && city.length<=30 && phone.length>0 && phone.length<=30 && code.length<=30){
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code="+code+"&op=create&name="+nameStr+"&city="+city+"&phone="+phone
    });
    let data = await response.text(); 
    if(data>0)
      str="Sikeresen létrehozva!";
    else
    str="Létrehozás sikertelen!";
    document.getElementById("createResult").innerHTML=str;
    document.getElementById("name1").value="";
    document.getElementById("city1").value="";
    document.getElementById("phone1").value="";
    read();
  }
  else
    document.getElementById("createResult").innerHTML="Validation error!!";
}

async function getDataForId() {
  let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code="+code+"&op=read"
  });
  let data = await response.text();
  data = JSON.parse(data);
  let list = data.list;
  for(let i=0; i<list.length; i++)
    if(list[i].id==document.getElementById("idUpd").value){
      document.getElementById("name2").value=list[i].name;
      document.getElementById("city2").value=list[i].city;
      document.getElementById("phone2").value=list[i].phone;
    }
}

async function update(){
  id = document.getElementById("idUpd").value;
  nameStr = document.getElementById("name2").value;
  city = document.getElementById("city2").value;
  phone = document.getElementById("phone2").value;
  if(id.length>0 && id.length<=30 && nameStr.length>0 && nameStr.length<=30 && city.length>0 && city.length<=30 && phone.length>0 && phone.length<=30 && code.length<=30){
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code="+code+"&op=update&id="+id+"&name="+nameStr+"&city="+city+"&phone="+phone
    });
    let data = await response.text(); 
    if(data>0)
      str="Sikeres frissítés!";
    else
    str="Sikertelen frissítés!";
    document.getElementById("updateResult").innerHTML=str;
    document.getElementById("idUpd").value="";
    document.getElementById("name2").value="";
    document.getElementById("city2").value="";
    document.getElementById("phone2").value="";
    read();
  }
  else
    document.getElementById("updateResult").innerHTML="Validation error!!";
}

async function deleteF(){
  id = document.getElementById("idDel").value;
  if(id.length>0 && id.length<=30){
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code="+code+"&op=delete&id="+id
    });
    let data = await response.text(); 
    if(data>0)
      str="Sikeres törlés!";
    else
    str="Sikertelen törlés!";
    document.getElementById("deleteResult").innerHTML=str;
    document.getElementById("idDel").value="";
    read();
  }
  else
    document.getElementById("deleteResult").innerHTML="Validation error!!";
}

window.onload = function() {
    read();
};