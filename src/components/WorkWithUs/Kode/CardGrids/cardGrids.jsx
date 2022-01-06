import React from "react";

function CardGrids(props) {
  return (
    <React.Fragment>
      <div className="wwu-kode-cards wwu-kode-cards1">
        {props.data.slice(0, 3).map((item, key) => {
          return (
            <div className="wwu-kode-cards-card" key={key}>
              <div className="wwu-kode-cards-card-img">
                <img src={item.image} alt={item.alt} title={item.alt} />
              </div>
              <h3 className="wwu-kode-cards-card-heading">{item.title}</h3>
              <p
                className="wwu-kode-cards-card-desc"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          );
        })}
      </div>
      <div className="wwu-kode-cards wwu-kode-cards2">
        {props.data.slice(3, 7).map((item, key) => {
          return (
            <div className="wwu-kode-cards-card" key={key}>
              <div className="wwu-kode-cards-card-img">
                <img src={item.image} alt={item.alt} title={item.alt} />
              </div>
              <h3 className="wwu-kode-cards-card-heading">{item.title}</h3>
              <p
                className="wwu-kode-cards-card-desc"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default CardGrids;
