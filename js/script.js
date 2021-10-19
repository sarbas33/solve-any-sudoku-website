function correctness(table, row, col, k) {
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (table[row][i] == k || table[i][col] == k || table[m][n] == k) {
        return false;
      }
  }
  return true;
}


function sudokuSolver(data) {
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (data[i][j] == '.') {
      for (let k = 1; k <= 9; k++) {
        if (correctness(data, i, j, k)) {
          data[i][j] = `${k}`;
        if (sudokuSolver(data)) {
         return true;
        } else {
         data[i][j] = '.';
        }
       }
     }
     return false;
   }
 }
}
return true;
}

function submitted(){
  var a=document.getElementById('c-0').value;
  var b=document.getElementById('c-1').value;
  var c=document.getElementById('c-2').value;
  var d=document.getElementById('c-3').value;
  var e=document.getElementById('c-4').value;
  var f=document.getElementById('c-5').value;
  var g=document.getElementById('c-6').value;
  var h=document.getElementById('c-7').value;
  var i=document.getElementById('c-8').value;
  
  var aa=document.getElementById('c-9').value;
  var bb=document.getElementById('c-10').value;
  var cc=document.getElementById('c-11').value;
  var dd=document.getElementById('c-12').value;
  var ee=document.getElementById('c-13').value;
  var ff=document.getElementById('c-14').value;
  var gg=document.getElementById('c-15').value;
  var hh=document.getElementById('c-16').value;
  var ii=document.getElementById('c-17').value;


  var aaa=document.getElementById('c-18').value;
  var bbb=document.getElementById('c-19').value;
  var ccc=document.getElementById('c-20').value;
  var ddd=document.getElementById('c-21').value;
  var eee=document.getElementById('c-22').value;
  var fff=document.getElementById('c-23').value;
  var ggg=document.getElementById('c-24').value;
  var hhh=document.getElementById('c-25').value;
  var iii=document.getElementById('c-26').value;
  
  var ab=document.getElementById('c-27').value;
  var ac=document.getElementById('c-28').value;
  var ad=document.getElementById('c-29').value;
  var ae=document.getElementById('c-30').value;
  var af=document.getElementById('c-31').value;
  var ag=document.getElementById('c-32').value;
  var ah=document.getElementById('c-33').value;
  var ai=document.getElementById('c-34').value;
  var aj=document.getElementById('c-35').value;

  var ba=document.getElementById('c-36').value;
  var bc=document.getElementById('c-37').value;
  var bd=document.getElementById('c-38').value;
  var be=document.getElementById('c-39').value;
  var bf=document.getElementById('c-40').value;
  var bg=document.getElementById('c-41').value;
  var bh=document.getElementById('c-42').value;
  var bi=document.getElementById('c-43').value;
  var bj=document.getElementById('c-44').value;

  var ca=document.getElementById('c-45').value;
  var cb=document.getElementById('c-46').value;
  var cd=document.getElementById('c-47').value;
  var ce=document.getElementById('c-48').value;
  var cf=document.getElementById('c-49').value;
  var cg=document.getElementById('c-50').value;
  var ch=document.getElementById('c-51').value;
  var ci=document.getElementById('c-52').value;
  var cj=document.getElementById('c-53').value;

  var da=document.getElementById('c-54').value;
  var db=document.getElementById('c-55').value;
  var dc=document.getElementById('c-56').value;
  var de=document.getElementById('c-57').value;
  var df=document.getElementById('c-58').value;
  var dg=document.getElementById('c-59').value;
  var dh=document.getElementById('c-60').value;
  var di=document.getElementById('c-61').value;
  var dj=document.getElementById('c-62').value;

  var ea=document.getElementById('c-63').value;
  var eb=document.getElementById('c-64').value;
  var ec=document.getElementById('c-65').value;
  var ed=document.getElementById('c-66').value;
  var ef=document.getElementById('c-67').value;
  var eg=document.getElementById('c-68').value;
  var eh=document.getElementById('c-69').value;
  var ei=document.getElementById('c-70').value;
  var ej=document.getElementById('c-71').value;

  var fa=document.getElementById('c-72').value;
  var fb=document.getElementById('c-73').value;
  var fc=document.getElementById('c-74').value;
  var fd=document.getElementById('c-75').value;
  var fe=document.getElementById('c-76').value;
  var fg=document.getElementById('c-77').value;
  var fh=document.getElementById('c-78').value;
  var fi=document.getElementById('c-79').value;
  var fj=document.getElementById('c-80').value;
 
 var grid=[[a,b,c,d,e,f,g,h,i],[aa,bb,cc,dd,ee,ff,gg,hh,ii],[aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii],[ab,ac,ad,ae,af,ag,ah,ai,aj],[ba,bc,bd,be,bf,bg,bh,bi,bj],[ca,cb,cd,ce,cf,cg,ch,ci,cj],[da,db,dc,de,df,dg,dh,di,dj],[ea,eb,ec,ed,ef,eg,eh,ei,ej],[fa,fb,fc,fd,fe,fg,fh,fi,fj]]
 sudokuSolver(grid);
 
 console.log(grid);

 document.getElementById('c-0').value=grid[0][0];
 document.getElementById('c-1').value=grid[0][1];
 document.getElementById('c-2').value=grid[0][2];
 document.getElementById('c-3').value=grid[0][3];
 document.getElementById('c-4').value=grid[0][4];
 document.getElementById('c-5').value=grid[0][5];
 document.getElementById('c-6').value=grid[0][6];
 document.getElementById('c-7').value=grid[0][7];
 document.getElementById('c-8').value=grid[0][8];

 document.getElementById('c-9').value=grid[1][0];
 document.getElementById('c-10').value=grid[1][1];
 document.getElementById('c-11').value=grid[1][2];
 document.getElementById('c-12').value=grid[1][3];
 document.getElementById('c-13').value=grid[1][4];
 document.getElementById('c-14').value=grid[1][5];
 document.getElementById('c-15').value=grid[1][6];
 document.getElementById('c-16').value=grid[1][7];
 document.getElementById('c-17').value=grid[1][8];

 document.getElementById('c-18').value=grid[2][0];
 document.getElementById('c-19').value=grid[2][1];
 document.getElementById('c-20').value=grid[2][2];
 document.getElementById('c-21').value=grid[2][3];
 document.getElementById('c-22').value=grid[2][4];
 document.getElementById('c-23').value=grid[2][5];
 document.getElementById('c-24').value=grid[2][6];
 document.getElementById('c-25').value=grid[2][7];
 document.getElementById('c-26').value=grid[2][8];

 document.getElementById('c-27').value=grid[3][0];
 document.getElementById('c-28').value=grid[3][1];
 document.getElementById('c-29').value=grid[3][2];
 document.getElementById('c-30').value=grid[3][3];
 document.getElementById('c-31').value=grid[3][4];
 document.getElementById('c-32').value=grid[3][5];
 document.getElementById('c-33').value=grid[3][6];
 document.getElementById('c-34').value=grid[3][7];
 document.getElementById('c-35').value=grid[3][8];

 document.getElementById('c-36').value=grid[4][0];
 document.getElementById('c-37').value=grid[4][1];
 document.getElementById('c-38').value=grid[4][2];
 document.getElementById('c-39').value=grid[4][3];
 document.getElementById('c-40').value=grid[4][4];
 document.getElementById('c-41').value=grid[4][5];
 document.getElementById('c-42').value=grid[4][6];
 document.getElementById('c-43').value=grid[4][7];
 document.getElementById('c-44').value=grid[4][8];

 document.getElementById('c-45').value=grid[5][0];
 document.getElementById('c-46').value=grid[5][1];
 document.getElementById('c-47').value=grid[5][2];
 document.getElementById('c-48').value=grid[5][3];
 document.getElementById('c-49').value=grid[5][4];
 document.getElementById('c-50').value=grid[5][5];
 document.getElementById('c-51').value=grid[5][6];
 document.getElementById('c-52').value=grid[5][7];
 document.getElementById('c-53').value=grid[5][8];

 document.getElementById('c-54').value=grid[6][0];
 document.getElementById('c-55').value=grid[6][1];
 document.getElementById('c-56').value=grid[6][2];
 document.getElementById('c-57').value=grid[6][3];
 document.getElementById('c-58').value=grid[6][4];
 document.getElementById('c-59').value=grid[6][5];
 document.getElementById('c-60').value=grid[6][6];
 document.getElementById('c-61').value=grid[6][7];
 document.getElementById('c-62').value=grid[6][8];

 document.getElementById('c-63').value=grid[7][0];
 document.getElementById('c-64').value=grid[7][1];
 document.getElementById('c-65').value=grid[7][2];
 document.getElementById('c-66').value=grid[7][3];
 document.getElementById('c-67').value=grid[7][4];
 document.getElementById('c-68').value=grid[7][5];
 document.getElementById('c-69').value=grid[7][6];
 document.getElementById('c-70').value=grid[7][7];
 document.getElementById('c-71').value=grid[7][8];

 document.getElementById('c-72').value=grid[8][0];
 document.getElementById('c-73').value=grid[8][1];
 document.getElementById('c-74').value=grid[8][2];
 document.getElementById('c-75').value=grid[8][3];
 document.getElementById('c-76').value=grid[8][4];
 document.getElementById('c-77').value=grid[8][5];
 document.getElementById('c-78').value=grid[8][6];
 document.getElementById('c-79').value=grid[8][7];
 document.getElementById('c-80').value=grid[8][8];
}

function clearer(){

  var grid=[['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.']]
  console.log(grid);
  document.getElementById('c-0').value=grid[0][0];
  document.getElementById('c-1').value=grid[0][1];
  document.getElementById('c-2').value=grid[0][2];
  document.getElementById('c-3').value=grid[0][3];
  document.getElementById('c-4').value=grid[0][4];
  document.getElementById('c-5').value=grid[0][5];
  document.getElementById('c-6').value=grid[0][6];
  document.getElementById('c-7').value=grid[0][7];
  document.getElementById('c-8').value=grid[0][8];
  
  document.getElementById('c-9').value=grid[1][0];
  document.getElementById('c-10').value=grid[1][1];
  document.getElementById('c-11').value=grid[1][2];
  document.getElementById('c-12').value=grid[1][3];
  document.getElementById('c-13').value=grid[1][4];
  document.getElementById('c-14').value=grid[1][5];
  document.getElementById('c-15').value=grid[1][6];
  document.getElementById('c-16').value=grid[1][7];
  document.getElementById('c-17').value=grid[1][8];
  
  document.getElementById('c-18').value=grid[2][0];
  document.getElementById('c-19').value=grid[2][1];
  document.getElementById('c-20').value=grid[2][2];
  document.getElementById('c-21').value=grid[2][3];
  document.getElementById('c-22').value=grid[2][4];
  document.getElementById('c-23').value=grid[2][5];
  document.getElementById('c-24').value=grid[2][6];
  document.getElementById('c-25').value=grid[2][7];
  document.getElementById('c-26').value=grid[2][8];
  
  document.getElementById('c-27').value=grid[3][0];
  document.getElementById('c-28').value=grid[3][1];
  document.getElementById('c-29').value=grid[3][2];
  document.getElementById('c-30').value=grid[3][3];
  document.getElementById('c-31').value=grid[3][4];
  document.getElementById('c-32').value=grid[3][5];
  document.getElementById('c-33').value=grid[3][6];
  document.getElementById('c-34').value=grid[3][7];
  document.getElementById('c-35').value=grid[3][8];
  
  document.getElementById('c-36').value=grid[4][0];
  document.getElementById('c-37').value=grid[4][1];
  document.getElementById('c-38').value=grid[4][2];
  document.getElementById('c-39').value=grid[4][3];
  document.getElementById('c-40').value=grid[4][4];
  document.getElementById('c-41').value=grid[4][5];
  document.getElementById('c-42').value=grid[4][6];
  document.getElementById('c-43').value=grid[4][7];
  document.getElementById('c-44').value=grid[4][8];
  
  document.getElementById('c-45').value=grid[5][0];
  document.getElementById('c-46').value=grid[5][1];
  document.getElementById('c-47').value=grid[5][2];
  document.getElementById('c-48').value=grid[5][3];
  document.getElementById('c-49').value=grid[5][4];
  document.getElementById('c-50').value=grid[5][5];
  document.getElementById('c-51').value=grid[5][6];
  document.getElementById('c-52').value=grid[5][7];
  document.getElementById('c-53').value=grid[5][8];
  
  document.getElementById('c-54').value=grid[6][0];
  document.getElementById('c-55').value=grid[6][1];
  document.getElementById('c-56').value=grid[6][2];
  document.getElementById('c-57').value=grid[6][3];
  document.getElementById('c-58').value=grid[6][4];
  document.getElementById('c-59').value=grid[6][5];
  document.getElementById('c-60').value=grid[6][6];
  document.getElementById('c-61').value=grid[6][7];
  document.getElementById('c-62').value=grid[6][8];
  
  document.getElementById('c-63').value=grid[7][0];
  document.getElementById('c-64').value=grid[7][1];
  document.getElementById('c-65').value=grid[7][2];
  document.getElementById('c-66').value=grid[7][3];
  document.getElementById('c-67').value=grid[7][4];
  document.getElementById('c-68').value=grid[7][5];
  document.getElementById('c-69').value=grid[7][6];
  document.getElementById('c-70').value=grid[7][7];
  document.getElementById('c-71').value=grid[7][8];
  
  document.getElementById('c-72').value=grid[8][0];
  document.getElementById('c-73').value=grid[8][1];
  document.getElementById('c-74').value=grid[8][2];
  document.getElementById('c-75').value=grid[8][3];
  document.getElementById('c-76').value=grid[8][4];
  document.getElementById('c-77').value=grid[8][5];
  document.getElementById('c-78').value=grid[8][6];
  document.getElementById('c-79').value=grid[8][7];
  document.getElementById('c-80').value=grid[8][8];
  }


