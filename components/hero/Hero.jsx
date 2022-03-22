import React from 'react'

export default function Hero() {
    return (
        <div className="Hero-outer">
        <div
          id="Hero"
          data-name="Hero"
          className="Hero"
        >
          <div className="Shadow-5-outer">
          <div
            id="Shadow-5"
            data-name="Shadow"
            alt="Shadow"
            className="Shadow-5"
          >
          </div>
          </div>
          <div className="Container-10-outer">
          <div
            id="Container-10"
            data-name="Container"
            alt="Container"
            className="Container-10"
          >
          </div>
          </div>
          <div className="Find-your-movies-her-outer">
          <div
            id="Find-your-movies-her"
            data-name="Find your movies here!"
            className="Find-your-movies-her"
          ><div key="0">Find your movies here!</div>
          </div>
          </div>
          <div className="Play-Button-outer">
          <div
            id="Play-Button"
            data-name="Play Button"
            className="Play-Button"
          >
            <img src="images/play-button.svg"/>

          </div>
          </div>
          <div className="Explore-our-gallery--outer">
          <div
            id="Explore-our-gallery-"
            data-name="Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads."
            className="Explore-our-gallery-"
          ><div key="0">Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</div>
          </div>
          </div>
        </div>
        </div>
    )
}