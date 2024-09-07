"use client";

import CsvDownloader from "react-csv-downloader";

const CsvDownload = ({ data }) => {
  return (
    <button className="bg-slate-400 hover:opacity-80 rounded-sm px-3 py-2">
      <CsvDownloader
        filename="attendee-list"
        extension=".csv"
        separator=";"
        wrapColumnChar="'"
        datas={data}
        className="text-xs font-semibold"
      >
        Export CSV
      </CsvDownloader>
    </button>
  );
};

export default CsvDownload;
