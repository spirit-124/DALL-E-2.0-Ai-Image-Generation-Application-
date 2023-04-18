import React, { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../../src/components";

const RenderCards = ({ data, tittle }) => {
  if (data.length > 0) {
    return data.map((post) => <Card key={psot._id} {...post} />);
  }
  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
      {tittle}
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allposts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState(null);

  // const searchText = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className=" mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images genrated by Dall-E AI
        </p>
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className=" font-medium text-[#666e75] text-xl mb-3">
                showing reaults for
                <span className="text-[#222232]"> hello {searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} titttle="No search Results found" />
              ) : (
                <RenderCards data={[]} tittle="No posts Found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
