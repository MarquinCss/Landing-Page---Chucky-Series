 //Efeito de digitação
 const words = ['come back. ', 'damballa. '];
 let index = 0;
 const paragraph = document.getElementById('typing');
 const staticText = " I aways " ;
 const textColor = "white"; 
 
 function typeWord() {
   const word = words[index];
   let i = 0;
 
   function type() {
     if (i < word.length) {
       paragraph.innerHTML = staticText + `<span style="color:${textColor}">${word.substring(0, i)}</span>|`;
       i++;
       setTimeout(type, 100);
     } else {
       setTimeout(eraseWord, 9000);
     }
   }
 
   type();
 }
 
 function eraseWord() {
   let i = words[index].length;
 
   function erase() {
     if (i >= 0) {
       paragraph.innerHTML = staticText + `<span style="color:${textColor}">${words[index].substring(0, i)}</span>|`;
       i--;
       setTimeout(erase, 200);
     } else {
       index = (index + 1) % words.length;
       setTimeout(typeWord, 1000);
     }
   }
 
   erase();
 }
 
 typeWord();
 
     