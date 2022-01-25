import React from "react";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function App() {
  console.log("React version: ", React.version);
  var data = [
    {
      Id: 1,
      Subject: "Meeting",
      StartTime: new Date(2022, 0, 10, 10, 0),
      EndTime: new Date(2022, 0, 10, 10, 30),
      IsAllDay: false,
    },
    {
      Id: 2,
      Subject: "Client Call",
      StartTime: new Date(2022, 0, 24, 10, 0),
      EndTime: new Date(2022, 0, 24, 11, 30),
      IsAllDay: false,
    },
    {
      Id: 3,
      Subject: "Republic Day",
      StartTime: new Date(2022, 0, 26, 10, 0),
      EndTime: new Date(2022, 0, 26, 11, 30),
      IsAllDay: true,
    },
    {
      Id: 4,
      Subject: "Football Championship",
      StartTime: new Date(2022, 0, 21, 7, 0),
      EndTime: new Date(2022, 0, 21, 9, 30),
      IsAllDay: false,
    },
    {
      Id: 5,
      Subject: "React Training",
      StartTime: new Date(2022, 0, 21, 14, 0),
      EndTime: new Date(2022, 0, 21, 15, 30),
      IsAllDay: false,
    },
  ];

  // const onDataBound = () => {
  //   let event = this.scheduleObj.getEvents();
  //   appendElement("Events present on scheduler <b>" + event.length + "<b><hr>");
  // };

  // const appendElement = (html) => {
  //   let span = document.createElement("span");
  //   span.innerHTML = html;
  //   let log = document.getElementById("EventLog");
  //   log.insertBefore(span, log.firstChild);
  // };

  // const onClick = () => {
  //   document.getElementById("EventLog").innerHTML = "";
  // };

  return (
    <div className="App">
      <ScheduleComponent
        // cssClass="schedule-cell-dimension"
        // dataBound={onDataBound()}
        enablePersistence={true}
        currentView="Week"
        selectedDate={new Date()}
        // enableAdaptiveUI={true}
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
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
