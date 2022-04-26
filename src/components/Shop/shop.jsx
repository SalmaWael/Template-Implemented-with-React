import React, { useState, useRef, useMemo, useEffect } from "react";
import "./shop.css";
import Search from "./../Search/search";
import RatingStar from "../RatingStar/ratingstar";
import allProducts from "../../store-demo-data.json";

const Shop = () => {
  const [products, setProducts] = useState(allProducts.products);

  const [filteroverlayStyle, setfilteroverlayStyle] =
    useState("filteroverlay1");
  const [filterStyle, setfilterStyle] = useState("filtersDiv1");
  const [filtersActive, setFiltersActive] = useState(true);

  const slider = useRef();
  const [sliderValue, setSliderValue] = useState(0);

  // const [fill, setFill] = useState("");
  const [layout, setLayout] = useState("default");

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterBrandValue, setFilterBrandValue] = useState("");
  const [filterRangeValue, setFilterRangeValue] = useState(0);
  const [filterPriceValue, setFilterPriceValue] = useState(0);
  const handleChangeBrand = (e) => {
    setFilterType(e.target.name);
    setFilterBrandValue(e.target.value);
  };
  const handleChangeRange = (e) => {
    setFilterType(e.target.name);
    setFilterRangeValue(e.target.value);
  };
  const handleChangePrice = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    setSliderValue(e.target.value);
    setFilterType(e.target.name);
    setFilterPriceValue(e.target.value);
  };

  //////
  const changeStyle = () => {
    setFiltersActive(false);
    setfilterStyle("filtersDiv2");
    setfilteroverlayStyle("filteroverlay2");
  };
  const resetStyle = () => {
    setFiltersActive(true);
    setfilterStyle("filtersDiv1");
    setfilteroverlayStyle("filteroverlay1");
  };

  const [noAllStars, setNoAllStars] = useState([]);
  const [noFiveStars, setNoFiveStars] = useState(0);
  const [noFourStars, setNoFourStars] = useState(0);
  const [noThreeStars, setNoThreeStars] = useState(0);
  const [noTwoStars, setNoTwoStars] = useState(0);
  const [noOneStars, setNoOneStars] = useState(0);
  useEffect(() => {
    var ratings = [];
    for (let i = 0; i < products.length; i++) {
      ratings.push(products[i].rating);
    }
    // console.log(ratings);

    const fiveStars = ratings.reduce((accumulator, currentValue) => {
      if (currentValue === 5) {
        accumulator++;
      }
      return accumulator;
    }, 0);

    const fourStars = ratings.reduce((accumulator, currentValue) => {
      if (currentValue === 4) {
        accumulator++;
      }
      return accumulator;
    }, 0);

    const threeStars = ratings.reduce((accumulator, currentValue) => {
      if (currentValue === 3) {
        accumulator++;
      }
      return accumulator;
    }, 0);

    const twoStars = ratings.reduce((accumulator, currentValue) => {
      if (currentValue === 2) {
        accumulator++;
      }
      return accumulator;
    }, 0);

    const oneStar = ratings.reduce((accumulator, currentValue) => {
      if (currentValue === 1) {
        accumulator++;
      }
      return accumulator;
    }, 0);

    setNoFiveStars(fiveStars);
    setNoFourStars(fourStars);
    setNoThreeStars(threeStars);
    setNoTwoStars(twoStars);
    setNoOneStars(oneStar);
    setNoAllStars([fiveStars, fourStars, threeStars, twoStars, oneStar]);
  }, []);

  ////sorting
  const [sorting, setSorting] = useState("");
  const handleSortChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    setSorting(e.target.value);
  };

  const productData = useMemo(() => {
    let computedProducts = products;

    ///////search
    if (search) {
      computedProducts = computedProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //////////filter
    if (filterType) {
      if (filterRangeValue) {
        if (filterRangeValue === "0") {
          computedProducts = computedProducts.filter(
            (product) => product.price >= 0
          );
        } else if (filterRangeValue === "10") {
          computedProducts = computedProducts.filter(
            (product) => product.price <= 10
          );
        } else if (filterRangeValue === "100") {
          computedProducts = computedProducts.filter(
            (product) => product.price > 10 && product.price <= 100
          );
        } else if (filterRangeValue === "500") {
          computedProducts = computedProducts.filter(
            (product) => product.price > 100 && product.price <= 500
          );
        } else if (filterRangeValue === "1000") {
          computedProducts = computedProducts.filter(
            (product) => product.price > 500
          );
        }
        console.log(computedProducts);
      }

      if (filterPriceValue) {
        computedProducts = computedProducts.filter(
          (product) => product.price == filterPriceValue
        );
      }

      if (filterBrandValue) {
        computedProducts = computedProducts.filter(
          (product) =>
            product.brand.toLowerCase() === filterBrandValue.toLowerCase()
        );
      }
    }

    /////sort
    if (sorting) {
      // console.log("sorting");
      if (sorting === "all") {
        console.log("sorting1", computedProducts);
        return computedProducts;
      } else if (sorting === "asc") {
        // console.log("sorting2", computedProducts);
        computedProducts = computedProducts.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (sorting === "desc") {
        // console.log("sorting3", computedProducts);
        computedProducts = computedProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
    console.log("x", computedProducts);

    return computedProducts;
    // //sorting
    // if (sorting.field) {
    //   const reversed = sorting.order === "asc" ? 1 : -1;
    //   let arrayForSort = [...computedUsers];
    //   arrayForSort = arrayForSort.sort(
    //     (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    //   );
    //   computedUsers = arrayForSort;
    // }
  }, [
    products,
    search,
    filterType,
    filterBrandValue,
    filterRangeValue,
    filterPriceValue,
    sorting,
  ]);
  return (
    <div id="AllShopComponent">
      <div id="shopHeader">
        <div id="shopHeaderLeftD">
          <h2 id="shopH2">Shop</h2>
          <div style={{ padding: "0 14px" }}>
            <i style={{ color: "#7367f0" }} className="fa-solid fa-house"></i>
            <i className="fa-solid fa-angle-right angleRightI"></i>
            <span style={{ color: "#7367f0" }}>Ecommerce</span>
            <i className="fa-solid fa-angle-right angleRightI"></i>
            <span>Shop</span>
          </div>
        </div>
        <div id="shopHeaderRightD">
          {!filtersActive && (
            <button className="settingBtn">
              <i className="fa-solid fa-gear"></i>
            </button>
          )}
        </div>
      </div>

      <div id="AllShopContent">
        <div id={filteroverlayStyle}>
          <div id={filterStyle}>
            {filtersActive && <h6 id="filtersH">Filters</h6>}
            <div id="filtersInnerDiv">
              <div>
                <h6 id="multiRangeH">Multi Range</h6>
                <div id="multiRangeContainer">
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeRange(e)}
                      type="radio"
                      id="all"
                      name="multiRange"
                      value="0"
                    />
                      <label htmlFor="all">All</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeRange(e)}
                      type="radio"
                      id="greaterTen"
                      name="multiRange"
                      value="10"
                    />
                      <label htmlFor="greaterTen"> &lt;=10$ </label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeRange(e)}
                      type="radio"
                      id="tentoHundred"
                      name="multiRange"
                      value="100"
                    />
                      <label htmlFor="tentoHundred">10$ - 100$</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeRange(e)}
                      type="radio"
                      id="hundredToFive"
                      name="multiRange"
                      value="500"
                    />
                      <label htmlFor="hundredToFive">100$ - 500$</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeRange(e)}
                      type="radio"
                      id="moreFiveHundred"
                      name="multiRange"
                      value="1000"
                    />
                      <label htmlFor="moreFiveHundred"> &gt;=500$</label>
                  </div>
                </div>
                <h6 className="priceAndCategoriesH">Price Range</h6>
                <div className="slidecontainer">
                  <div id="sliderVal">
                    <span>{sliderValue}</span>
                  </div>
                  <input
                    ref={slider}
                    type="range"
                    min="1"
                    max="900"
                    value={sliderValue}
                    className="slider"
                    id="myRange"
                    name="price"
                    // onInput={(e) => {
                    //   setSliderValue(e.target.value);
                    // }}
                    onChange={(e) => handleChangePrice(e)}
                  />
                </div>
                <h6 className="priceAndCategoriesH">Categories</h6>
                <div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="appliances"
                      name="Category"
                      value="appliances"
                    />
                    <label htmlFor="appliances">Appliances</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="audio"
                      name="Category"
                      value="audio"
                    />
                    <label htmlFor="audio">Audio</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="cameras"
                      name="Category"
                      value="cameras"
                    />
                    <label htmlFor="cameras">Cameras &amp; Camcorders</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="cars"
                      name="Category"
                      value="cars"
                    />
                    <label htmlFor="cars">Car Electronics &amp; GPS</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="phones"
                      name="Category"
                      value="phones"
                    />
                    <label htmlFor="phones">Cell Phones</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="computers"
                      name="Category"
                      value="computers"
                    />
                    <label htmlFor="computers">Computers &amp; Tablets</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="health"
                      name="Category"
                      value="health"
                    />
                    <label htmlFor="health">Health,Fitness&amp;Beauty</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="office"
                      name="Category"
                      value="office"
                    />
                    <label htmlFor="office">Office&amp;School Supplies</label>
                  </div>
                  <div className="radioInputStyle">
                    <input type="radio" id="tv" name="Category" value="tv" />
                    <label htmlFor="tv">TV &amp; Home Theater</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      type="radio"
                      id="video games"
                      name="Category"
                      value="video games"
                    />
                    <label htmlFor="video games">Video Games</label>
                  </div>
                </div>
                <h6 className="priceAndCategoriesH">Brands</h6>
                <div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="Insignia"
                      name="brand"
                      value="Insignia"
                    />
                    <label htmlFor="Insignia">
                      Insignia
                      <sup>
                        <small>TM</small>
                      </sup>
                    </label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="Samsung"
                      name="brand"
                      value="Samsung"
                    />
                    <label htmlFor="Samsung">Samsung</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="Metra"
                      name="brand"
                      value="Metra"
                    />
                    <label htmlFor="Metra">Metra</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="HP"
                      name="brand"
                      value="HP"
                    />
                    <label htmlFor="HP">HP</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="apple"
                      name="brand"
                      value="apple"
                    />
                    <label htmlFor="apple">Apple</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="ge"
                      name="brand"
                      value="ge"
                    />
                    <label htmlFor="ge">GE</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="sony"
                      name="brand"
                      value="sony"
                    />
                    <label htmlFor="sony">Sony</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="incipio"
                      name="brand"
                      value="incipio"
                    />
                    <label htmlFor="incipio">Incipio</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="kitchenAid"
                      name="brand"
                      value="kitchenAid"
                    />
                    <label htmlFor="kitchenAid">KitchenAid</label>
                  </div>
                  <div className="radioInputStyle">
                    <input
                      onChange={(e) => handleChangeBrand(e)}
                      type="radio"
                      id="whirlpool"
                      name="brand"
                      value="whirlpool"
                    />
                    <label htmlFor="whirlpool">Whirlpool</label>
                  </div>
                </div>
                <h6 className="priceAndCategoriesH">Ratings</h6>
                <div>
                  {/* {noAllStars.length > 0 &&
                    noAllStars.map((value, index) => {
                      <div id="map" className="DivContainRatingsAndNumbers">
                        <div>
                          <RatingStar fill={noAllStars.length - index} />
                        </div>
                        <div>{noFiveStars}</div>
                      </div>;
                    })} */}
                  <div className="DivContainRatingsAndNumbers">
                    <div>
                      <RatingStar fill={5} />
                    </div>
                    <div>{noFiveStars}</div>
                  </div>
                  <div className="DivContainRatingsAndNumbers">
                    <div>
                      <RatingStar fill={4} />
                    </div>
                    <div>{noFourStars}</div>
                  </div>
                  <div className="DivContainRatingsAndNumbers">
                    <div>
                      <RatingStar fill={3} />
                    </div>
                    <div>{noThreeStars}</div>
                  </div>
                  <div className="DivContainRatingsAndNumbers">
                    <div>
                      <RatingStar fill={2} />
                    </div>
                    <div>{noTwoStars}</div>
                  </div>
                  <div className="DivContainRatingsAndNumbers">
                    <div>
                      <RatingStar fill={1} />
                    </div>
                    <div>{noOneStars}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!filtersActive && (
            <div
              onClick={() => {
                if (!filtersActive) {
                  resetStyle();
                }
              }}
              id="fixed2"
            ></div>
          )}
        </div>
        <div id="AllShopContentR">
          <div id="ShopFeaturesR">
            {/* <div></div> */}
            <div>
              <button id="filtersburgerbutton" onClick={changeStyle}>
                {/* <span className="navItem"> */}
                <i className="fa-solid fa-bars"></i>
                {/* </span> */}
              </button>
              <h6 id="resultsNo">27 results found</h6>
            </div>
            <div id="DivContainsOptions">
              <div>
                <select
                  onChange={(e) => handleSortChange(e)}
                  className="ShowFeaturedDetailsSelect"
                  name=""
                  id=""
                >
                  <option
                    className="selectOption"
                    name="sort"
                    value="all"
                    checked
                  >
                    Featured
                  </option>
                  <option className="selectOption" name="sort" value="asc">
                    Highest
                  </option>
                  <option className="selectOption" name="sort" value="desc">
                    Lowest
                  </option>
                </select>
              </div>
              <div className="ShowProductDetailsDiv">
                <div
                  onClick={() => {
                    setLayout("default");
                    if (layout === "default") {
                      console.log("hay layout");
                    }
                  }}
                  id="ShowProductDetailsBtn1"
                  className="ShowProductDetailsBtn"
                >
                  <i className="fa-solid fa-table-cells-large"></i>
                </div>
                <div
                  onClick={() => {
                    setLayout("detailed");
                    if (layout === "detailed") {
                      console.log("hay details");
                    }
                  }}
                  className="ShowProductDetailsBtn"
                >
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div id="Search">
            <div>
              <Search
                onSearch={(value) => {
                  setSearch(value);
                }}
              />
            </div>
          </div>
          {productData && layout === "default" && (
            <div className="products">
              {productData.map((product) => (
                <div key={product.id} className="card">
                  <div>
                    <img
                      className="productImg"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <div className="productAllDetails">
                    <div className="productRatingAndPrice">
                      <div>
                        <RatingStar fill={product.rating} />
                      </div>
                      <div className="productPrice">${product.price}</div>
                    </div>
                    <h6 className="productName">{product.name}</h6>
                    <p className="productDiscription">{product.discription}</p>
                  </div>
                  <div className="cardBtns">
                    <div className="wishlistBtn">
                      {product.available ? (
                        <a>
                          <i className="fa-solid fa-heart solidHeartI"></i>
                          <span>Wishlist</span>
                        </a>
                      ) : (
                        <a>
                          <i className="fa-regular fa-heart regularHeartI"></i>
                          <span>Wishlist</span>
                        </a>
                      )}
                    </div>
                    <div className="viewBtn">
                      <a>
                        <i className="fa-solid fa-cart-shopping VcartI"></i>
                        <span>View In Cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            // ) : (
            //   "loading"
          )}
          {productData && layout === "detailed" && (
            <div className="detailedproducts">
              {productData.map((product) => (
                <div key={product.id} className="cardDetailed">
                  <div className="detailedImg">
                    <img
                      className="productImg"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <div className="productDetailed">
                    <h6 className="detailedH">{product.name}</h6>
                    <p className="detailedBrandP">
                      By{" "}
                      <span className="detailedBrandSpan">{product.brand}</span>
                    </p>
                    <div>
                      <RatingStar fill={product.rating} />
                    </div>
                    <p className="detailedP">{product.discription}</p>
                  </div>
                  <div className="productDetailedBtns">
                    <h4 className="detailedPriceH">{product.price}$</h4>
                    <div className="productDetailedWishlistBtn">
                      {product.available ? (
                        <a>
                          <i className="fa-solid fa-heart solidHeartI"></i>
                          Wishlist
                        </a>
                      ) : (
                        <a>
                          <i className="fa-regular fa-heart regularHeartI"></i>
                          Wishlist
                        </a>
                      )}
                    </div>
                    <div className="productDetailedViewBtn">
                      <a>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>View In Cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            // ) : (
            //   "loading"
          )}
          <div id="pagination">
            <div className="paginationItem">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div id="allPaginationN">
              <div id="paginationItem1">1</div>
              <div id="paginationItem2">2</div>
              <div id="paginationItem3">3</div>
            </div>

            <div className="paginationItem">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
