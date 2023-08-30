const updatePostHandler = async (event) => {
  event.preventDefault();
  console.log('called updatePostHandler')
  const title = document.querySelector('#update-blog-title').value.trim();
  const content = document.querySelector('#update-blog-content').value.trim();

  console.log(title);
  console.log(content);


    console.log('whoohoo!');
    const id = location.href.split('updatepost/')[1]
    console.log(id)
    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  ////////////original with data-id
  // if (event.target.hasAttribute('data-id')) {
  //   console.log('whoohoo!');
  //   const id = event.target.getAttribute('data-id');
  //   const response = await fetch(`/api/blog/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({title, content }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });



    if (response.ok) {
      document.location.replace('/dashboard');
      console.log('updated blog')
    } else {
      alert('Failed to update blog post');
    }
  }

const delButtonHandler = async (event) => {
  const id = location.href.split('updatepost/')[1]

    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('blog deleted')
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog post');
    }
  
};



document
  .querySelector(".update-post-btn")
  .addEventListener('click', updatePostHandler);

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', delButtonHandler);
