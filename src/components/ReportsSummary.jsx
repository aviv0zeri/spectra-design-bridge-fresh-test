import { reportsSummary } from "../data/dashboardData.js";
import "./ReportsSummary.css";

function ReportsSummary({ range }) {
  const { label, value } = reportsSummary[range];

  return (
    <div className="reports-summary">
      <p className="reports-summary-value">{value}</p>
      <p className="reports-summary-label">{label}</p>
    </div>
  );
}

export default ReportsSummary;
