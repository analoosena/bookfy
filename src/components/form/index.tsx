const Form = () => {
  return(
    <section>
      <h3>Cadastrar novo título</h3>
      <div>
        <form action="">
          <label>Nome:</label>
          <input></input>
          <label>Autor:</label>
          <input></input>
          <label>Gênero</label>
          <select name="" id="">
            <option value="">Romance</option>
            <option value="">Fantasia</option>
            <option value="">Suspence</option>
            <option value="">Ficção Científica</option>
            <option value="">Biografia</option>
            <option value="">Autoajuda</option>
          </select>

          <label>Status</label>
          <select name="" id="">
            <option value="">Lido</option>
            <option value="">Lendo</option>
            <option value="">Não Lido</option>
          </select>

          <label>Ano de Publicação</label>
          <select name="" id="">
            <option value="">1995</option>
          </select>
        </form>
        <button>Cadastrar</button>
      </div>
    </section>
  )
}
export default Form;