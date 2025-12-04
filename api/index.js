import { createServer } from 'http';

import express from 'express'
const app = express();
//Importar os modelos 
import Lutadores from '../models/Lutadores.js';
import Luta from '../models/Luta.js';
import Ingresso from '../models/Ingresso.js';
import Evento from '../models/Evento.js';

//upload
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

//Confiram se tem essa linha aqui também
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')


//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

//rotas
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/lutador/lst', async (req, res) => {
    const lutadores= await Lutadores.find()
    res.render("lutador/lst", {lutadores})
})

app.get('/lutador/add', (req, res) => {
    res.render("lutador/add")
})

app.post('/lutador/add/ok', upload.single('foto'), async (req, res) => {
    await Lutadores.create({
        nome:req.body.nome,
        catgpeso:req.body.catgpeso,
        nacionalidade: req.body.nacionalidade,
        cartel: req.body.cartel,
        foto:req.file.buffer
    })
    res.render("lutador/addok")
})

app.get('/lutador/edt/:id', async (req, res) => {
  const lutador = await Lutadores.findById(req.params.id)
  res.render('lutador/edt', {lutador});
});

app.post('/lutador/edt/:id', async (req, res) => {
  const id= req.params.id
  const updateData = {
        nome:req.body.nome,
        catgpeso:req.body.catgpeso,
        nacionalidade: req.body.nacionalidade,
        cartel: req.body.cartel,
        foto:req.file.buffer
    }
     if(req.file){ 
      updateData.foto= req.file.buffer
     }
  await Lutadores.findByIdAndUpdate(req.params.id, updateData)
  res.render('lutador/edtok');
});

app.get('/lutador/del/:id', async (req, res) => {
  await Lutadores.findByIdAndDelete(req.params.id);
  res.redirect('/lutador/lst');
});

app.get('/luta/lst', async (req, res) => {
    const luta= await Luta.find()
    res.render("luta/lst", {luta})
})

app.get('/luta/add', (req, res) => {
    res.render("luta/add")
})

app.post('/luta/add/ok', async (req, res) => {
    res.render("luta/addok")
})

app.get('/luta/edt/:id', async (req, res) => {
  const luta = await Luta.findById(req.params.id)
  res.render('luta/edt', {luta});
});

app.get('/luta/del/:id', async (req, res) => {
  await Luta.findByIdAndDelete(req.params.id);
  res.redirect('/luta/lst');
});


app.get('/ingresso/lst', async(req, res) => {
    const ingresso= await Ingresso.find()
    res.render("ingresso/lst", {ingresso})
})

app.get('/ingresso/add', (req, res) => {
    res.render("ingresso/add")
})

app.post('/ingresso/add/ok',  async(req, res) => {
    await Ingresso.create(req.body)
    res.render("ingresso/addok")
})

app.get('/ingresso/edt/:id', async (req, res) => {
  const ingresso = await Ingresso.findById(req.params.id)
  res.render('ingresso/edt', {ingresso});
});

app.post('/ingresso/edt/:id', async (req, res) => {
  await Ingresso.findByIdAndUpdate(req.params.id, req.body)
  res.render('ingresso/edtok');
});

app.get('/ingresso/del/:id', async (req, res) => {
  await Ingresso.findByIdAndDelete(req.params.id);
  res.redirect('/ingresso/lst');
});


app.get('/evento/lst', async(req, res) => {
    const evento= await  Evento.find()
    res.render("evento/lst", {evento})
})

app.get('/evento/add',  (req, res) => {
    res.render("evento/add")
})
app.post('/evento/add/ok', async(req, res) => {
    await Evento.create(req.body)
    res.render("evento/addok")
})

app.get('/evento/edt/:id', async (req, res) => {
  const evento = await Evento.findById(req.params.id)
  res.render('evento/edt', {evento});
});

app.post('/evento/edt/:id', async (req, res) => {
  await Evento.findByIdAndUpdate(req.params.id, req.body)
  res.render('evento/edtok');
});

app.get('/evento/del/:id', async (req, res) => {
  await Evento.findByIdAndDelete(req.params.id);
  res.redirect('/evento/lst');
});

app.get('/userLuta/lst', async(req, res) => {
    const luta= await  Luta.find()
    res.render("userLuta/lst", {luta})
})

app.get('/userLutador/lst', async(req, res) => {
    const lutador= await  Lutadores.find()
    res.render("userLutador/lst", {lutador})
})

app.get('/userEvento/lst', async(req, res) => {
    const evento= await  Evento.find()
    res.render("userEvento/lst", {evento})
})

app.get('/userIngresso/lst', async(req, res) => {
    const ingresso= await  Ingresso.find()
    res.render("userIngresso/lst", {ingresso})
})
app.listen(3002)