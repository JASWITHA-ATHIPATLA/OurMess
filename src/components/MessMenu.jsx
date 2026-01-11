import React, { useState } from "react";
import styled from "styled-components";
import { weeklyMenu } from "./MenuData";

/* ---------- STYLES ---------- */

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: orange;
  padding: 10px;
  @media (max-width: 768px) {
    width: 94%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 12px;
  font-size: 18px;
`;

/* ---------- DESKTOP TABLE ---------- */

const TableWrapper = styled.div`
  overflow-x: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Table = styled.table`
  width: 90%;
  margin: auto;
  border-collapse: collapse;
  min-width: 800px;
  font-size: 12px;
`;

const Th = styled.th`
  border: 1px solid orange;
  padding: 6px;
  background-color: orange;
  color: black;
`;

const Td = styled.td`
  border: 1px solid orange;
  padding: 6px;
  vertical-align: top;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #111;
  }
`;

/* ---------- MOBILE CARDS ---------- */

const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Card = styled.div`
  border: 1px solid orange;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #111;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
`;

const CardBody = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.4;
`;

const Label = styled.span`
  font-weight: bold;
`;

/* ---------- COMPONENT ---------- */

const MessMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const daysInOctober = 31;
  const year = 2025;
  const month = 9;

  const dates = Array.from({ length: daysInOctober }, (_, i) => {
    const dateObj = new Date(year, month, i + 1);
    return {
      date: i + 1,
      day: dateObj.toLocaleDateString("en-US", { weekday: "long" }),
    };
  });

  return (
    <Container>
      <Title>VIT-AP Hostel Mess Menu – October 2025</Title>

      {/* ---------- DESKTOP TABLE ---------- */}
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Day</Th>
              <Th>Breakfast</Th>
              <Th>Lunch</Th>
              <Th>Snacks</Th>
              <Th>Dinner</Th>
            </tr>
          </thead>
          <tbody>
            {dates.map(({ date, day }) => (
              <Tr key={date}>
                <Td>{date}</Td>
                <Td>{day}</Td>
                <Td>{weeklyMenu[day]?.breakfast}</Td>
                <Td>{weeklyMenu[day]?.lunch}</Td>
                <Td>{weeklyMenu[day]?.snacks}</Td>
                <Td>{weeklyMenu[day]?.dinner}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      {/* ---------- MOBILE VIEW ---------- */}
      <MobileContainer>
        {dates.map(({ date, day }, index) => (
          <Card key={date}>
            <CardHeader
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>
                {day} - {date}
              </span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </CardHeader>

            {openIndex === index && (
              <CardBody>
                <p>
                  <Label>Breakfast:</Label> {weeklyMenu[day]?.breakfast}
                </p>
                <p>
                  <Label>Lunch:</Label> {weeklyMenu[day]?.lunch}
                </p>
                <p>
                  <Label>Snacks:</Label> {weeklyMenu[day]?.snacks}
                </p>
                <p>
                  <Label>Dinner:</Label> {weeklyMenu[day]?.dinner}
                </p>
              </CardBody>
            )}
          </Card>
        ))}
      </MobileContainer>
    </Container>
  );
};

export default MessMenu;
