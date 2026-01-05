import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ---------- MOBILE-SAFE HEIGHT ---------- */
const AppWrapper = styled.div`
  width: 100%;
  height: var(--app-height);
`;

/* ---------- LAYOUT ---------- */
const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ---------- SIDEBAR ---------- */
const Sidebar = styled.div`
  background: #0b1c2d;
  color: white;
  padding: 8px;
  display: flex;
  gap: 8px;

  @media (min-width: 769px) {
    width: 200px; /* decreased width */
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
  }
`;

const Button = styled.button`
  padding: 10px 14px; /* smaller padding */
  background: #1f3b5c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px; /* smaller font */
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 13px; /* tiny phones */
    padding: 8px 12px;
  }
`;

/* ---------- MAP ---------- */
const MapContainer = styled.div`
  flex: 1;
  min-height: 250px; /* smaller height for mobile */
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

/* ---------- DATA ---------- */
const blocks = {
  AB1: "VIT-AP University AB1 Block",
  AB2: "VIT-AP University AB2 Block",
  CB: "VIT-AP University CB Block",
  LH: "VIT-AP University LH Block",
  MH: "VIT-AP University MH Block"
};

const MAIN_GATE = "VIT-AP University Main Gate";

const VITAP_BOUNDS = {
  minLat: 16.4405,
  maxLat: 16.4455,
  minLng: 80.6205,
  maxLng: 80.6255
};

/* ---------- COMPONENT ---------- */
const LocationComponent = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps?q=VIT-AP+University&output=embed"
  );

  /* Fix mobile 100vh issue */
  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  const getUserLocation = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }),
        () => reject("Location permission denied")
      );
    });

  const insideVitap = (lat, lng) =>
    lat >= VITAP_BOUNDS.minLat &&
    lat <= VITAP_BOUNDS.maxLat &&
    lng >= VITAP_BOUNDS.minLng &&
    lng <= VITAP_BOUNDS.maxLng;

  const navigate = async (key) => {
    try {
      const user = await getUserLocation();
      let query;

      if (insideVitap(user.lat, user.lng)) {
        query = blocks[key];
      } else {
        // <-- ALERT BOX PRESERVED
        alert(
          "You are outside VIT-AP.\nShowing directions to VIT-AP Main Gate only."
        );
        query = MAIN_GATE;
      }

      setMapUrl(
        `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
      );
    } catch (e) {
      alert(e);
    }
  };

  return (
    <AppWrapper>
      <Layout>
        <Sidebar>
          {Object.keys(blocks).map((b) => (
            <Button key={b} onClick={() => navigate(b)}>
              {b}
            </Button>
          ))}
        </Sidebar>

        <MapContainer>
          <MapFrame src={mapUrl} />
        </MapContainer>
      </Layout>
    </AppWrapper>
  );
};

export default LocationComponent;
