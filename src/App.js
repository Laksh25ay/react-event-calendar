import React from "react";
import "./App.css";
// import {
//   Inject,
//   ScheduleComponent,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Agenda,
//   TimelineViews,
//   TimelineMonth,
//   ViewsDirective,
//   ViewDirective,
//   DragAndDrop,
//   Resize,
// } from "@syncfusion/ej2-react-schedule";
import EventCalendar from "./Components/EventCalendar";

//commented code : Functional components approach (reading UI events not working in functional)
//EventCalendar contains class components approach (reading UI events working in class component)

function App() {
  console.log("React version: ", React.version);
  // var data = [
  //   {
  //     Id: 1,
  //     Subject: "Meeting",
  //     StartTime: new Date(2022, 0, 10, 10, 0),
  //     EndTime: new Date(2022, 0, 10, 10, 30),
  //     IsAllDay: false,
  //   },
  //   {
  //     Id: 2,
  //     Subject: "Client Call",
  //     StartTime: new Date(2022, 0, 24, 10, 0),
  //     EndTime: new Date(2022, 0, 24, 11, 30),
  //     IsAllDay: false,
  //   },
  //   {
  //     Id: 3,
  //     Subject: "Republic Day",
  //     StartTime: new Date(2022, 0, 26, 10, 0),
  //     EndTime: new Date(2022, 0, 26, 11, 30),
  //     IsAllDay: true,
  //   },
  //   {
  //     Id: 4,
  //     Subject: "Football Championship",
  //     StartTime: new Date(2022, 0, 21, 7, 0),
  //     EndTime: new Date(2022, 0, 21, 9, 30),
  //     IsAllDay: false,
  //   },
  //   {
  //     Id: 5,
  //     Subject: "React Training",
  //     StartTime: new Date(2022, 0, 21, 14, 0),
  //     EndTime: new Date(2022, 0, 21, 15, 30),
  //     IsAllDay: false,
  //   },
  // ];

  return (
    <div className="App">
      <EventCalendar />
      {/* <ScheduleComponent
        height="550px"
        enableAdaptiveUI={true}
        currentView="Week"
        selectedDate={new Date()}
        eventSettings={{
          dataSource: data,
          fields: {
            id: "Id",
            subject: { name: "Subject" },
            isAllDay: { name: "IsAllDay" },
            startTime: { name: "StartTime" },
            endTime: { name: "EndTime" },
          },
        }}
      >
        <ViewsDirective>
          <ViewDirective
            option="Day"
            // interval={3}
            startHour="03:00"
            endHour="18:00"
          ></ViewDirective>
          <ViewDirective
            option="Day"
            displayName="3 Days"
            interval={3}
            startHour="03:00"
            endHour="18:00"
          ></ViewDirective>
          <ViewDirective option="Week"></ViewDirective>
          <ViewDirective option="WorkWeek"></ViewDirective>
          <ViewDirective option="TimelineWeek"></ViewDirective>
          <ViewDirective
            option="Month"
            showWeekNumber={true}
            showWeekend={false}
          ></ViewDirective>
          <ViewDirective option="TimelineMonth"></ViewDirective>
          <ViewDirective option="Agenda"></ViewDirective>
        </ViewsDirective>
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            TimelineViews,
            TimelineMonth,
            DragAndDrop,
            Resize,
          ]}
        />
      </ScheduleComponent> */}
    </div>
  );
}

export default App;
