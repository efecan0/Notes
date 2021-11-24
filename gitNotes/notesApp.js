// console.log(process.argv[2])
//
// const komut = process.argv[2]
//
// if(komut === "add"){
//   console.log('not Ekle')
// }else if(komut==='remove'){
//   console.log('notu çıkar')
// }

const yargs = require('yargs');
const notesService = require('./notes.js')

//yargs version guncelleme
yargs.version('2.0')


//örnek kullanım ve çıktı
// PS C:\Users\YAZILIM02\Desktop\udemy\notes> node .\notesApp.js add --title=abc --bb=aa
// { _: [ 'add' ], title: 'abc', bb: 'aa', '$0': 'notesApp.js' }

//add

yargs.command({
  command: 'add',
  describe: 'Bir not ekleme',
  builder:{
    title:{
      describe:'Notun başlığını giriniz',
      demandOption: true,
      type:'string'
    },
    body:{
      describe:'Notunuzu girin',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) =>{
    notesService.addNote(argv.title, argv.body);
  }
});


//remove
yargs.command({
  command: 'remove',
  describe: 'Bir not silme',
  builder:{
    title:{
      describe:'Notun başlığını giriniz',
      demandOption: true,
      type:'string'
    }
  },
  handler: (argv) =>{
  notesService.removeNote(argv.title);
  }
});


//list all

yargs.command({
  command: 'listAll',
  describe: 'Tüm notları listeleme',
  handler: () =>{
    console.log('Tüm notlar listeleniyor...')
  }
});

//get

yargs.command({
  command: 'get',
  describe: 'Bir not alma',
  handler: () =>{
    console.log('seçtiğiniz not alınıyor...')
  }
});


yargs.parse();
