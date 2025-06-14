import { getCollectionData, getPageBySlug } from "@/helpers/payload";
import React, { use } from "react";

const About = () => {
  const pageData = use(getPageBySlug("about"));

  console.log("pageData", pageData);

  return <div>About Page</div>;
};

export default About;
