import axios from "axios";
import React, { useEffect, useState } from "react";

const SideDetail = ({ detailId, setShowDetails }) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://flight-radar1.p.rapidapi.com/flights/detail",
      params: { flight: detailId },
      headers: {
        "X-RapidAPI-Key": "d4d2d3dfadmshf9dc48e96cfef32p105891jsneac5523a880e",
        "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
      },
    };
    axios.request(options).then((res) => setDetail(res.data));
  }, [detailId]);

  return (
    <div className="showDetail">
      <div className="detail-inner">
        {!detail ? (
          <div className="loading-modal">
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            <h2 className="close-detail" onClick={() => setShowDetails(false)}>
              <span>X</span>
            </h2>
            <h2>{detail?.aircraft?.model?.text}</h2>
            <p>Model Kodu: {detail?.aircraft?.model?.text}</p>
            <p>Kuyruk Numarası: {detail?.aircraft?.registration}</p>
            <img src={detail?.aircraft?.images?.large[4]?.src} alt="" />

            <p>
              {" "}
              Kalkış:
              <a href={detail?.airport?.origin?.website}>
                {" "}
                {detail?.airport?.origin?.name}
              </a>
            </p>
            <p>
              {" "}
              Varış:
              <a href={detail?.airport?.destination?.website}>
                {" "}
                {detail?.airport?.destination?.name}
              </a>
            </p>
            <p> Rötar Durumu: {detail?.status?.text}</p>
          </>
        )}{" "}
      </div>
    </div>
  );
};

export default SideDetail;
