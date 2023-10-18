import { useState, useEffect } from "react";
import Card from "../components/RoomCard";
import styled from "styled-components";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3100/rooms", {
        // Only for local testing, it should be "same-origin" for other environments
        credentials: "include",
      });
      const data = await response.json();
      setRooms(data);
      console.log("I fire once");
    }
    fetchData();
  }, []);

  return (
    <>
      <Container>
        {rooms.length > 0 &&
          rooms.map(({ id, coverImg, roomNo, occupantName, rentDueDate }) => (
            <div key={id} className="card">
              <Card
                coverImg={coverImg}
                roomNo={roomNo}
                occupantName={occupantName}
                rentDueDate={rentDueDate}
              />
            </div>
          ))}
        {rooms.length === 0 && <p>No rooms found</p>}
      </Container>
    </>
  );
};

const Container = styled.section`
  max-width: 90%;
  margin: 2rem auto;

  & h2 {
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 1.3rem;
  }

  & > article {
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    .card {
      margin: 1rem;
    }
  }
`;

export default Rooms;
