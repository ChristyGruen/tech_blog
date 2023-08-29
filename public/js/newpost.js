const newPostHandler = async (event) => {
  event.preventDefault();
  console.log('called newPostHandler')
  const title = document.querySelector('#new-blog-title').value.trim();
  const content = document.querySelector('#new-blog-content').value.trim();

  console.log(title);
  console.log(content);

  if (title &&  content) {
    console.log('whoohoo!');
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // document.location.replace('/dashboard');
      console.log('new blog post created')
    } else {
      alert('Failed to create new blog post');
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
