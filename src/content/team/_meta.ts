import type { MetaRecord } from "nextra"

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    title: "Team Management",
    display: "hidden", //hide the group index from navigation
  },
  "common-ground": {
    title: "Common Ground",
  },
  "feedback": {
    title: "Feedback", 
  },
  "individual-growth": {
    title: "Individual Growth",
  },
  "leave-and-absence-guidelines": {
    title: "Leave & Absence Guidelines",
  },
  "leave-and-absence-guidelines-revised": {
    title: "Leave & Absence Guidelines (Revised)",
  }
}

export default meta
