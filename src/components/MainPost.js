import React from "react";
import "../style/FlexBox.css";

export const MainPost = () => {
  return (
    <div class="container">
      <header class="main-header">
        <h1>📘 The Code Magazine</h1>

        <nav>
          <a href="blog.html">Blog</a>
          <a href="#">Challenges</a>
          <a href="#">Flexbox</a>
          <a href="#">CSS Grid</a>
        </nav>
      </header>

      <article>
        <header className="post-header">
          <h2>The Basic Language of the Web: HTML</h2>

          <div className="author-box">
            <img
              src="https://pbs.twimg.com/profile_images/667474011425632257/pd11E42_.jpg"
              alt="Headshot of Laura Jones"
              height="50"
              width="50"
            />

            <p id="author">
              Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027
            </p>
          </div>
          <img
            src="https://edteam-media.s3.amazonaws.com/community/original/b892f5ba-7fd9-426c-a38d-0fcf5f0a9d69.jpg"
            alt="HTML code on a screen"
            width="500"
            height="200"
            className="post-img"
          />
          <button>❤️ Like</button>
        </header>

        <p>
          All modern websites and web applications are built using three
          <em>fundamental</em>
          technologies: HTML, CSS and JavaScript. These are the languages of the
          web.
        </p>

        <p>
          In this post, let's focus on HTML. We will learn what HTML is all
          about, and why you too should learn it.
        </p>

        <h3>What is HTML?</h3>
        <p>
          HTML stands for <strong>H</strong>yper<strong>T</strong>ext
          <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
          language that web developers use to structure and describe the content
          of a webpage (not a programming language).
        </p>
        <p>
          HTML consists of elements that describe different types of content:
          paragraphs, links, headings, images, video, etc. Web browsers
          understand HTML and render HTML code as websites.
        </p>
        <p>In HTML, each element is made up of 3 parts:</p>

        <ol>
          <li class="first-li">The opening tag</li>
          <li>The closing tag</li>
          <li>The actual element</li>
        </ol>

        <p>
          You can learn more at
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            MDN Web Docs
          </a>
          .
        </p>

        <h3>Why should you learn HTML?</h3>

        <p>
          There are countless reasons for learning the fundamental language of
          the web. Here are 5 of them:
        </p>

        <ul>
          <li class="first-li">
            To be able to use the fundamental web dev language
          </li>
          <li>
            To hand-craft beautiful websites instead of relying on tools like
            Worpress or Wix
          </li>
          <li>To build web applications</li>
          <li>To impress friends</li>
          <li>To have fun 😃</li>
        </ul>

        <p>Hopefully you learned something new here. See you next time!</p>
      </article>

      <aside>
        <h4>Related posts</h4>

        <ul className="related">
          <li className="related-post">
            <img
              src="https://edteam-media.s3.amazonaws.com/community/original/b892f5ba-7fd9-426c-a38d-0fcf5f0a9d69.jpg"
              alt="Person programming"
              width="75"
              height="75"
            />
            <div className="">
              <a href="#">How to Learn Web Development</a>
              <p className="related-author">By Jonas Schmedtmann</p>
            </div>
          </li>
          <li className="related-post">
            <img
              src="https://img.vixdata.io/pd/webp-large/es/sites/default/files/btg/curiosidades.batanga.com/files/los-rayos-la-ciencia-aun-busca-respuestas-2.jpg"
              alt="Lightning"
              width="75"
              height="75"
            />
            <div>
              <a href="#">The Unknown Powers of CSS</a>
              <p className="related-author">By Jim Dillon</p>
            </div>
          </li>
          <li className="related-post">
            <img
              src="https://www.uac.edu.co/media/k2/items/cache/587126eefcd5a89bf6c49c6872a907db_XL.jpg"
              alt="JavaScript code on a screen"
              width="75"
              height="75"
            />
            <div>
              <a href="#">Why JavaScript is Awesome</a>
              <p className="related-author">By Matilda</p>
            </div>
          </li>
        </ul>
      </aside>

      <footer>
        <p id="copyright" className="copyright text">
          Copyright &copy; 2027 by The Code Magazine.
        </p>
      </footer>
    </div>
  );
};
