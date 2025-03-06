import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Jobs from "../Assistance/Jobs.json";
import Jobcards from "../components/Jobcards";

function Courses() {
  const job = Jobs.filter((data) => data.id > 0);
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {job.map((items) => {
            return <Jobcards item={items} key={items.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;



