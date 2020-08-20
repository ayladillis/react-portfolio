import React from "react";
import './style.css';

function PortfolioImg () {
    return (
        <div id="gallery" class="container flex row wrap waypoint">
        <div class="mix react" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">ChowNow Ordering</div>
              <span class="highlight">React JS / Python</span>
            </div>
            <div class="button" id="ordering">LEARN MORE</div>
          </div>
        </div>

        <div class="mix react" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">ChowNow Discover</div>
              <span class="highlight">React JS / Python</span>
            </div>
            <div class="button" id="discover">LEARN MORE</div>
          </div>
        </div>

        <div class="mix react" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">New Relic</div>
              <span class="highlight">React / Ruby on Rails / AEM</span>
            </div>
            <div class="button" id="newrelic">LEARN MORE</div>
          </div>
        </div>

        <div class="mix js" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">Roambi</div>
              <span class="highlight">JavaScript</span>
            </div>
            <div class="button" id="roambi">LEARN MORE</div>
          </div>
        </div>

        <div class="mix rails" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">Walker Tracker</div>
              <span class="highlight">JS / Ruby on Rails</span>
            </div>
            <div class="button" id="walker">LEARN MORE</div>
          </div>
        </div>

        <div class="mix js" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">MY STAND</div>
              <span class="highlight">JS / Node.js on Sails</span>
            </div>
            <div class="button" id="mystand">LEARN MORE</div>
          </div>
        </div>

        <div class="mix js" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">NEVER SURRENDER</div>
              <span class="highlight">JavaScript</span>
            </div>
            <div class="button" id="never">LEARN MORE</div>
          </div>
        </div>

        <div class="mix rails" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">Powur</div>
              <span class="highlight">Angular / Ruby on Rails</span>
            </div>
            <div class="button" id="powur">LEARN MORE</div>
          </div>
        </div>

        <div class="mix js" data-my-order="1">
          <div>
            <div class="card"></div>
            <div class="text">
              <div class="bold">The Mall</div>
              <span class="highlight">React.js / Node</span>
            </div>
            <div class="button" id="themall">LEARN MORE</div>
          </div>
        </div>
      </div>

    );
};

export default PortfolioImg;
