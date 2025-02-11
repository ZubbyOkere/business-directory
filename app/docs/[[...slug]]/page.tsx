import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  if (slug?.length === 1) {
    return (
      <div>
        <h1>Viewing docs {slug[0]}</h1>
      </div>
    );
  } else if (slug?.length === 2) {
    return (
      <div>
        <h1>
          Viewing docs for feature {slug[0]} of concept {slug[0]}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Docs home page</h1>
      </div>
    );
  }
};

export default Docs;
