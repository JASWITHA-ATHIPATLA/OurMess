import { useState } from "react";
import Calendar from "react-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Background from "../assets/Image1.jpg";
import MakeTodoEvents from "./MakeTodoEvents";

const Container = styled.div`
  width: auto;
  height: auto;
`;
const CalendarWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding: 4px;
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  background-repeat: repeat;
  .react-calendar {
    width: 70%;
    height:50%;
    max-width: 380px; /* perfect for phones */
    border: none;
    font-size: 0.9rem;
  }
  /* Phone screens */
  @media (max-width: 768px) {
    width:95%;
    flex-direction: column;
    align-items: center;

    .react-calendar {
      width: 90%;
      font-size: 1rem;
    }
  }
`;
const Events = styled.div`
  width: auto;
  height: auto;
  display: block;
  text-align: center;
  background-color: black;
  color: orange;
`;

function OutlookCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Events>No Events Scheduled!</Events>
      <CalendarWrapper>
        <Calendar
          onChange={setDate}
          value={date}
          prevLabel={<ChevronLeft size={16} />}
          nextLabel={<ChevronRight size={16} />}
          prev2Label={null}
          next2Label={null}
        />
        <MakeTodoEvents/>
      </CalendarWrapper>

    </Container>
  );
}

export default OutlookCalendar;
