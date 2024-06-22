import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <div className="UpcomingEvents" id="UpcomingEvents">
      <h2 style={{textAlign: "center", marginBottom: "20px"}}>Upcoming Events</h2>
      <table style={{color: "#454545", maxWidth:"100%", whiteSpace:"nowrap"}}>
        <tr>
          <th>July 6th - 7th</th>
          <td>&nbsp;&nbsp;Mudbash - Melbourne, VIC</td>
        </tr>
        <tr>
          <th>July 20th - 21st</th>
          <td>&nbsp;&nbsp;Midwinter - Newcastle, NSW</td>
        </tr>
        <tr>
          <th>October 5th - 6th</th>
          <td>&nbsp;&nbsp;Nations Cup - Spain</td>
        </tr>
        <tr>
          <th>October 19th - 20th</th>
          <td>&nbsp;&nbsp;State Shield - TBD</td>
        </tr>
        <tr>
          <th>November 30th - December 1st</th>
          <td>&nbsp;&nbsp;Nationals - TBD</td>
        </tr>
      </table>
    </div>
    );
};

export default UpcomingEvents;