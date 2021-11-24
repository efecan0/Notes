const fs = require('fs');
const chalk = require('chalk');
const NOTES_FILE_NAME = './notes.json';

const getNotes = () =>{
  try {
    const notes = fs.readFileSync(NOTES_FILE_NAME).toString();
    return JSON.parse(notes);
  } catch (e) {
    return [];
  }

}

//not ekleme fonksiyonu
const addNote = (title,body) => {

let flag = true;

  //önceki kayıtlı notları çek

const notes = getNotes();


flag = checkNotes(notes,title);

  //{title, body} yeni notlara ekleme
notes.push({
  title: title,
  body: body
});

  //yeni diziyi kayit etme
  if(flag) {saveNotes(notes);}
  console.log(notes)
}

const saveNotes = (notes) =>{
const notesJson = JSON.stringify(notes)
fs.writeFileSync(NOTES_FILE_NAME, notesJson);

}

//aynı title varsa kaydetmeme

const checkNotes = (notes,title) =>{
  let flag = true;
for (var i = 0; i < notes.length; i++) {

if(notes[i].title===title){
  console.log(chalk.red.inverse("üzgünüz böyle bir title var"));
  flag=false;
}
}
return flag;
}

//remove Note

const removeNote = (title) => {

const notes = getNotes();

for (var i = 0; i < notes.length; i++) {
  if(notes[i].title === title){
    console.log(chalk.green("silinme işlemi başarıyla gerçekleşiyor..."))
    notes.splice(i, 1);
  }
}
const notesJson = JSON.stringify(notes)

fs.writeFileSync(NOTES_FILE_NAME, notesJson);


}



module.exports = {
  getNotes,
  addNote,
  removeNote
}
