import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  // all posts are donation
  // const [isDonation, setDonationStat] = useState(false);

  const { addPost } = useContext(GlobalContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path)
  }

  const onSubmit = e => {
    e.preventDefault();
    // what does this do exactly?
    // donation should take value of checkbox
    // console.log('what is checkbox value', e.target.donationCheckbox.value);
    // const donation = e.target.donationCheckbox.value ? true : false;
    const newPost = {
      event: "TBD",
      name,
      location,
      type,
      quantity,
      description,
      donation: true // keeping this in here, because database looks for this column. 
    }
      
      addPost(newPost);
      routeChange();
  }

  return (
    <form className="container" onSubmit={onSubmit}>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Item Name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" aria-label="Item Name" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Location</span>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} class="form-control" aria-label="Location" aria-describedby="basic-addon2" />     
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">Item Type</span>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="form-control" aria-label= "type" aria-describedby="basic-addon3" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Quantity</span>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} class="form-control" aria-label="quantity" />
      </div>

      <div class="input-group">
        <span class="input-group-text">Description</span>
        <textarea class="form-control" value={description} onChange={(e) => setDescription(e.target.value)} aria-label="description"></textarea>
      </div>

{/* was going to have two posts type: donation & requests. Ended up focusing just on collectiong donation posts */}
      {/* <div class="form-check">
        <input type="hidden" name="donationCheckbox" value="false" />
        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" name="donationCheckbox"/>
        <label class="form-check-label" for="flexCheckDefault">
          Donation?
        </label>
      </div> */}

      <div class="container col text-center">
        <button type="submit" class="btn btn-primary">
            Add Post
        </button>
      </div>
    </form>
  )}

export default NewPost;