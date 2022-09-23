import React, { Component } from 'react'

export default class admindash extends Component {
  render() {
    return (
      <div>

  <nav class="navbar navbar-expand-md navbar-dark bg-primary text-white" />
      
    <i class="fa fa-gear fa-2x d-md-block d-none"></i><a href="index.html" class="text-white mt-1 ml-1"><h3> CMS</h3></a>
      
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="active nav-item px-2"> 
              <a href="index.php" class="nav-link">Dashboard</a>
            </li>
            <li class="nav-item px-2"> 
              <a href="content.php" class="nav-link">Dash Contents</a>
            </li>
            <li class="nav-item px-2">
              <a href="product.php" class="nav-link">Products</a>
            </li>
            <li class="nav-item px-2">
              <a href="booking.php" class="nav-link">Bookings</a>
            </li>
            <li class="nav-item px-2">
              <a href="users.php" class="nav-link">Users</a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown mr-3">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-user"></i> Welcome Admin
              </a>
              <div class="dropdown-menu">
                <a href="profile.php" class="dropdown-item">
                  <i class="fa fa-user-circle"></i> Profile
                </a>
                <a href="settings.php" class="dropdown-item">
                  <i class="fa fa-gear"></i> Profile Settings
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a href="logout.php" class="nav-link">
                <i class="fa fa-user-times"></i> Logout
              </a>
            </li>
          </ul>
        </div>



<section id="action" class="py-4 mb-4 bg-light" />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
        <h2>Add Contents</h2>


             
              <form method="post">
                <div class="form-group">
                  <label for="home">Home Contents</label>
                  <textarea name="home" class="form-control" rows="5"></textarea>
                </div>
                <div class="form-group">
                  <label for="about">About Us Contents</label>
                  <textarea name="about" class="form-control" rows="5"></textarea>
                </div>
                <div class="form-group">
                  <label for="footer">Footer Contents</label>
                  <textarea name="footer" class="form-control" rows="5"></textarea>
                </div>
                <button class="btn btn-primary" data-dismiss="modal" type="submit" name="post">Post</button>
              </form>
            </div>
            </div>
            </div>
        <div class="col-md-4">
        <h2>Add Slider Image</h2>

              <form method="post" />
                <div class="form-group">
                  <label for="name">Admin Name</label>
                  <input type="text" class="form-control" name="admin"/>
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" name="username" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" name="password"/>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" name="email"/>
                </div>
                  <button name="pin" class="btn btn-primary" data-dismiss="modal" type="submit">Post</button>
                </div>



      </div>

    )
  }
}

