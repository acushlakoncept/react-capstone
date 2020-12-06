/* eslint-disable max-len */
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { BsFillForwardFill } from 'react-icons/bs';
import { FcBullish } from 'react-icons/fc';

export default function Stockdetail() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="shadow-sm pb-2 mb-3">
            AAPL
            <small className="priceChange">
              <BsFillForwardFill color="transparent" />
              Price: 122.25
              <BsFillForwardFill color="transparent" />
              Price change: -0.69
              <BsFillForwardFill color="transparent" />
              <FcBullish size={40} />
            </small>
          </h1>
          <h4>
            Apple Inc
            <BsFillForwardFill color="transparent" />
            Industry: Consumer Electronics
            <hr />
          </h4>
          <p className="lead text-justify readMaxLength">
            <img src="https://financialmodelingprep.com/image-stock/AAPL.png" alt="apple" className="float-left m-2" />
            Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store, that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.
            <a href="https://www.apple.com/" target="__blank" rel="noopener">
              {' '}
              Visit Website
            </a>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
