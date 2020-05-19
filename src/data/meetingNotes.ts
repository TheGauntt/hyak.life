import moment from "moment";

// full path:
// hyak_files/meeting_notes/{{year}}/{{filename}}

export interface IMeeting {
  date: string;
  category: string;
  title: string;
  filename: string;
}

/**
 * 2020 - New decade!
 */
const entriesFor2020: IMeeting[] = [
  {
    date: "2020-01-07",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 01-07-2020.pdf",
  },
];

/**
 * 2019 - I'm sure something happened this year
 */
const entriesFor2019: IMeeting[] = [
  {
    date: "2019-11-05",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-5-2019.pdf",
  },
  {
    date: "2019-09-03",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 9-3-2019.pdf",
  },
  {
    date: "2019-07-02",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 7-2-2019.pdf",
  },
  {
    date: "2019-05-07",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 5-7-2019.pdf",
  },
  {
    date: "2019-03-05",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 3-5-2019.pdf",
  },
];

/**
 * 2018 - The year of the horse
 */
const entriesFor2018: IMeeting[] = [
  {
    date: "2018-11-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-12-2018.pdf",
  },
  {
    date: "2018-09-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA meeting minutes 9.10.18.docx",
  },
  {
    date: "2018-07-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 07-09-2018.pdf",
  },
];

/**
 * 2017 - a year
 */
const entriesFor2017: IMeeting[] = [
  // {
  // }
];

/**
 * 2016 - whew
 */
const entriesFor2016: IMeeting[] = [
  {
    date: "2016-05-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 05-09-2016.pdf",
  },
  {
    date: "2016-03-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 03-14-2016.pdf",
  },
  {
    date: "2016-01-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 01-11-2016.pdf",
  },
];

/**
 * 2015
 */
const entriesFor2015: IMeeting[] = [
  {
    date: "2015-11-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-09-2015.pdf",
  },
  {
    date: "2015-10-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 10-12-2015.pdf",
  },
  {
    date: "2015-09-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 09-14-2015.pdf",
  },
  {
    date: "2015-07-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 07-13-2015.pdf",
  },
  {
    date: "2015-06-06",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_2015.pdf",
  },
  {
    date: "2015-05-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 05-11-2015.pdf",
  },
  {
    date: "2015-03-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 03-09-2015.pdf",
  },
];

/**
 * 2014
 */
const entriesFor2014: IMeeting[] = [
  {
    date: "2014-11-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-10-14.pdf",
  },
  {
    date: "2014-09-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 9-08-14.pdf",
  },
  {
    date: "2014-07-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 7-14-14.pdf",
  },
  {
    date: "2014-03-10",
    category: "regular",
    title: "Minutes",
    filename: "03-10-2014 minutes.pdf",
  },
];

/**
 * 2013
 */
const entriesFor2013: IMeeting[] = [
  {
    date: "2013-11-11",
    category: "regular",
    title: "Minutes",
    filename: "11-9-2013 minutes.pdf",
  },
  {
    date: "2013-06-01",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_2013.pdf",
  },
];

/**
 * 2012
 */
const entriesFor2012: IMeeting[] = [
  {
    date: "2012-06-02",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA Annual Meeting Minutes 2012.pdf",
  },
  {
    date: "2012-05-14",
    category: "regular",
    title: "Minutes",
    filename: "05-14-2012 minutes.pdf",
  },
  {
    date: "2012-04-09",
    category: "regular",
    title: "Minutes",
    filename: "04-09-2012 Minutes.pdf",
  },
  {
    date: "2012-01-09",
    category: "regular",
    title: "Minutes",
    filename: "01-09-12 Minutes.pdf",
  },
];

/**
 * 2011
 */
const entriesFor2011: IMeeting[] = [
  {
    date: "2011-11-08",
    category: "regular",
    title: "Minutes",
    filename: "11-08-11 minutes.pdf",
  },
  {
    date: "2011-09-13",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 9-13-11.pdf",
  },
  {
    date: "2011-08-09",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 8-9-2011.pdf",
  },
  {
    date: "2011-07-12",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 7-12-2011.pdf",
  },
  {
    date: "2011-06-20",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 6-20-11.pdf",
  },
  {
    date: "2011-03-21",
    category: "regular",
    title: "Minutes",
    filename: "03-21-11 Minutes.pdf",
  },
];

/**
 * 2010 - New decade!
 */
const entriesFor2010: IMeeting[] = [
  {
    date: "2010-11-15",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20101115.pdf",
  },
  {
    date: "2010-06-05",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20100605.pdf",
  },
  {
    date: "2010-01-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20100112.pdf",
  },
  {
    date: "2010-01-01",
    category: "budget",
    title: "2009-2010 Budget",
    filename: "2010-2011_Budget.pdf",
  },
];

/**
 * 2009
 */
const entriesFor2009: IMeeting[] = [
  {
    date: "2009-12-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20091208.pdf",
  },
  {
    date: "2009-09-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090908.pdf",
  },
  {
    date: "2009-07-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090714.pdf",
  },
  {
    date: "2009-06-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090609.pdf",
  },
  {
    date: "2009-05-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090512.pdf",
  },
  {
    date: "2009-04-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090414.pdf",
  },
  {
    date: "2009-03-21",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20090315.pdf",
  },
  {
    date: "2009-03-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090310.pdf",
  },
  {
    date: "2009-02-15",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090215.pdf",
  },
];

const entriesFor2008: IMeeting[] = [
  {
    date: "2008-10-19",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20081019.pdf",
  },
  {
    date: "2008-09-21",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080921.pdf",
  },
  {
    date: "2008-08-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080812.pdf",
  },
  {
    date: "2008-07-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080708.pdf",
  },
  {
    date: "2008-06-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080610.pdf",
  },
  {
    date: "2008-05-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080513.pdf",
  },
  {
    date: "2008-04-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080408.pdf",
  },
  {
    date: "2008-03-15",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20080315.pdf",
  },
  {
    date: "2008-03-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080311.pdf",
  },
  {
    date: "2008-02-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080212.pdf",
  },
  {
    date: "2008-01-22",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080122.pdf",
  },
];

const entriesFor2007: IMeeting[] = [
  {
    date: "2007-12-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071211.pdf",
  },
  {
    date: "2007-11-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071113.pdf",
  },
  {
    date: "2007-10-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071009.pdf",
  },
  {
    date: "2007-09-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070911.pdf",
  },
  {
    date: "2007-08-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070814.pdf",
  },
  {
    date: "2007-03-17",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOADraftAnnualMeetingMinutes2007.pdf",
  },
  {
    date: "2007-03-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070313.pdf",
  },
];

const allEntries: IMeeting[] = ([] as IMeeting[]).concat(
  entriesFor2020,
  entriesFor2019,
  entriesFor2018,
  entriesFor2017,
  entriesFor2016,
  entriesFor2015,
  entriesFor2014,
  entriesFor2013,
  entriesFor2012,
  entriesFor2011,
  entriesFor2010,
  entriesFor2009,
  entriesFor2008,
  entriesFor2007
);

// Sort in descending order
allEntries.sort((a, b) => {
  const momeA = moment(a.date, "YYYY-MM-DD");
  const momeB = moment(b.date, "YYYY-MM-DD");
  return momeB.diff(momeA);
});

const years: string[] = [];
allEntries.forEach((entry) => {
  let year = String(moment(entry.date).year());
  if (!years.includes(year)) {
    years.push(year);
  }
});

export const MEETING_NOTES_YEARS = years;
export const MEETING_NOTES_DATA = allEntries;
