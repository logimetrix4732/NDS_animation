import React from "react";
import CommonBanner from "../components/BannersComponents/CommonBanner";
import ReportsSection from "../components/AnnualReportComponents/ReportsSection";

const AnnualReport = () => {
  return (
    <div>
      <CommonBanner
        title="Annual Report"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
      <ReportsSection />
    </div>
  );
};

export default AnnualReport;
