import React from 'react';
import styled, { keyframes } from 'styled-components';

const CabinSketchFont = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Cabin+Sketch"
    rel="stylesheet"
  />
);

const redAnimation = keyframes`
  0% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-1.png); }
  9.09% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-2.png); }
  27.27% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-3.png); }
  36.36% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-4.png); }
  45.45% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-5.png); }
  54.54% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-6.png); }
  63.63% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-7.png); }
  72.72% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-8.png); }
  81.81% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-9.png); }
  100% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-1.png); }
`;

const blueAnimation = keyframes`
  0% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-1.png); }
  9.09% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-2.png); }
  27.27% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-3.png); }
  36.36% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-4.png); }
  45.45% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-5.png); }
  54.54% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-6.png); }
  63.63% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-7.png); }
  72.72% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-8.png); }
  81.81% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-9.png); }
  100% { background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-1.png); }
`;

const opacityRed = keyframes`
  from { opacity: 1; }
  25% { opacity: 1; }
  75% { opacity: .3; }
  to { opacity: .3; }
`;

const opacityBlue = keyframes`
  from { opacity: 0; }
  25% { opacity: 0; }
  75% { opacity: 1; }
  to { opacity: 1; }
`;

const Site = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  margin-top: 210px;
  margin-bottom: 100px;

  @media (min-width: 780px) {
    flex-direction: row;
    padding: 1em 3em 1em 0;
  }
`;

const Sketch = styled.div`
  position: relative;
  height: 400px;
  min-width: 400px;
  overflow: visible;

  @media (min-width: 780px) {
    order: 1;
  }
`;

const BeeSketch = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const RedBee = styled(BeeSketch)`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/red-1.png) no-repeat center center;
  animation: ${redAnimation} 3s linear infinite, ${opacityRed} 5s linear alternate infinite;
`;

const BlueBee = styled(BeeSketch)`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/198554/blue-1.png) no-repeat center center;
  animation: ${blueAnimation} 3s linear infinite, ${opacityBlue} 5s linear alternate infinite;
`;

const Title = styled.h1`
  font-family: 'Cabin Sketch', cursive;
  font-size: 3em;
  text-align: center;
  opacity: 0.8;

  @media (min-width: 780px) {
    text-align: right;
    padding-bottom: 2em;
    padding-left: 2em;
  }
`;

const Small = styled.small`
  display: block;
`;

const NotFoundPage = () => (
  <>
    <CabinSketchFont />
    <Site>
      <Sketch>
        <RedBee />
        <BlueBee />
      </Sketch>
      <Title>
        404: <Small>Page Not Found</Small>
        <Small>{"<-"} <a href="/collection" onClick={() => window.location.href="/collection"}>Go to collections</a></Small>
      </Title>
    </Site>
  </>
);

export default NotFoundPage;
