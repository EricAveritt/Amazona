function App() {
  return (
    <div className="grid-container">
      <header className="row">
          <div>
              <a className="brand" href="index.html">amazona</a>
          </div>
          <div>
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
          </div>
      </header>
      <main>
          <div className="row center">
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/p1.webp" alt="product"></img>
                  </a>
                  <div className="card-body">
                      <a href="product.html">
                          <h2>Yellow Slim Shirt</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                      </div>
                      <div className="price">
                          $120
                      </div>
                  </div>
              </div>
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/p2.jpg" alt="product"></img>
                  </a>
                  <div className="card-body">
                      <a href="product.html">
                          <h2>Faded Slim Shirt</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                      </div>
                      <div className="price">
                          $85
                      </div>
                  </div>
              </div>
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/p3.jpg" alt="product"></img>
                  </a>
                  <div className="card-body">
                      <a href="product.html">
                          <h2>Polo Slim Shirt</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                      </div>
                      <div className="price">
                          $175
                      </div>
                  </div>
              </div>
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/p4.jpg" alt="product"></img>
                  </a>
                  <div className="card-body">
                      <a href="product.html">
                          <h2>Checkered Grey Slim Pants</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="far fa-star"></i></span>
                      </div>
                      <div className="price">
                          $90
                      </div>
                  </div>
              </div>
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/p5.webp" alt="product"></img>
                  </a>
                  <div className="card-body">
                      <a href="product.html">
                          <h2>Checkered Black Slim Pants</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="far fa-star"></i></span>
                          <span><i className="far fa-star"></i></span>
                      </div>
                      <div className="price">
                          $180
                      </div>
                  </div>
              </div>
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/p6.jpg" alt="product"></img>
                  </a>
                  <div className="card-body">
                      <a href="product.html">
                          <h2>Grey Slim Pants</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fas fa-star-half-alt"></i></span>
                      </div>
                      <div className="price">
                          $150
                      </div>
                  </div>
              </div>
          </div>
      </main>
      <footer className="row center">All rights reserved.</footer>
  </div>
  );
}

export default App;
