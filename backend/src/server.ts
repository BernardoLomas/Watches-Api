import app from './app'

const Porta = process.env.Porta || 3000

app.listen(Porta, () =>{
    console.log(`Servidor rodando na porta ${Porta}!`);
})