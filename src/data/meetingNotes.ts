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
    filename: "HPOA Minutes 01-07-2020.doc"
  }
];

/**
 * 2013
 */
const entriesFor2013: IMeeting[] = [
  {
    date: "2013-11-11",
    category: "regular",
    title: "Minutes",
    filename: "11-9-2013 minutes.pdf"
  },
  {
    date: "2013-06-01",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_2013.pdf"
  }
];

/**
 * 2012
 */
const entriesFor2012: IMeeting[] = [
  {
    date: "2012-06-02",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA Annual Meeting Minutes 2012.pdf"
  },
  {
    date: "2012-05-14",
    category: "regular",
    title: "Minutes",
    filename: "05-14-2012 minutes.pdf"
  },
  {
    date: "2012-04-09",
    category: "regular",
    title: "Minutes",
    filename: "04-09-2012 Minutes.pdf"
  },
  {
    date: "2012-01-09",
    category: "regular",
    title: "Minutes",
    filename: "01-09-12 Minutes.pdf"
  }
];

/**
 * 2011
 */
const entriesFor2011: IMeeting[] = [
  {
    date: "2011-11-08",
    category: "regular",
    title: "Minutes",
    filename: "11-08-11 minutes.pdf"
  },
  {
    date: "2011-09-13",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 9-13-11.pdf"
  },
  {
    date: "2011-08-09",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 8-9-2011.pdf"
  },
  {
    date: "2011-07-12",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 7-12-2011.pdf"
  },
  {
    date: "2011-06-20",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 6-20-11.pdf"
  },
  {
    date: "2011-03-21",
    category: "regular",
    title: "Minutes",
    filename: "03-21-11 Minutes.pdf"
  }
];

/**
 * 2010 - New decade!
 */
const entriesFor2010: IMeeting[] = [
  {
    date: "2010-11-15",
    category: "annual",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20101115.pdf"
  },
  {
    date: "2010-06-05",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20100605.pdf"
  },
  {
    date: "2010-01-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20100112.pdf"
  },
  {
    date: "2010-01-01",
    category: "budget",
    title: "2009-2010 Budget",
    filename: "2010-2011_Budget.pdf"
  }
];

/**
 * 2009
 */
const entriesFor2009: IMeeting[] = [
  {
    date: "2009-12-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20091208.pdf"
  },
  {
    date: "2009-09-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090908.pdf"
  },
  {
    date: "2009-07-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090714.pdf"
  },
  {
    date: "2009-06-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090609.pdf"
  },
  {
    date: "2009-05-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090512.pdf"
  },
  {
    date: "2009-04-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090414.pdf"
  },
  {
    date: "2009-03-21",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20090315.pdf"
  },
  {
    date: "2009-03-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090310.pdf"
  },
  {
    date: "2009-02-15",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090215.pdf"
  }
];

const entriesFor2008: IMeeting[] = [
  {
    date: "2008-10-19",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20081019.pdf"
  },
  {
    date: "2008-09-21",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080921.pdf"
  },
  {
    date: "2008-08-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080812.pdf"
  },
  {
    date: "2008-07-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080708.pdf"
  },
  {
    date: "2008-06-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080610.pdf"
  },
  {
    date: "2008-05-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080513.pdf"
  },
  {
    date: "2008-04-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080408.pdf"
  },
  {
    date: "2008-03-15",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20080315.pdf"
  },
  {
    date: "2008-03-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080311.pdf"
  },
  {
    date: "2008-02-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080212.pdf"
  },
  {
    date: "2008-01-22",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080122.pdf"
  }
];

const entriesFor2007: IMeeting[] = [
  {
    date: "2007-12-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071211.pdf"
  },
  {
    date: "2007-11-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071113.pdf"
  },
  {
    date: "2007-10-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071009.pdf"
  },
  {
    date: "2007-09-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070911.pdf"
  },
  {
    date: "2007-08-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070814.pdf"
  },
  {
    date: "2007-03-17",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOADraftAnnualMeetingMinutes2007.pdf"
  },
  {
    date: "2007-03-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070313.pdf"
  }
];

const allEntries: IMeeting[] = entriesFor2020.concat(
  entriesFor2013,
  entriesFor2012,
  entriesFor2011,
  entriesFor2010,
  entriesFor2009,
  entriesFor2008,
  entriesFor2007
);

export const MEETING_NOTES_DATA = allEntries;
