import "./MainContent.css";

export function Content() {
  return (
    <div className="content">
      <div className="book">
        <h2 className="book1">Book 1</h2>
        <div className="description">
          <img src={"/assets/1.png"} alt="" />
          <div className="price_description">
            <p className="price">Price - 20$</p>
            <div className="about_book">
              <p className="">
                The term “paradigm” in programming language context refers to a
                broad (almost universal) mindset and approach to structuring
                code.
              </p>
            </div>

            <button className="buy_btn buy_btn2">Buy now</button>
          </div>
          <button className="buy_btn buy_btn1">Buy now</button>
        </div>
      </div>
    </div>
  );
}
