import React, { useState, useEffect } from "react";
import Shirts from "./Shirts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "../../../public/Section.css";

export default function Caps() {
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  window.onscroll = function () {
    if (isInViewport(document.getElementById("sexy"))) {
      document.getElementById("left").style.visibility = "hidden";
      setSizeFilter(false);
      setSleeveFilter(false);
      setColorFilter(false);
    } else {
      document.getElementById("left").style.visibility = "initial";
    }
  };

  const [sizeFilter, setSizeFilter] = useState(true);
  const [sizeSelections, setSizeSelections] = useState({
    size_standard: false,
    size_S: false,
    size_M: false,
    size_L: false,
    size_XL: false,
    size_2XL: false,
    size_3XL: false
  });

  const [sleeveFilter, setSleeveFilter] = useState(true);
  const [sleeveSelections, setSleeveSelections] = useState({
    sleeve_half: false,
    sleeve_full: false,
    sleeve_less: false
  });
  const [colorFilter, setColorFilter] = useState(true);
  const [colorSelections, setColorSelections] = useState({
    color_white: false,
    color_black: false,
    color_red: false,
    color_green: false,
    color_blue: false,
    color_yellow: false,
    color_purple: false
  });

  const [filterCheck, setFilterCheck] = useState(0);

  function checkSizeFilter() {
    var x;

    for (x in sizeSelections) {
      if (sizeSelections[x] === true) {
        document.getElementById(x).style.color = "black";
      } else if (sizeSelections[x] === false) {
        document.getElementById(x).style.color = "rgba(45, 45, 45, 0.5)";
      }
    }
  }

  function checkSleeveFilter() {
    var x;

    for (x in sleeveSelections) {
      if (sleeveSelections[x] === true) {
        document.getElementById(x).style.color = "black";
      } else if (sleeveSelections[x] === false) {
        document.getElementById(x).style.color = "rgba(45, 45, 45, 0.5)";
      }
    }
  }

  function checkColorFilter() {
    var x;

    for (x in colorSelections) {
      if (colorSelections[x] === true) {
        document.getElementById(x).style.color = "black";
      } else if (colorSelections[x] === false) {
        document.getElementById(x).style.color = "rgba(45, 45, 45, 0.5)";
      }
    }
  }

  function clearSizeFilter() {
    setSizeSelections({
      size_standard: false,
      size_S: false,
      size_M: false,
      size_L: false,
      size_XL: false,
      size_2XL: false,
      size_3XL: false
    });
  }

  function clearSleeveFilter() {
    setSleeveSelections({
      sleeve_half: false,
      sleeve_full: false,
      sleeve_less: false
    });
  }

  function clearColorFilter() {
    setColorSelections({
      color_white: false,
      color_black: false,
      color_red: false,
      color_green: false,
      color_blue: false,
      color_yellow: false,
      color_purple: false
    });
  }

  function clearFilters() {
    clearSizeFilter();
    clearSleeveFilter();
    clearColorFilter();
    setFilterCheck(0);
  }
  useEffect(() => {
    checkSizeFilter();
    checkSleeveFilter();
    checkColorFilter();
    if (filterCheck === 0) {
      document.getElementById("filter_clear").style.visibility = "hidden";
    } else if (filterCheck > 0) {
      document.getElementById("filter_clear").style.visibility = "visible";
    }
  }, [filterCheck]);

  function onShowMoreSize() {
    setSizeFilter(!sizeFilter);
  }
  function onShowMoreColor() {
    setColorFilter(!colorFilter);
  }
  function onShowMoreSleeve() {
    setSleeveFilter(!sleeveFilter);
  }

  function onSizeFilterClick(event) {
    const selection = event.target.id;
    var x;

    for (x in sizeSelections) {
      if (x === selection) {
        var b = !sizeSelections[x];

        setSizeSelections((prevNote) => {
          return {
            ...prevNote,
            [selection]: b
          };
        });
      }
    }
    setFilterCheck(filterCheck + 1);
  }

  function onSleeveFilterClick(event) {
    const selection = event.target.id;
    var x;

    for (x in sleeveSelections) {
      if (x === selection) {
        var b = !sleeveSelections[x];

        setSleeveSelections((prevNote) => {
          return {
            ...prevNote,
            [selection]: b
          };
        });
      }
    }
    setFilterCheck(filterCheck + 1);
  }
  function onColorFilterClick(event) {
    const selection = event.target.id;
    var x;

    for (x in colorSelections) {
      if (x === selection) {
        var b = !colorSelections[x];

        setColorSelections((prevNote) => {
          return {
            ...prevNote,
            [selection]: b
          };
        });
      }
    }
    setFilterCheck(filterCheck + 1);
  }
  return (
    <div>
      <div id="left">
        <h1 className="heading-section">
          <span id="heading-section-under">Caps S</span>ection
          <span id="product-number"> (5000)</span>
        </h1>
        <div className="filters" id="filter-scroll">
          <h4 className="filter-head">FILTERS</h4>
          <p id="filter_clear" onClick={clearFilters}>
            Clear
          </p>
          <div className="filter-pointer-div-main">
            <div className="filter-pointer-div">
              <div
                onClick={onShowMoreSize}
                style={{ cursor: "pointer", display: "flex" }}
              >
                <h5 className="filter-pointer">Sizes</h5>
                <div className="expand-icon">
                  {!sizeFilter ? (
                    <ExpandMoreIcon fontSize="large" />
                  ) : (
                    <ExpandLessIcon fontSize="large" />
                  )}
                </div>
              </div>
              <div>
                <table
                  style={
                    sizeFilter
                      ? { visibility: "visible" }
                      : { visibility: "collapse" }
                  }
                  className="list"
                >
                  <tbody onClick={onSizeFilterClick}>
                    <tr>
                      <td id="space-row" />
                    </tr>
                    <tr>
                      <td id="size_standard" style={{ cursor: "pointer" }}>
                        STANDARD
                      </td>
                    </tr>
                    <tr>
                      <td id="size_S" style={{ cursor: "pointer" }}>
                        S
                      </td>
                    </tr>
                    <tr>
                      <td id="size_M" style={{ cursor: "pointer" }}>
                        M
                      </td>
                    </tr>
                    <tr>
                      <td id="size_L" style={{ cursor: "pointer" }}>
                        L
                      </td>
                    </tr>
                    <tr>
                      <td id="size_XL" style={{ cursor: "pointer" }}>
                        XL
                      </td>
                    </tr>
                    <tr>
                      <td id="size_2XL" style={{ cursor: "pointer" }}>
                        2XL
                      </td>
                    </tr>
                    <tr>
                      <td id="size_3XL" style={{ cursor: "pointer" }}>
                        3XL
                      </td>
                    </tr>
                    <tr>
                      <td id="space-row" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="filter-pointer-div">
              <div
                onClick={onShowMoreColor}
                style={{ cursor: "pointer", display: "flex" }}
              >
                <h5 className="filter-pointer">Color</h5>
                <div
                  className="expand-icon"
                  style={{ cursor: "pointer" }}
                  onClick={onShowMoreColor}
                >
                  {!colorFilter ? (
                    <ExpandMoreIcon fontSize="large" />
                  ) : (
                    <ExpandLessIcon fontSize="large" />
                  )}
                </div>
              </div>
              <div>
                <table
                  style={
                    colorFilter
                      ? { visibility: "visible" }
                      : { visibility: "collapse" }
                  }
                  className="list"
                >
                  <tbody
                    style={{ tableLayout: "auto" }}
                    onClick={onColorFilterClick}
                  >
                    <tr>
                      <td id="space-row" />
                    </tr>
                    <tr>
                      <td
                        id="color_white"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        White
                        <div
                          id="color_white"
                          className="box"
                          style={{
                            backgroundColor: "white",
                            marginLeft: "182px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="color_black"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        Black
                        <div
                          className="box"
                          id="color_black"
                          style={{
                            backgroundColor: "black",
                            marginLeft: "186px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="color_red"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        Red
                        <div
                          className="box"
                          id="color_red"
                          style={{
                            backgroundColor: "red",
                            marginLeft: "193px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="color_green"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        Green{" "}
                        <div
                          className="box"
                          id="color_green"
                          style={{
                            backgroundColor: "green",
                            marginLeft: "182px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="color_blue"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        Blue
                        <div
                          className="box"
                          id="color_blue"
                          style={{
                            backgroundColor: "blue",
                            marginLeft: "190px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="color_yellow"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        Yellow{" "}
                        <div
                          className="box"
                          id="color_yellow"
                          style={{
                            backgroundColor: "yellow",
                            marginLeft: "180px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="color_purple"
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        Purple{" "}
                        <div
                          className="box"
                          id="color_purple"
                          style={{
                            backgroundColor: "purple",
                            marginLeft: "180px"
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td id="space-row" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="filter-pointer-div">
              <div
                onClick={onShowMoreSleeve}
                style={{ cursor: "pointer", display: "flex" }}
              >
                <h5 className="filter-pointer">Sleeve</h5>
                <div
                  className="expand-icon"
                  style={{ cursor: "pointer" }}
                  onClick={onShowMoreSleeve}
                >
                  {!sleeveFilter ? (
                    <ExpandMoreIcon fontSize="large" />
                  ) : (
                    <ExpandLessIcon fontSize="large" />
                  )}
                </div>
              </div>
              <div>
                <table
                  style={
                    sleeveFilter
                      ? { visibility: "visible" }
                      : { visibility: "collapse" }
                  }
                  className="list"
                >
                  <tbody onClick={onSleeveFilterClick}>
                    <tr>
                      <td id="space-row" />
                    </tr>
                    <tr>
                      <td id="sleeve_half" style={{ cursor: "pointer" }}>
                        Half Sleeve
                      </td>
                    </tr>
                    <tr>
                      <td id="sleeve_full" style={{ cursor: "pointer" }}>
                        Full Sleeve
                      </td>
                    </tr>
                    <tr>
                      <td id="sleeve_less" style={{ cursor: "pointer" }}>
                        Sleeveless
                      </td>
                    </tr>
                    <tr>
                      <td id="space-row" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Side panel ends */}

      <div id="right">
        <Shirts />
      </div>
    </div>
  );
}
