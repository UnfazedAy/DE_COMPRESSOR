import React from "react";

function Features() {
  return (
    <div className="container mb-5">
      <h2 className="fs-1 mt-5 fw-bold">Features</h2>
      <div className="card_container">

        <div className="card p-5 ">
            <h3 className="text-center m-0">Fast image compression</h3>
          <ion-icon name="checkmark-circle-sharp" className="check"></ion-icon>
        </div>

        <div className="card p-5 ">
            <h3 className="text-center m-0">No quality loss</h3>
          <ion-icon name="checkmark-circle-sharp" className="check"></ion-icon>
        </div>

        <div className="card p-5 ">
            <h3 className="text-center m-0">Improved SEO</h3>
          <ion-icon name="checkmark-circle-sharp" className="check"></ion-icon>
        </div>
        
        <div className="card p-5 ">
            <h3 className="text-center m-0">Easy to use</h3>
          <ion-icon name="checkmark-circle-sharp" className="check"></ion-icon>
        </div>

      </div>
    </div>
  );
}

export default Features;
