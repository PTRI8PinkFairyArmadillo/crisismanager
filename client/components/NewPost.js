import React from 'react';

const NewPost = () => (
  <form className="container">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Item Name</span>
      <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon2">Location</span>
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />     
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">Item Type</span>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">Quantity</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
    </div>

    <div class="input-group">
      <span class="input-group-text">Description</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>

    <div class="container col text-center">
      <button type="submit" class="btn btn-primary">
          Add Post
      </button>
    </div>
  </form>
)

export default NewPost;