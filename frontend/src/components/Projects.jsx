import React from 'react';

function Projects({ item }) { // Destructure the item prop
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.pd}</p>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">Connect</div>
            <div className="badge badge-outline"><a href="https://ameyvyas04-stockmarketprediction-app-o0dc3s.streamlit.app/">Open</a></div>
          <div>
          <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
