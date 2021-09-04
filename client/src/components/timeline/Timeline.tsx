import React, { ReactNode } from "react";
import "./Timeline.scss";

interface Props {
  list: TimelineItem[];
}

interface TimelineItem {
  date: string;
  content: ReactNode | string;
}

const Timeline = ({ list }: Props) => {
  return (
    <div>
      <div className="timeline">
        <ul>
          {list.map((item, i) => {
            return (
              <li key={`item${i}`}>
                <div className="date">
                  <h4>{item.date}</h4>
                </div>
                <div className="point" />
                <div className="content">{item.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
