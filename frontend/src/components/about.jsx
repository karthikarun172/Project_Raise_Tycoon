import React from "react";
import NavBar from "./common/Navbar";
import AboutIMG from "../css_files/images/aboutIMG.svg";
import Footer from "./common/footer";
import ak from "../css_files/images/ak.svg";

const About = () => {
  return (
    <div className="aboutNav">
      <NavBar />

      <div className="aboutPage">
        <div className="abtHeader">
          <div className="abtHead">
            <h2>About Us</h2>
            <button className="checkOut">Check Out</button>
          </div>
          <div className="abtImg">
            <img src={AboutIMG} alt="" />
          </div>
        </div>
        <div className="ourStory">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis voluptates, molestiae aperiam iusto facilis eos
            quibusdam reiciendis fuga minus? Minima quibusdam veniam quo illo
            amet atque sed minus! Doloremque, totam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Reiciendis labore sint animi,
            dignissimos omnis distinctio quos nisi ipsum reprehenderit,
            aspernatur rerum! Ipsa id voluptas alias cum ab. Reiciendis,
            corporis tempora? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quod numquam alias nesciunt consequatur fugit
            cupiditate quia odio aspernatur totam omnis, quisquam magni ipsa
            sapiente facere error perspiciatis in a culpa. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Provident nihil quod optio
            atque fuga, labore aut impedit magnam tempore. Asperiores placeat
            itaque commodi eligendi debitis aspernatur animi officia provident
            totam?
          </p>
          <br />
          <h3>Next Topic</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at
            vel dolore possimus distinctio praesentium. Nemo, ex facilis in quo
            aliquid numquam maxime! Vel, soluta id magni nemo impedit cumque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            alias, iusto obcaecati consequatur corrupti omnis, officia excepturi
            sit molestias eos laborum aliquid voluptatem architecto earum minus
            in ipsam voluptate repellat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At nihil culpa reiciendis dignissimos.
            Voluptatibus est quod deleniti temporibus, vel similique blanditiis
            consequuntur. Totam, consequatur ratione? Impedit quam quod fugiat
            omnis!
          </p>
        </div>
        <div className="ourTeam">
          <h2>Our Tream</h2>
          <div className="firstrowTeam">
            <div className="team1">
              <img src={ak} alt="" />
              <h5>Arun Karthik</h5>
              <h6>Founder and CTO</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident beatae repudiandae perspiciatis autem blanditiis enim
                corrupti repellendus explicabo, tempora tempore vitae quaerat.
                Assumenda commodi cum incidunt tenetur quidem, repellendus
                laborum? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro pariatur suscipit deleniti magni ipsa dolorum cumque
                quaerat possimus labore, obcaecati maiores aliquid vero incidunt
                ad officia adipisci culpa illo unde.
              </p>
            </div>
            <div className="team1">
              <img src={ak} alt="" />
              <h5>Abishek</h5>
              <h6>CEO</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium magni amet perferendis asperiores ex cupiditate
                cumque maiores quidem eligendi ipsa voluptas doloribus illo, ut,
                beatae est quam corporis et! Dolorem! Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Explicabo expedita ea quidem
                mollitia illo in, id natus ipsum sit dolore eligendi quia,
                reprehenderit voluptate sapiente distinctio quae illum vitae
                veritatis.
              </p>
            </div>
          </div>
          <div className="secondrowTeam">
            <div className="team2">
              <img src={ak} alt="" />
              <h5>Vignesh Raj</h5>
              <h6>CFO</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                delectus eveniet facere aliquid commodi totam suscipit illum
                laudantium cumque culpa incidunt aliquam quasi amet repellendus
                quia voluptatibus consequuntur, quam sit!
              </p>
            </div>
            <div className="team2">
              <img src={ak} alt="" />
              <h5>Muthu Kumaran</h5>
              <h6>Senior Manager</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                earum quae ipsa incidunt suscipit unde odit fugiat voluptate hic
                porro non, praesentium laudantium cum fugit vel molestias
                ratione omnis magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
