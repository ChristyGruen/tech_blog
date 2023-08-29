const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log('called newCommentHandler')
  const comment = document.querySelector('#comment-blog').value.trim();

  console.log(comment);

  if (comment) {
    console.log('whoohoo!');
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // document.location.replace('/dashboard');
      console.log('new comment created')
    } else {
      alert('Failed to create new comment');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blog/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };



document
  .querySelector(".new-post-create")
  .addEventListener('click', newPostHandler);

// document
//   .querySelector('#del-post-btn')
//   .addEventListener('click', delButtonHandler);
