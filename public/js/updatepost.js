//need to select by id


const updatePostHandler = async (event) => {
  event.preventDefault();

  console.log('called updatePostHandler')
  const title = document.querySelector('#update-blog-title').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const content = document.querySelector('#update-blog-content').value.trim();

  console.log(title);
  console.log(content);

  if (event.target.hasAttribute('data-id')) {
    console.log('whoohoo!');
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/updatepost/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      console.log('here we go')
    } else {
      alert('Failed to update blog post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/updatepost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};



document
  .querySelector(".post-update")
  .addEventListener('submit', updatePostHandler);

document
  .querySelector('#del-post-btn')
  .addEventListener('click', delButtonHandler);
