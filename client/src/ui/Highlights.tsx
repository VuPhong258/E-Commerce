import { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../../lib";
import { HighlightsType } from "../../type";
import { Link } from "react-router-dom";

const Hightlights = () => {
  const [highlightData, setHighlightData] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const endpoint = `${config?.baseUrl}/highlights`;
      try {
        const data = await getData(endpoint);
        setHighlightData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fecthData();
  }, []);
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlightData.map((item: HighlightsType) => (
        <div
          key={item._id}
          className="relative h-60 rounded-lg shadow-md cursor-pointer
          overflow-hidden group"
          style={{ color: item?.color }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform
              duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${item?.image})`,
              color: item?.color,
            }}
          ></div>
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold max-w-44">{item?.name}</h3>
              <p className="text-base font-bold mt-4">{item?.title}</p>
            </div>
            <Link className="text-base font-normal" to={item?._base}>
              {item?.buttonTitle}
            </Link>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Hightlights;
