import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import ReportsSummary from "../components/ReportsSummary.jsx";
import "./Reports.css";

function Reports() {
  const [searchParams] = useSearchParams();
  const range = searchParams.get("range") === "month" ? "month" : "week";

  return (
    <>
      <Header title="Reports" subtitle="Session activity over time." />

      <section className="reports-range" aria-label="Date range">
        <Link
          to="/reports?range=week"
          className={`reports-range-tab${range === "week" ? " is-active" : ""}`}
        >
          Week
        </Link>
        <Link
          to="/reports?range=month"
          className={`reports-range-tab${range === "month" ? " is-active" : ""}`}
        >
          Month
        </Link>
      </section>

      <ReportsSummary range={range} />
    </>
  );
}

export default Reports;
