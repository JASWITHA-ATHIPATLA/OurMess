import { useState } from "react";
import Calendar from "react-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Background from "../assets/Image1.jpg";
const Container = styled.div`
  width: auto;
  height: auto;
`;
const CalendarWrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  background-color: black;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Background});
  background-repeat: repeat;
  .react-calendar {
    width: 100%;
    max-width: 380px; /* perfect for phones */
    border: none;
    font-size: 0.9rem;
  }
  /* Phone screens */
  @media (max-width: 768px) {
    padding: 4px;

    .react-calendar {
      font-size: 0.85rem;
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
      </CalendarWrapper>
    </Container>
  );
}

export default OutlookCalendar;
