


let addComment = document.getElementById('add-comment')

//AXIOS,POST(A RUTA QUE CREE EN LA BASE DE DATOS)
addComment.onclick = e => { // es onclick porque no tengo el botón en un formulario, si no sería onsubmit
  e.preventDefault()
  
  let author = document.getElementById('author').value
  let comment = document.getElementById('comment').value
  let movieId = document.getElementById('id-input').value
  
  const newComment = {author, comment, movieId}
  // console.log(newComment)
  axios.post('/movies/upload_comment', newComment)
    .then(json => { 
      // console.log(json.data[json.data.length-1]) // json es un array 
      let jsonCommentInfo = json.data[json.data.length-1]
      let newAuthor = document.getElementById('newAuthor')
      let incomeComment = document.getElementById('incomeComment')
      newAuthor.innerHTML = jsonCommentInfo.author
      incomeComment.innerHTML = jsonCommentInfo.comment
    })
    .catch((err) => console.log('error al postear el comentario en la vista', err))
  

  
}
