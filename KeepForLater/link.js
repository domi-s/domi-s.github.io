var kfl=document.createElement('textarea');var sth=document.createElement('div');sthh=document.createElement('div');sthh.setAttribute('id','sthh');sthtitle=document.createElement('p');sthtitle.setAttribute('id', 'sthtitle');var st=document.createElement('style');var tn=document.createTextNode('#kflholder{position:relative;z-index:999999999999999999999999;box-shadow:1px 1px 5px rgba(0, 0, 0, .5);padding:5px;padding-top:7px;border-radius:5px;display:inline-block;cursor:move;transition:.2s ease;opacity:.9;background:white;}#kflholder:hover{opacity:1;}#keepforlater{width:250px;height:100px;min-height:20px;resize:none;outline:none;border:none;cursor:text;background:white;}#sthtitle{color:gray;font-family:sans-serif;user-select:none;margin:0;}dotholder{display:inline-block;float:right;}dot{background:red;display:inline-block;width:10px;height:10px;border-radius:100vw;position:relative;top:1px;right:5px;opacity:.9;cursor:pointer;margin:0 2px;}#sthh{position:fixed;right:15px;top:15px;z-index:999999999999999999999999;}');st.appendChild(tn);document.body.appendChild(sthh);sthh.appendChild(sth);sth.appendChild(sthtitle);sthtitle.innerHTML="📄 <span id='sthtitleh'>Keep For Later</span><dotholder><a href='http://github.com/domi-s' target='_blank'><dot style='background:#31BF1D;' title='Go to developer'></dot></a><dot onclick='var ppa=this.parentElement.parentElement.parentElement;ppa.style.opacity=0;setTimeout(function(){ppa.remove();},200);' title='Close Tab'></dot></dotholder>";sth.appendChild(kfl);document.body.appendChild(st);kfl.value=localStorage.getItem('n--note');kfl.setAttribute('placeholder','Start typing. Later on, you can view your note and make changes.');kfl.setAttribute('id', 'keepforlater');kfl.setAttribute('name','keepforlater');sth.setAttribute('id','kflholder');kfl.addEventListener('keyup',function(){localStorage.setItem('n--note',kfl.value);});kfl.addEventListener('onchange',function(){localStorage.setItem('n--note',kfl.value);});var jqa=document.createElement('script'),jqb=document.createElement('script');jqa.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.js');jqb.setAttribute('src','https://code.jquery.com/ui/1.12.1/jquery-ui.js');document.head.appendChild(jqa);document.head.appendChild(jqb);setTimeout(function(){$('#kflholder').draggable({cancel:'keepforlater',start:function(){$('#keepforlater').focus();},stop:function(){$('#keepforlater').focus();}});},1000);setInterval(sthtitleupd,60000);sthtitleupd();function sthtitleupd(){document.getElementById('sthtitleh').innerHTML='Made by @domi-s';setTimeout(function(){document.getElementById('sthtitleh').innerHTML='Keep For Later';},2000);}