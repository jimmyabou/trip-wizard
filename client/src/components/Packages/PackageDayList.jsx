import "react-datepicker/dist/react-datepicker.css";
import PackageDayDetails from "./PackageDayDetails";

const PackageDayList = ({days}) => {
  return (
    <>
      {days
        .sort((a, b) => a.date.localeCompare(b.date))
        .map((day, index) => (
          <PackageDayDetails dayNumber={index + 1} day={day} key={day.day_id} />
        ))}
    </>
  );
};

export default PackageDayList;