/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/macbook.jpg";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */


const imageAltText = "a section of a react code snippet";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Second Hand Items Resel flagship Website",
    description:
      " I designed and developed. A Flagship website for Second Hand Items Resel. It is a platform where we showcase our second hand Goods and guide user on installing the App. It is built using React js.",
    url: "https://flagship-secondhand.vercel.app ",
  },
  {
    title: "An Interfece for a Large Language Model Neural machine Translator",
    description:
      "I developed an interface for a Large Language Model Neural machine Translator. It is a platform where users can input text and get the translation in the desired language. It is built using Next js.",
    url: "https://language-model.vercel.app",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "chicken Selling Website",
    description:
      "I designed this website for a chicken selling starter company. It is a platform where users can see the chickens and can add them to their carts.",
    url: "https://chicken-selling.netlify.app",
  },
  {
    title: "A snake Game",
    description:
      "I developed a snake game using HTML, CSS and JavaScript. It is a platform where users can play the snake game.",
    url: "https://naominm.github.io/snakeGame/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "100%",
              width: "100%",
              marginLeft: "10px",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
