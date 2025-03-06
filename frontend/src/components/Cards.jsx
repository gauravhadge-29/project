import React from 'react';

function Cards({ item }) {
    console.log(item);
    return (
        <>
            <div className="card bg-base-100 w-56 md:w-96 m-4 shadow-xl dark:bg-slate-900 dark:text-white hover:shadow-2xl hover:shadow-blue-400 duration-300">
    <div className="card-body">
        <h2 className="card-title hover:text-2xl duration-300">{item.username}</h2>
        <p className=''>{item.content}</p>
        <div className="card-actions justify-between">
        <button className="btn btn-primary mt-4"><a href="https://chatting-app-h398.onrender.com/">View</a></button>
        <div className="rating gap-1 mt-5">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-200" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-300" defaultChecked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" />
</div>
        </div>
    </div>
    </div>
        </>
    );
}

export default Cards;
