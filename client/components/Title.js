import React from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import AddButton from './AddButton';

const Title = () => (
<div>
<div class="row gx-4 gx-lg-5 align-items-center my-5">
<div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://i.etsystatic.com/19332651/r/il/5f59d9/2707749293/il_794xN.2707749293_7ni3.jpg" alt="..." /></div>
<div class="col-lg-5">
    <h1 class="font-weight-light">Let's Help Our Friends</h1>
    <p>Do you have extra items laying around your house? Extra Food? Please share your items below. </p>
    <Link to="/newpost" class="btn btn-primary" href="#!">Sharing is Caring</Link>
</div>
</div>
<div class="card text-white bg-secondary my-5 py-4 text-center">
<div class="card-body"><p class="text-white m-0">If you are in need of any of the items below, click "Claim" to claim</p></div>
</div>
</div>)

export default Title;

