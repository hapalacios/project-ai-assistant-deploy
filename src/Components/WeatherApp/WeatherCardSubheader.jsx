import React from "react";
import dayjs from "dayjs";
import './WeatherCardSubheader.scss'

export default function WeatherCardSubHeader(props) {
  const { currentWeather } = props;
  const date = dayjs().isValid(currentWeather.date) ? currentWeather.date : "";
  const description = currentWeather.description
    ? currentWeather.description
    : "";

  return (
    <>
      <span className="weather-card-sub-header">
        {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
        {dayjs(date).format("A")},{" "}
        {description.replace(/\w\S*/g, txt => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </span>
    </>
  );
}