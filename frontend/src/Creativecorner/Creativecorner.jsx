import React from 'react';
import createrscorner from "../Assistance/createrscorner.json";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

function Creativecorner() {
  let projects = createrscorner.filter((data) => data.id > 0);
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => {
            return <Projects item={item} key={item.id} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Creativecorner;
