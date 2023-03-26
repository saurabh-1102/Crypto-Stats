import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title
        level={2}
        style={{ textAlign: "center", marginTop: "30px" }}
        className="heading"
      >
        GLOBAL CRYPTOCURRENCY STATISTICS
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic
            style={{ textAlign: "center" }}
            title="Total Cryptocurrencies"
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ textAlign: "center" }}
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ textAlign: "center" }}
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ textAlign: "center" }}
            title="Total Cryptocurrencies"
            value={globalStats.total}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title style={{ marginTop: "50px" }} level={2} className="home-title">
          TOP 10 CRYPTOCURRENCIES
        </Title>
        <Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show more...</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  );
};

export default Homepage;
