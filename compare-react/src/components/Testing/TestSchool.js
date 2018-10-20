import React, { Component } from "react";
import "./School.css";


class School extends Component {
  render() {
    function openArticle(event, articleName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      if (articleName === "All") {
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "block";
        }
      }
      else {
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        document.getElementById(articleName).style.display = "block";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      event.currentTarget.className += " active";
    }

    return (
      <div>
        <div className="content has-text-centered is-wide">
          <h1 className="title">School Forum</h1>
          <h2 className="subtitle is-4">
            The following are discussions about school
          </h2>

          <div
            className="tab"
            defaultIndex={1}
            onSelect={index => console.log(index)}
          >
            <div className="tab">
              <button className="tablinks" onclick="openArticle(event, 'Hot')">
                Hot
              </button>
              <button
                className="tablinks"
                onclick="openArticle(event, 'Trending')"
              >
                Trending
              </button>
              <button className="tablinks" onclick="openArticle(event, 'New')">
                New
              </button>
            </div>

            <div id="Hot" className="tabcontent">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
              <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg" />
            </div>

            <div id="Trending" className="tabcontent">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
              <img src="https://i.pinimg.com/originals/93/13/d3/9313d310dcfc0c542166cef6b82941a6.jpg" />
            </div>
            <div id="New" className="tabcontent">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
              <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default School;
