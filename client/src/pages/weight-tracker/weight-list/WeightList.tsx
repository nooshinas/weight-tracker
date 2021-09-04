import React from "react";
import "./WeightList.scss";
import { Weight } from "../../../interfaces/weight";
import Timeline from "../../../components/timeline/Timeline";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  weights: Weight[];
  onUpdate: (weight: Weight) => void;
  onDelete: (id: number) => void;
}

const WeightList = ({ weights, onUpdate, onDelete }: Props) => {
  return (
    <Timeline
      list={weights.map((item) => {
        return {
          content: (
            <div className="content-container">
              {item.weight + " " + item.measurement}
              <div className="action">
                <FaEdit className="btn-icon" onClick={() => onUpdate(item)} />
                |
                <FaTrash
                  className="btn-icon "
                  onClick={() => onDelete(item.id)}
                />
              </div>
            </div>
          ),
          date: item.date,
        };
      })}
    />
  );
};

export default WeightList;
