function App() {
  // bloco superior
  const nome = 'Lucas Pedro'
  const email = 'email@email.com'

  return (
    // somente aqui aceita HTML
    <div>
      <h1>Nome do professor: {nome}</h1>
      <h2>Email: {email}</h2>
    </div>
  )
}

export default App
