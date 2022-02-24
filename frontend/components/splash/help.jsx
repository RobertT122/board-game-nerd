import React from "react";

const Help = () => (
  <div className="help-box">
    <h1>
      Welcome to Board Game Nerd!
    </h1>
    <br />
    <h2>
      Here are some useful tips to help you explore
  </h2>
  <br />
    <p>
      You can explore the site by clicking on games to navigate to their page, or search for a game in the top right corner
    </p>
    <br />
    <p>
      There are even more features once you've login <span>(There is a Demo user if your just looking to try it out! Click the "Login" button and navigate to the "Demo User" option)</span>
    </p>
    <br />
    <div>
      Log in or Sign up to:
    <ul>
      <li>
        Rate games and add your own opinions!
      </li>
      <li>
        Contribute to the BoardGameNerd by submitting your own games
      </li>
      <li>
        View and manage your reviews and contibutions
      </li>
    </ul>
    </div>
  </div>
)

export default Help